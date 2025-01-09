import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AlunosComponent } from './components/alunos/alunos.component';

export const routes: Routes = [
  {path: 'home', component: PrincipalComponent },
  {path: 'alunos', component: AlunosComponent  }
];
