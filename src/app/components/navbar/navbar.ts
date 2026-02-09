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
  }
}
