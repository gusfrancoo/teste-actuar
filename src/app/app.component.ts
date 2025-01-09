import { Component, OnInit } from '@angular/core';
import { PrincipalComponent } from './components/principal/principal.component';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PrincipalComponent],
})
export class AppComponent implements OnInit{
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
  }
}
