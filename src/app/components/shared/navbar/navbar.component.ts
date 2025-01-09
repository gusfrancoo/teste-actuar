import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-navbar',
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() actionClick = new EventEmitter<void>();

  openDialog(): void {
      this.actionClick.emit();
  }
}
