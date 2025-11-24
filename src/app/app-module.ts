import { LOCALE_ID, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { PrimeNgModule } from './prime-ng/prime-ng-module';
import { SharedModule } from './shared/shared-module';

import localEsHN from '@angular/common/locales/es-HN';
import localFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsHN)
registerLocaleData(localFrCA)

@NgModule({
  declarations: [
    App,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PrimeNgModule,
    SharedModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          // darkModeSelector: false || 'none'
        }
      }
    }),
    {
      provide: LOCALE_ID, useValue: 'es-HN'
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
