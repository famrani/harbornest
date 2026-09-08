// boatowners.service.ts
import * as admin from 'firebase-admin';
import * as xlsx from 'xlsx';
import multer, { Multer, StorageEngine } from 'multer';
import { StoreDbService } from './firebase.service';

interface OwnerXlsConfig {
  storagePath?: string;
  downloadUrl?: string;
  updatedAt?: number;
  lastImportAt?: number;
  lastImportStatus?: string;
  lastImportMessage?: string;
}

const upload = multer({ storage: multer.memoryStorage() });


export class BoatownersService {

  constructor(private stbDbSvc: StoreDbService) {}

  // Small helper – you can keep it inside the class
  private safeParseJson<T>(value: any, fallback: T): T {
    if (value === undefined || value === null || value === '') return fallback;
    if (typeof value !== 'string') return value as T;
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }

  setRoutes(router: any) {

    // ... your /api/users/upsert + /boatowners/config/xls/upload routes here ...
        router.post(
          '/boatowners/config/xls/upload',
          upload.single('file'),
          async (req, res) => {
            try {
              const ownerId = req.body?.ownerId;
              const file = req.file as multer.File; // ✔️ Works with modern TS + multer
    
              if (!ownerId || !file) {
                return res.status(400).json({ message: 'ownerId and file are required.' });
              }
    
              // You can also verify that the authenticated user === ownerId here
              // e.g. if you use Firebase Auth decoded tokens on req.user
    
              // --- Upload to Firebase Storage ---
              const bucket = this.stbDbSvc.bucket;  // uses default bucket
              const storagePath = `owner-config/${ownerId}/boatify-config.xlsx`;
              const fileRef = bucket.file(storagePath);
    
              await fileRef.save(file.buffer, {
                contentType: file.mimetype || 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                resumable: false,
              });
    
              // Build public download URL (assuming your Storage rules allow it or you use token)
              const encodedPath = encodeURIComponent(storagePath);
              const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedPath}?alt=media`;
    
              const updatedAt = Date.now();
    
              const xlsConfig: OwnerXlsConfig = {
                storagePath,
                downloadUrl,
                updatedAt,
              };
    
              // --- Save metadata to RTDB ---
              await this.stbDbSvc.db.ref(`/backendusers/${ownerId}/ownerConfig/xls`).set(xlsConfig);
    
              return res.json(xlsConfig);
            } catch (e: any) {
              console.error('[xls-upload] error', e);
              return res.status(500).json({ message: 'Upload failed.' });
            }
          }
        );
    

    // ------------------------------------------------------------------------
    // 2) IMPORT XLS → RTDB structures
    // ------------------------------------------------------------------------
    router.post('/boatowners/config/xls/import', async (req, res) => {
      const ownerId = req.body?.ownerId;
      if (!ownerId) {
        return res.status(400).json({ message: 'ownerId is required.' });
      }

      const cfgRef = this.stbDbSvc.db.ref(`/backendusers/${ownerId}/ownerConfig/xls`);
      const now = Date.now();

      try {
        // 1) Read XLS config metadata
        const snap = await cfgRef.get();
        const cfg = snap.val() as OwnerXlsConfig | null;

        if (!cfg || !cfg.storagePath) {
          return res.status(400).json({ message: 'No XLS file registered for this owner.' });
        }

        // 2) Download XLS from Storage
        const bucket = admin.storage().bucket();
        const fileRef = bucket.file(cfg.storagePath);
        const [buffer] = await fileRef.download();

        // 3) Parse XLS
        const workbook = xlsx.read(buffer, { type: 'buffer' });

        const homepageSheet = workbook.Sheets['homepage'];
        const eventsSheet   = workbook.Sheets['events'];
        const boatsSheet    = workbook.Sheets['boats'];
        const skipperSheet  = workbook.Sheets['skipper'];

        if (!homepageSheet) {
          throw new Error('Sheet "homepage" is missing in the XLS file.');
        }

        const homepageRows = xlsx.utils.sheet_to_json<any>(homepageSheet, { defval: '' });
        const eventsRows   = eventsSheet  ? xlsx.utils.sheet_to_json<any>(eventsSheet,  { defval: '' }) : [];
        const boatsRows    = boatsSheet   ? xlsx.utils.sheet_to_json<any>(boatsSheet,   { defval: '' }) : [];
        const skipperRows  = skipperSheet ? xlsx.utils.sheet_to_json<any>(skipperSheet, { defval: '' }) : [];

        if (homepageRows.length === 0) {
          throw new Error('No homepage rows found in "homepage" sheet.');
        }

        // For simplicity, assume ONE homepage row per owner
        const hp = homepageRows[0];

        const mainpageId: string = hp.mainpageId;
        if (!mainpageId) {
          throw new Error('Column "mainpageId" in sheet "homepage" is required.');
        }

        // 4) Build homepage doc for /backendmainpage/<mainpageId>
        //    Columns expected from your example:
        //    mainpageId, ownerId, siteName, noticeText, noticeCtaLabel, noticeCtaLink, heroTitle, heroLead,
        //    heroBadges_json, heroPrimaryCtaLabel, heroPrimaryCtaLink, heroSecondaryCtaLabel,
        //    heroSecondaryCtaLink, heroImage, experienceTitle, experienceItems_json,
        //    signatureTitle, signatureTrips_json, aboutBoatTitle, aboutBoatText,
        //    aboutBoatBadges_json, aboutBoatImage, aboutBoatLink, testimonialsTitle,
        //    testimonials_json, galleryCtaLabel, galleryCtaLink
        const mainpageDoc = {
          mainpageId,
          ownerId: hp.ownerId || ownerId,
          siteName: hp.siteName || '',

          noticeText: hp.noticeText || '',
          noticeCtaLabel: hp.noticeCtaLabel || '',
          noticeCtaLink: hp.noticeCtaLink || '',

          heroTitle: hp.heroTitle || '',
          heroLead: hp.heroLead || '',
          // relative path like "home/hero.jpg"
          heroImage: hp.heroImage || 'home/hero.jpg',
          heroPrimaryCtaLabel: hp.heroPrimaryCtaLabel || '',
          heroPrimaryCtaLink: hp.heroPrimaryCtaLink || '',
          heroSecondaryCtaLabel: hp.heroSecondaryCtaLabel || '',
          heroSecondaryCtaLink: hp.heroSecondaryCtaLink || '',

          heroBadges_json: this.safeParseJson(hp.heroBadges_json, []),
          experienceTitle: hp.experienceTitle || '',
          experienceItems_json: this.safeParseJson(hp.experienceItems_json, []),

          signatureTitle: hp.signatureTitle || '',
          signatureTrips_json: this.safeParseJson(hp.signatureTrips_json, []),

          aboutBoatTitle: hp.aboutBoatTitle || '',
          aboutBoatText: hp.aboutBoatText || '',
          aboutBoatBadges_json: this.safeParseJson(hp.aboutBoatBadges_json, []),
          // relative path like "boats/lagoon40/cover.jpg"
          aboutBoatImage: hp.aboutBoatImage || '',
          aboutBoatLink: hp.aboutBoatLink || '',

          testimonialsTitle: hp.testimonialsTitle || '',
          testimonials_json: this.safeParseJson(hp.testimonials_json, []),

          galleryCtaLabel: hp.galleryCtaLabel || '',
          galleryCtaLink: hp.galleryCtaLink || '',
        };

        // 5) Prepare a multi-location update
        const updates: any = {};

        // 5.1 Homepage
        updates[`/backendmainpage/${mainpageId}`] = mainpageDoc;

        // 5.2 Events → /backendevents/<mainpageId>/<eventId>
        // Example expected columns in "events" sheet:
        // mainpageId, eventId, title, subtitle, description, duration, location,
        // maxGuests, priceFrom, image, ctaLabel, ctaLink, footerLeft, ...
        for (const ev of eventsRows) {
          const evMainpageId = ev.mainpageId || mainpageId;
          const eventId: string = ev.eventId || '';
          if (!eventId) continue;

          const eventDoc = {
            mainpageId: evMainpageId,
            eventId,
            title: ev.title || '',
            subtitle: ev.subtitle || '',
            description: ev.description || '',
            duration: ev.duration || '',
            location: ev.location || '',
            maxGuests: ev.maxGuests || 0,
            priceFrom: ev.priceFrom || 0,
            // relative path like "events/sunset/sunset1.jpg"
            image: ev.image || '',
            ctaLabel: ev.ctaLabel || '',
            ctaLink: ev.ctaLink || '',
            footerLeft: ev.footerLeft || '',
            // you can add more fields as needed
          };

          updates[`/backendevents/${evMainpageId}/${eventId}`] = eventDoc;
        }

        // 5.3 Boats → /backendboats/<mainpageId>/<boatId>
        // Example expected columns in "boats" sheet:
        // mainpageId, boatId, name, type, capacity, location, description,
        // image, images_json, ...
        for (const b of boatsRows) {
          const bMainpageId = b.mainpageId || mainpageId;
          const boatId: string = b.boatId || '';
          if (!boatId) continue;

          const boatDoc = {
            mainpageId: bMainpageId,
            boatId,
            name: b.name || '',
            type: b.type || b.boatType || '',
            capacity: b.capacity || 0,
            location: b.location || '',
            description: b.description || '',
            // main cover image, e.g. "boats/lagoon40/cover.jpg"
            image: b.image || '',
            // optional extra images as JSON text in XLS column
            images_json: this.safeParseJson(b.images_json, []),
          };

          updates[`/backendboats/${bMainpageId}/${boatId}`] = boatDoc;
        }

        // 5.4 Skipper → /backendskipper/<mainpageId>
        // Example expected columns in "skipper" sheet (1 row for now):
        // mainpageId, name, tagline, bio, photo, languages, experienceYears, ...
        if (skipperRows.length > 0) {
          const sk = skipperRows[0];

          const skMainpageId = sk.mainpageId || mainpageId;
          const skipperDoc = {
            mainpageId: skMainpageId,
            name: sk.name || '',
            tagline: sk.tagline || '',
            bio: sk.bio || '',
            // relative path like "skipper/photo.jpg"
            photo: sk.photo || '',
            languages: this.safeParseJson(sk.languages_json, []),
            experienceYears: sk.experienceYears || 0,
            certifications: this.safeParseJson(sk.certifications_json, []),
          };

          updates[`/backendskipper/${skMainpageId}`] = skipperDoc;
        }

        // 6) Apply all updates in one go
        await this.stbDbSvc.db.ref().update(updates);

        // 7) Update XLS import status
        const newCfg: OwnerXlsConfig = {
          ...cfg,
          lastImportAt: now,
          lastImportStatus: 'ok',
          lastImportMessage: 'Import succeeded.',
        };

        await cfgRef.set(newCfg);

        return res.json({ xlsConfig: newCfg });

      } catch (e: any) {
        console.error('[xls-import] error', e);

        try {
          const snap = await cfgRef.get();
          const cfg = (snap.val() as OwnerXlsConfig) || {};
          const errorCfg: OwnerXlsConfig = {
            ...cfg,
            lastImportAt: now,
            lastImportStatus: 'error',
            lastImportMessage: e?.message || 'Unknown import error',
          };
          await cfgRef.set(errorCfg);
          return res.status(500).json({ message: 'Import failed.', xlsConfig: errorCfg });
        } catch (inner) {
          console.error('[xls-import] failed to update error status', inner);
          return res.status(500).json({ message: 'Import failed.' });
        }
      }
    });
  }
}
