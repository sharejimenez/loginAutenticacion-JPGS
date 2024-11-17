import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterLink, RouterOutlet ,MatToolbarModule,MatSidenavModule,
    MatToolbarModule,ToolbarComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  sidenavOpened = false;
  logout(){}
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
