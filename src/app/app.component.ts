import { Component } from '@angular/core';
import { PrincipalComponent } from './components/principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PrincipalComponent], 
})
export class AppComponent {}
