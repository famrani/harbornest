import { StoreDbService } from './firebase.service';

export class UsersService {

  constructor(private stbDbSvc: StoreDbService) { }

  setRoutes(router) {
    // user.service.ts (example)
    // POST /api/users/upsert
    // body: { uid, email, displayName, role: 'guest'|'boatOwner'|'serviceProvider'|'admin' }
    router.post('/api/users/upsert', async (req, res) => {
      const { uid, email, displayName, role } = req.body || {};
      if (!uid || !email || !role) return res.status(400).json({ error: 'uid, email, role required' });

      const roles = {
        guest: role === 'guest',
        boatOwner: role === 'boatOwner',
        serviceProvider: role === 'serviceProvider',
        admin: role === 'admin',
      };

      const now = Date.now();

      await this.stbDbSvc.db.ref(`/backendusers/${uid}`).update({
        uid, email, displayName: displayName || null, roles,
        lastLoginAt: now,
      });

      // Optionally, initialize owner/provider profile nodes
      if (roles.boatOwner) {
        await this.stbDbSvc.db.ref(`/backendowners/${uid}`).update({
          profile: { createdAt: now },
        });
      }
      if (roles.serviceProvider) {
        await this.stbDbSvc.db.ref(`/backendproviders/${uid}`).update({
          profile: { createdAt: now },
        });
      }

      res.json({ ok: true });
    });
  }

}