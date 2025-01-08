import { bootstrapApplication } from '@angular/platform-browser';
import { PrincipalComponent } from './app/components/principal/principal.component';

bootstrapApplication(PrincipalComponent)
  .catch((err) => console.error(err));
