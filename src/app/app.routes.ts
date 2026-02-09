import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Promotions } from './pages/promotions/promotions';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'catalogo/:category', component: Catalog },
  { path: 'producto/:id', component: ProductDetail },
  { path: 'carrito', component: Cart },
  { path: 'promociones', component: Promotions },
  { path: '**', redirectTo: '' }
];
