import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, RouterOutlet, RouterLink, RouterLinkActive],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarActive = false;
  submenuOpen: { [key: string]: boolean } = {};

  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
    if (!this.sidebarActive) {
      this.submenuOpen = {};
    }
  }

  toggleSubmenu(key: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.submenuOpen[key] = !this.submenuOpen[key];
  }
}
