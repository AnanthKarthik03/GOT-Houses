/**
 * Standalone bootstrap for Angular 19 application.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';
 
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,          // REST/HTTP
      BrowserAnimationsModule,   // Animations
      AppRoutingModule           // Routes (exports RouterModule)
    ),
  ],
}).catch((err) => console.error(err));