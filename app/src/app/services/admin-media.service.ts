import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { StoreDbService, UsersService } from 'godigital-lib';

export interface AdminMediaUploadResult {
  ok: boolean;
  path: string;
  url: string;
  contentType: string;
  size: number;
}

@Injectable({ providedIn: 'root' })
export class AdminMediaService {
  constructor(
    private http: HttpClient,
    private storeDb: StoreDbService,
    private users: UsersService,
  ) {}

  async upload(file: File, category: 'outings' | 'boat' | 'gallery' | 'content', subject: string): Promise<AdminMediaUploadResult> {
    const token = await this.idToken();
    const data = new FormData();
    data.append('file', file, file.name);
    data.append('category', category);
    data.append('subject', subject);

    return firstValueFrom(this.http.post<AdminMediaUploadResult>(
      '/api/admin/media/upload',
      data,
      { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) },
    ).pipe(timeout(60000)));
  }

  previewUrl(path: string): string {
    const value = String(path || '').trim();
    if (!value) return '';
    if (/^(https?:\/\/|data:|blob:|assets\/|\/assets\/)/i.test(value)) return value;
    if (value.startsWith('alegria/img/')) {
      return `/api/media/object?path=${encodeURIComponent(value)}`;
    }
    return value;
  }

  private async idToken(): Promise<string> {
    const store: any = this.storeDb as any;
    const userService: any = this.users as any;
    const globalFirebase: any = (window as any).firebase;
    const candidates = [
      store?.auth?.currentUser,
      store?.firebaseAuth?.currentUser,
      store?.currentUser,
      store?.bnUser,
      userService?.auth?.currentUser,
      userService?.firebaseAuth?.currentUser,
      userService?.currentUser,
      globalFirebase?.auth ? globalFirebase.auth()?.currentUser : null,
    ];
    for (const user of candidates) {
      if (user && typeof user.getIdToken === 'function') {
        const token = await user.getIdToken(true);
        if (token) return token;
      }
      const direct = user?.stsTokenManager?.accessToken || user?.accessToken;
      if (direct) return direct;
    }

    for (let index = 0; index < localStorage.length; index++) {
      const key = localStorage.key(index) || '';
      if (!key.startsWith('firebase:authUser:')) continue;
      try {
        const authUser = JSON.parse(localStorage.getItem(key) || '{}');
        const token = authUser?.stsTokenManager?.accessToken || authUser?._tokenResponse?.idToken;
        if (token) return token;
      } catch {}
    }
    for (let index = 0; index < sessionStorage.length; index++) {
      const key = sessionStorage.key(index) || '';
      if (!key.startsWith('firebase:authUser:')) continue;
      try {
        const authUser = JSON.parse(sessionStorage.getItem(key) || '{}');
        const token = authUser?.stsTokenManager?.accessToken || authUser?._tokenResponse?.idToken;
        if (token) return token;
      } catch {}
    }
    throw new Error('Votre session administrateur a expiré. Reconnectez-vous avant de téléverser une photo.');
  }
}
