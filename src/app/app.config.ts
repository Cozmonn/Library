import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"library-f8088","appId":"1:877135932792:web:ae30cff9ce3d5ea5916c8d","storageBucket":"library-f8088.appspot.com","apiKey":"AIzaSyDDnVY6H5AjuMbj80RnnpkovYNusviOAMU","authDomain":"library-f8088.firebaseapp.com","messagingSenderId":"877135932792"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAppCheck(() => {
  // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
  const provider = new ReCaptchaEnterpriseProvider('6Lcfe5YpAAAAADvJG0hcI4WzNJToYAqot3JwtKco');
  return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
})), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideRemoteConfig(() => getRemoteConfig()))]
};
