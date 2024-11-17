import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatMenuModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,RouterLink, RouterOutlet ,NgFor,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'] // Aquí estaba el error, cambió de styleUrl a styleUrls
})
export class ToolbarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  menuItems = [
    { name: 'USUARIOS', link: '/dashboard/list' },
    { name: 'CONFIGURACION', link: '/dashboard/settings' },
    { name: 'PRIVACIDAD', link: '/dashboard/privacy' },
    { name: 'ANUNCIOS', link: '/dashboard/ads' },
    { name: 'Usuarios', link: '/dashboard/users' }

  ];
}
