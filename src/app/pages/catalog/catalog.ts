import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit {
  products: Product[] = [];
  category: string = '';
  categoryTitle: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.loadProducts();
      this.setCategoryTitle();
    });
  }

  loadProducts() {
    const allProducts = this.productService.getAllProducts();
    this.products = allProducts.filter(p => p.category === this.category);
  }

  setCategoryTitle() {
    const titles: { [key: string]: string } = {
      'arabico': 'Perfumes Árabes - Completos',
      'diseñador': 'Perfumes de Diseñador - Completos',
      'nicho': 'Perfumes Nicho - Completos',
      'arabico-decant': 'Perfumes Árabes - Decants',
      'diseñador-decant': 'Perfumes de Diseñador - Decants',
      'nicho-decant': 'Perfumes Nicho - Decants'
    };
    this.categoryTitle = titles[this.category] || 'Catálogo';
  }

  isNumber(val: any): boolean {
    return typeof val === 'number';
  }
}
