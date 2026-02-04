import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  catalogOpen = false;
  arabicSubmenuOpen = false;
  designerSubmenuOpen = false;
  nicheSubmenuOpen = false;
  cartItemCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe(items => {
      this.cartItemCount = this.cartService.getItemCount();
    });
  }

  toggleCatalog() {
    this.catalogOpen = !this.catalogOpen;
  }

  closeCatalog() {
    this.catalogOpen = false;
    this.arabicSubmenuOpen = false;
    this.designerSubmenuOpen = false;
    this.nicheSubmenuOpen = false;
  }

  openArabicSubmenu() {
    this.arabicSubmenuOpen = true;
    this.designerSubmenuOpen = false;
    this.nicheSubmenuOpen = false;
  }

  openDesignerSubmenu() {
    this.arabicSubmenuOpen = false;
    this.designerSubmenuOpen = true;
    this.nicheSubmenuOpen = false;
  }

  openNicheSubmenu() {
    this.arabicSubmenuOpen = false;
    this.designerSubmenuOpen = false;
    this.nicheSubmenuOpen = true;
  }

  closeSubmenu() {
    this.arabicSubmenuOpen = false;
    this.designerSubmenuOpen = false;
    this.nicheSubmenuOpen = false;
  }
}
