import { bootstrapApplication } from '@angular/platform-browser';
import { PrincipalComponent } from './app/components/principal/principal.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

bootstrapApplication(PrincipalComponent,  {
  providers: [
    provideHttpClient(),
    ...appConfig.providers
  ],
})
  .catch((err) => console.error(err));
