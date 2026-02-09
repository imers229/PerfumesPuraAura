import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product.model';

declare const Swal: any;

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string = '';
  categoryTitle: string = '';
  
  // Búsqueda y Filtros
  searchQuery: string = '';
  selectedGender: string = '';
  selectedBrand: string = '';
  minPrice: number = 0;
  maxPrice: number = 200;
  
  // Opciones para filtros
  brands: string[] = [];
  genders = ['masculino', 'femenino', 'unisex'];
  genderLabels: { [key: string]: string } = {
    'masculino': '♂ Hombre',
    'femenino': '♀ Mujer',
    'unisex': '⚤ Unisex'
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.loadProducts();
      this.setCategoryTitle();
      this.extractBrands();
    });
  }

  loadProducts() {
    const allProducts = this.productService.getAllProducts();
    
    if (this.category === 'perfumes') {
      this.products = allProducts.filter(p => 
        !p.category.includes('decant')
      );
    } else if (this.category === 'decants') {
      this.products = allProducts.filter(p => 
        p.category.includes('decant')
      );
    } else {
      this.products = allProducts.filter(p => p.category === this.category);
    }
    
    this.applyFilters();
  }

  extractBrands() {
    const uniqueBrands = [...new Set(this.products.map(p => p.brand))];
    this.brands = uniqueBrands.sort();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      // Búsqueda por nombre, marca o descripción
      const matchesSearch = !this.searchQuery || 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(this.searchQuery.toLowerCase());

      // Filtro por género
      const matchesGender = !this.selectedGender || product.gender === this.selectedGender;

      // Filtro por marca
      const matchesBrand = !this.selectedBrand || product.brand === this.selectedBrand;

      // Filtro por precio
      const priceValue = typeof product.price === 'number' ? product.price : parseFloat(product.price as string);
      const matchesPrice = priceValue >= this.minPrice && priceValue <= this.maxPrice;

      return matchesSearch && matchesGender && matchesBrand && matchesPrice;
    });
  }

  onSearchChange() {
    this.applyFilters();
  }

  onFilterChange() {
    this.applyFilters();
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedGender = '';
    this.selectedBrand = '';
    this.minPrice = 0;
    this.maxPrice = 200;
    this.applyFilters();
    
    Swal.fire({
      icon: 'info',
      title: 'Filtros Limpiados',
      text: 'Mostrando todos los productos disponibles',
      confirmButtonColor: '#c5b358',
      background: '#0a0a0a',
      color: '#fff',
      timer: 1500,
      timerProgressBar: true
    });
  }

  setCategoryTitle() {
    const titles: { [key: string]: string } = {
      'perfumes': 'Perfumes',
      'decants': 'Decants',
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

  getGenderLabel(gender?: string): string {
    switch(gender) {
      case 'masculino':
        return '♂ Hombre';
      case 'femenino':
        return '♀ Mujer';
      case 'unisex':
        return '⚤ Unisex';
      default:
        return '';
    }
  }
}
