import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';
import { BehaviorSubject } from 'rxjs';

export enum OBJECTNAME {
  bnBoats = 'backendboats',
  bnUsers = 'backendusers',
  bnMessages = 'backendmessages',
  bnBookings = 'backendbookings',
  bnFeedbacks = 'backendfeedbacks',
  bnMainpage = 'backendmainpage',
  bnEvents = 'backendevents',
  bnSkippers = 'backendskippers',
  bnOwners = 'backendowners',
}

export enum AUTHSTATUS {
  SUCCESS = 1,
  EMAILNOTVERIFIED = -1,
  UPDATETOKENFAILED = -2,
  UNKNOWNERROR = -100
}

@Injectable({ providedIn: 'root' })
export class StoreDbService {
  private app?: firebase.app.App;
  private totototo;

  /** Firebase singletons (ready after init()) */
  public db!: firebase.database.Database;
  public storage!: firebase.storage.Storage;
  public auth!: firebase.auth.Auth;

  /** Auth state */
  public currentUser: firebase.User | null = null;
  public authState$ = new BehaviorSubject<firebase.User | null>(null);

  /** You call this ONCE at app startup */
  init(config: any): void {
    if (this.app) return;

    this.app = firebase.initializeApp(config);

    this.db = firebase.database(this.app);
    this.storage = firebase.storage(this.app);
    this.auth = firebase.auth(this.app);

    // Persist session
    this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => { });

    // Support redirect flows (Google auth etc.)
    this.auth.getRedirectResult().catch(() => { });

    this.auth.onAuthStateChanged(user => {
      this.currentUser = user;
      this.authState$.next(user);
    });
  }

  /** Safety guard (helps catch "init not called" early) */
  private ensureReady(): void {
    if (!this.app || !this.db || !this.storage || !this.auth) {
      throw new Error(
        'Firebase not initialized. Call StoreDbService.init(firebaseConfig) once before using it.'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // RTDB PATH NORMALIZATION
  // ---------------------------------------------------------------------------
  /**
   * Supports BOTH styles:
   *  - "backendmainpage/owner-home-layali"
   *  - "backendmainpage" + refId
   * Also supports your old "storeId" prefix by stripping it if present:
   *  - "1000/backendmainpage/..." -> "backendmainpage/..."
   */
  private normalizeDbPath(pathOrObject: string, refId?: string | number): string {
    let p = (pathOrObject || '').trim().replace(/^\/+/, '');

    // If caller passes "backendmainpage" + id
    if (refId !== undefined && refId !== null && refId !== -1 && `${refId}`.length) {
      if (!p.endsWith('/')) p += '/';
      p += String(refId);
    }

    // Strip "1000/" or "<digits>/" if you still have that in DB paths
    p = p.replace(/^\d+\//, '');

    return p;
  }

  // ---------------------------------------------------------------------------
  // RTDB CRUD
  // ---------------------------------------------------------------------------

  async getObject<T>(fbObjectOrPath: string, refId?: any): Promise<T | null> {
    this.ensureReady();
    const path = this.normalizeDbPath(fbObjectOrPath, refId);
    const snap = await this.db.ref(path).once('value');
    return snap.exists() ? (snap.val() as T) : null;
  }

  async updateObject(fbObjectOrPath: string, objectData: any, refId?: any): Promise<any> {
    this.ensureReady();
    if (!objectData) throw new Error('updateObject: objectData is required');

    const path = this.normalizeDbPath(fbObjectOrPath, refId);

    // Keep your modifiedTS behavior
    const now = Date.now();
    objectData.modifiedTS = now;

    await this.db.ref(path).set(objectData);
    return objectData;
  }

  async partialUpdateObject(fbObjectOrPath: string, patch: any, refId?: any): Promise<any> {
    this.ensureReady();
    if (!patch) throw new Error('partialUpdateObject: patch is required');

    const path = this.normalizeDbPath(fbObjectOrPath, refId);

    patch.modifiedTS = Date.now();
    await this.db.ref(path).update(patch);
    return patch;
  }

  async removeObject(fbObjectOrPath: string, refId?: any): Promise<string | undefined> {
    this.ensureReady();
    if (refId === undefined || refId === null) return undefined;

    const path = this.normalizeDbPath(fbObjectOrPath, refId);
    await this.db.ref(path).remove();
    return String(refId);
  }

  // ---------------------------------------------------------------------------
  // RTDB SUBSCRIPTIONS (simple)
  // ---------------------------------------------------------------------------

  /**
   * Subscribe to "value" changes.
   * Returns an unsubscribe function.
   */
  subscribeObject<T>(
    fbObjectOrPath: string,
    onValue: (val: T | null) => void,
    refId?: any
  ): () => void {
    this.ensureReady();

    const path = this.normalizeDbPath(fbObjectOrPath, refId);
    const ref = this.db.ref(path);

    const handler = (snap: firebase.database.DataSnapshot) => {
      onValue(snap.exists() ? (snap.val() as T) : null);
    };

    ref.on('value', handler);
    return () => ref.off('value', handler);
  }

  // ---------------------------------------------------------------------------
  // STORAGE HELPERS
  // ---------------------------------------------------------------------------

  /**
   * Accepts:
   *  - Full URL -> returned as-is
   *  - "mainpages/owner-home-layali/boat/a.webp" -> tokened URL
   *  - "/mainpages/..." -> tokened URL
   */
  async getDownloadUrl(pathOrUrl: string): Promise<string> {
    this.ensureReady();
    const p = (pathOrUrl || '').trim();
    if (!p) throw new Error('getDownloadUrl: empty path');

    if (/^https?:\/\//i.test(p)) return p;

    const clean = p.replace(/^\/+/, '');
    return this.storage.ref(clean).getDownloadURL();
  }

  /**
   * List image URLs directly under a folder (no recursion).
   */
  async listImageUrlsFlat(folderPath: string): Promise<string[]> {
    this.ensureReady();
    const clean = (folderPath || '').trim().replace(/^\/+/, '');
    if (!clean) return [];

    try {
      const res = await this.storage.ref(clean).listAll();
      const urls: string[] = [];

      for (const item of res.items) {
        const n = (item.name || '').toLowerCase();
        if (n === '.ds_store') continue;
        if (!/\.(png|jpg|jpeg|webp|gif|avif|svg)$/i.test(n)) continue;
        urls.push(await item.getDownloadURL());
      }
      return urls;
    } catch {
      return [];
    }
  }

  /**
   * Recursive listing (folder + subfolders).
   */
  async listImageUrlsRecursive(folderPath: string): Promise<string[]> {
    this.ensureReady();
    const clean = (folderPath || '').trim().replace(/^\/+/, '');
    if (!clean) return [];

    try {
      const ref = this.storage.ref(clean);
      const res = await ref.listAll();

      const urls: string[] = [];

      for (const item of res.items) {
        const n = (item.name || '').toLowerCase();
        if (n === '.ds_store') continue;
        if (!/\.(png|jpg|jpeg|webp|gif|avif|svg)$/i.test(n)) continue;
        urls.push(await item.getDownloadURL());
      }

      for (const sub of res.prefixes) {
        urls.push(...(await this.listImageUrlsRecursive(sub.fullPath)));
      }

      return urls;
    } catch {
      return [];
    }
  }

  /** Upload a File to Storage under `directory/filename` and return download URL */
  async uploadFile(directory: string, file: File): Promise<string> {
    this.ensureReady();
    if (!file) throw new Error('uploadFile: file is required');

    const cleanDir = (directory || '').trim().replace(/^\/+/, '').replace(/\/+$/, '');
    const fullPath = cleanDir ? `${cleanDir}/${file.name}` : file.name;

    const ref = this.storage.ref(fullPath);
    await ref.put(file);
    return await ref.getDownloadURL();
  }

  /** Upload from an <input type="file"> change event */
  async uploadFromInputEvent(directory: string, event: any): Promise<string> {
    const file: File | undefined = event?.target?.files?.[0];
    if (!file) throw new Error('uploadFromInputEvent: no file found in event.target.files[0]');
    return this.uploadFile(directory, file);
  }

  /** Delete by storage path like "mainpages/owner-home-layali/boat/a.webp" */
  async deleteByPath(path: string): Promise<void> {
    this.ensureReady();
    const clean = (path || '').trim().replace(/^\/+/, '');
    if (!clean) return;
    await this.storage.ref(clean).delete();
  }

  /** Delete by full download URL */
  async deleteByUrl(url: string): Promise<void> {
    this.ensureReady();
    const u = (url || '').trim();
    if (!u) return;
    await this.storage.refFromURL(u).delete();
  }

  /** Get a Storage reference directly (useful for advanced operations) */
  storageRef(path: string): firebase.storage.Reference {
    this.ensureReady();
    const clean = (path || '').trim().replace(/^\/+/, '');
    return this.storage.ref(clean);
  }
  // ---------------------------------------------------------------------------
  // RTDB MULTI-PATH UPDATE (atomic)
  // ---------------------------------------------------------------------------
  async multiPathUpdate(updates: Record<string, any>): Promise<void> {
    this.ensureReady();
    if (!updates || typeof updates !== 'object') throw new Error('multiPathUpdate: updates is required');

    // normalize keys: remove leading slashes and any "<digits>/" prefix
    const normalized: Record<string, any> = {};
    for (const [k, v] of Object.entries(updates)) {
      const cleanKey = this.normalizeDbPath(k);
      normalized[cleanKey] = v;
    }

    await this.db.ref().update(normalized);
  }

  /** RTDB push key generator for unique IDs */
  pushKey(path: string): string {
    this.ensureReady();
    const clean = this.normalizeDbPath(path);
    const ref = this.db.ref(clean).push();
    if (!ref.key) throw new Error('pushKey: failed to create key');
    return ref.key;
  }

}
