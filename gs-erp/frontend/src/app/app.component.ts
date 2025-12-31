import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common'; // <-- Import necessário
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf], // <-- adicionado NgIf
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarActive = false;
  submenuOpen: { [key: string]: boolean } = {};
  showSidebar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showSidebar = event.url !== '/app-login';
        if (!this.showSidebar) {
          this.sidebarActive = false;
          this.submenuOpen = {};
        }
      });
  }

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
