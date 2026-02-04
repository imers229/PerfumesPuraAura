import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    const allProducts = this.productService.getAllProducts();
    // Mostrar productos destacados: 2 de cada categoría principal
    const arabic = allProducts.filter(p => p.category === 'arabico').slice(0, 2);
    const designer = allProducts.filter(p => p.category === 'diseñador').slice(0, 1);
    const niche = allProducts.filter(p => p.category === 'nicho').slice(0, 1);
    this.featuredProducts = [...arabic, ...designer, ...niche];
  }

  isNumber(val: any): boolean {
    return typeof val === 'number';
  }
}
