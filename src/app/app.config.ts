import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAuth, LogLevel } from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), 
              provideClientHydration(),
              provideHttpClient(withFetch()),
              provideAuth({
                config: {
                  authority: 'https://accounts.google.com',
                  redirectUrl: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200',
                  postLogoutRedirectUri: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4200',
                  clientId: '87730492966-s2pnul5lcu28ivho3qocppanpu01ek9l.apps.googleusercontent.com',
                  scope: 'openid profile email offline_access',
                  responseType: 'code',
                  silentRenew: true,
                  useRefreshToken: true,
                  logLevel: LogLevel.Debug,
                }
              }),
            ]
};
