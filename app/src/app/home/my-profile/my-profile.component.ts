import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreDbService, OBJECTNAME, ServicesService, UtilsService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  private languageSub?: Subscription;
  private userSub?: Subscription;

  loading = false;
  saved = false;
  error = '';
  loggedUser: any = null;

  profile = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: '',
  };

  constructor(
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private storeDb: StoreDbService,
    private utilSvc: UtilsService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
    });

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
        this.populateProfile(user || null);
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      this.populateProfile(this.loggedUser);
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }

  populateProfile(user: any): void {
    this.profile = {
      firstname: user?.firstname || user?.firstName || '',
      lastname: user?.lastname || user?.lastName || '',
      phone: user?.phone || '',
      email: user?.email || '',
      address: user?.address || '',
    };
  }

  async saveProfile(): Promise<void> {
    this.saved = false;
    this.error = '';

    const uid = this.loggedUser?.userId || this.loggedUser?.uid;
    if (!uid) {
      this.error = this.t('loginRequired');
      return;
    }

    this.loading = true;
    try {
      const payload = {
        ...(this.loggedUser || {}),
        ...this.profile,
        userId: uid,
        displayName: `${this.profile.firstname} ${this.profile.lastname}`.trim() || this.profile.email,
        modifiedTS: Date.now(),
      };

      await (this.storeDb as any).updateObject(
        (this.utilSvc as any).backendFBstoreId,
        (this.utilSvc as any).mdb,
        OBJECTNAME.bnUsers,
        payload,
        uid
      );

      const svc = this.mainSvc as any;
      if (typeof svc.setLoggedUser === 'function') {
        await svc.setLoggedUser(payload);
      } else if (svc.bnUserO && typeof svc.bnUserO.next === 'function') {
        svc.bnUserO.next(payload);
      }

      this.loggedUser = payload;
      this.saved = true;
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    } finally {
      this.loading = false;
    }
  }

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Espace client',
        title: 'Mon profil',
        intro: 'Mettez à jour vos informations personnelles. Elles seront utilisées pour vos réservations et paiements.',
        firstname: 'Prénom',
        lastname: 'Nom',
        phone: 'Téléphone',
        email: 'Email',
        address: 'Adresse',
        save: 'Enregistrer mon profil',
        saving: 'Enregistrement...',
        saved: 'Votre profil a bien été mis à jour.',
        loginRequired: 'Vous devez être connecté pour modifier votre profil.',
        saveError: 'Impossible d’enregistrer votre profil pour le moment.',
      },
      en: {
        eyebrow: 'Customer area',
        title: 'My profile',
        intro: 'Update your personal information. It will be used for your bookings and payments.',
        firstname: 'First name',
        lastname: 'Last name',
        phone: 'Phone number',
        email: 'Email',
        address: 'Address',
        save: 'Save my profile',
        saving: 'Saving...',
        saved: 'Your profile has been updated.',
        loginRequired: 'You must be logged in to edit your profile.',
        saveError: 'Unable to save your profile right now.',
      },
      es: {
        eyebrow: 'Área cliente',
        title: 'Mi perfil',
        intro: 'Actualice sus datos personales. Se utilizarán para sus reservas y pagos.',
        firstname: 'Nombre',
        lastname: 'Apellido',
        phone: 'Teléfono',
        email: 'Email',
        address: 'Dirección',
        save: 'Guardar mi perfil',
        saving: 'Guardando...',
        saved: 'Su perfil ha sido actualizado.',
        loginRequired: 'Debe iniciar sesión para modificar su perfil.',
        saveError: 'No se puede guardar su perfil en este momento.',
      }
    };
    return labels[this.currentLanguage][key] || labels.en[key] || key;
  }
}
