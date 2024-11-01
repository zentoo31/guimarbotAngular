import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideLottieOptions } from 'ngx-lottie';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideAnimations(),
              provideLottieOptions({
                player: () => import('lottie-web'),
              }),
              provideClientHydration(),
              provideHttpClient(withFetch())
            ]
};
