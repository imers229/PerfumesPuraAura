import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/product.model';

declare const Swal: any;

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  cartItems: CartItem[] = [];
  total: number = 0;
  whatsappNumber: string = '593959295507';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  isNumber(val: any): boolean {
    return typeof val === 'number';
  }

  getItemTotal(item: CartItem): string | number {
    if (typeof item.product.price === 'number') {
      return item.product.price * item.quantity;
    }
    return item.product.price;
  }

  removeItem(productId: number) {
    Swal.fire({
      icon: 'warning',
      title: '¿Eliminar producto?',
      text: 'Este producto será removido del carrito',
      showCancelButton: true,
      confirmButtonColor: '#c5b358',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      background: '#0a0a0a',
      color: '#fff'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.cartService.removeFromCart(productId);
        Swal.fire({
          icon: 'success',
          title: 'Eliminado',
          text: 'Producto removido del carrito',
          confirmButtonColor: '#c5b358',
          background: '#0a0a0a',
          color: '#fff',
          timer: 1500,
          timerProgressBar: true
        });
      }
    });
  }

  clearCart() {
    Swal.fire({
      icon: 'warning',
      title: '¿Vaciar carrito?',
      text: 'Se eliminarán todos los productos del carrito',
      showCancelButton: true,
      confirmButtonColor: '#c5b358',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
      background: '#0a0a0a',
      color: '#fff'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.cartService.clearCart();
        Swal.fire({
          icon: 'success',
          title: 'Carrito vacío',
          confirmButtonColor: '#c5b358',
          background: '#0a0a0a',
          color: '#fff',
          timer: 1500,
          timerProgressBar: true
        });
      }
    });
  }

  checkout() {
    if (this.cartItems.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Carrito vacío',
        text: 'Agrega productos antes de continuar',
        confirmButtonColor: '#c5b358',
        background: '#0a0a0a',
        color: '#fff'
      });
      return;
    }

    Swal.fire({
      icon: 'info',
      title: 'Procesando orden',
      text: 'Se abrirá WhatsApp para confirmar tu compra',
      confirmButtonColor: '#c5b358',
      background: '#0a0a0a',
      color: '#fff',
      didOpen: () => {
        Swal.showLoading();
      }
    });

    setTimeout(() => {
      const message = this.cartService.generateWhatsAppMessage();
      const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
      window.open(url, '_blank');
      Swal.close();
    }, 1000);
  }
}
