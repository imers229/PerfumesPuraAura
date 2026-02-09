import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

declare const Swal: any;

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
  addedToCart: boolean = false;
  whatsappNumber: string = '593959295507';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productService.getProductById(id);
      if (!this.product) {
        Swal.fire({
          icon: 'error',
          title: 'Producto no encontrado',
          text: 'Este producto no existe en nuestro catálogo',
          confirmButtonColor: '#c5b358',
          background: '#0a0a0a',
          color: '#fff'
        }).then(() => {
          this.router.navigate(['/']);
        });
      }
    });
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

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity);
      
      Swal.fire({
        icon: 'success',
        title: '¡Agregado al carrito!',
        html: `<p><strong>${this.product.name}</strong></p><p>Cantidad: ${this.quantity}</p>`,
        confirmButtonColor: '#c5b358',
        background: '#0a0a0a',
        color: '#fff',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      });
    }
  }

  requestOrder() {
    if (this.product) {
      if (!this.product.inStock) {
        Swal.fire({
          icon: 'info',
          title: 'Producto Agotado',
          text: 'Te redirigiremos a WhatsApp para más información',
          confirmButtonColor: '#c5b358',
          background: '#0a0a0a',
          color: '#fff',
          didOpen: () => {
            Swal.showLoading();
          }
        });

        setTimeout(() => {
          const message = `Hola Pura Aura, estoy interesado en el perfume *${this.product!.name}* pero figura como Agotado en la web. Quisiera más información o solicitar un pedido especial.`;
          const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank');
          Swal.close();
        }, 1500);
      }
    }
  }
}
