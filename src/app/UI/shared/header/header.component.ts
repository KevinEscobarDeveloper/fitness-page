import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private readonly router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
    this.menuOpen = false; // Cierra el menú después de navegar
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
