import { Injectable } from '@angular/core';
// Servicio de Productos Actualizado
import { Product } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    // --- Perfumes Árabes ---
    {
      id: 1,
      name: 'Odyssey Tyrant (Special Edition)',
      brand: 'Armaf',
      category: 'arabico',
      price: 60.00,
      image: 'assets/images/products/armaf-odyssey-tyrant.jpg',
      description: 'Equilibra una frescura cítrica agresiva con una base oscura y resinosa. Actúa como un puente entre las familias "Azul" y "Oriental Amaderada", diseñada para imponer presencia con una base de vetiver y maderas secas.',
      size: '100ml',
      notes: ['Cítricos', 'Madera', 'Ámbar'],
      mainAccords: [
        { name: 'fresco especiado', color: '#8daf48', width: 35 },
        { name: 'amaderado', color: '#8d5e2a', width: 25 },
        { name: 'cítrico', color: '#F9E076', width: 15 },
        { name: 'aromático', color: '#4d8c7c', width: 15 },
        { name: 'cálido especiado', color: '#c25e00', width: 10 }
      ],
      inStock: true
    },
    {
      id: 2,
      name: 'Odyssey Aqua (Edition)',
      brand: 'Armaf',
      category: 'arabico',
      price: 55.00,
      image: 'assets/images/products/armaf-odyssey-aqua.jpg',
      description: 'Una fragancia marina aromática que se aleja de los sintéticos de los 90 hacia un perfil más verde, herbáceo y naturalista, evocando la vegetación costera mediterránea.',
      size: '100ml',
      notes: ['Notas Marinas', 'Bergamota', 'Lavanda'],
      mainAccords: [
        { name: 'aromático', color: '#4d8c7c', width: 30 },
        { name: 'verde / herbáceo', color: '#6b8c4d', width: 20 },
        { name: 'amaderado', color: '#8d5e2a', width: 20 },
        { name: 'fresco especiado', color: '#8daf48', width: 15 },
        { name: 'cítrico', color: '#F9E076', width: 15 }
      ],
      inStock: false
    },
    {
      id: 3,
      name: 'Odyssey Mandarin Sky (Vintage Edition)',
      brand: 'Armaf',
      category: 'arabico',
      price: 70.00,
      image: 'assets/images/products/armaf-odyssey-mandarin-sky.jpg',
      description: 'Definida como un "Gourmand Cítrico", presenta una sobredosis de caramelo equilibrada por mandarina ácida. Es una fragancia de alto contraste, densa y diseñada para la vida nocturna.',
      size: '100ml',
      notes: ['Mandarina', 'Caramelo', 'Haba Tonka'],
      mainAccords: [
        { name: 'cítrico', color: '#F9E076', width: 30 },
        { name: 'dulce / caramelo', color: '#d94b4b', width: 25 },
        { name: 'ambarado / cálido', color: '#e66b00', width: 15 },
        { name: 'aromático / especiado', color: '#4d8c7c', width: 15 },
        { name: 'amaderado', color: '#8d5e2a', width: 15 }
      ],
      inStock: false
    },
    {
      id: 4,
      name: 'Odyssey Wild One (Gold Edition)',
      brand: 'Armaf',
      category: 'arabico',
      price: 60.00,
      image: 'assets/images/products/armaf-odyssey-wild-one.jpg',
      description: 'Un "Fougère Especiado Moderno" camaleónico que abre con un frío glacial de menta y evoluciona hacia una calidez terrosa y resinosa.',
      size: '100ml',
      notes: ['Pimienta', 'Vetiver', 'Cedro'],
      mainAccords: [
        { name: 'fresco especiado', color: '#8daf48', width: 30 },
        { name: 'amaderado', color: '#8d5e2a', width: 25 },
        { name: 'verde / aromático', color: '#6b8c4d', width: 20 },
        { name: 'cítrico', color: '#F9E076', width: 15 },
        { name: 'terroso / almizclado', color: '#cfc9bd', width: 10 }
      ],
      inStock: true
    },
    {
      id: 5,
      name: 'Lattafa Khamrah',
      brand: 'Lattafa',
      category: 'arabico',
      price: 60.00,
      image: 'assets/images/products/lattafa-khamrah.jpg',
      description: 'Un perfume denso y extremadamente cálido que celebra el dátil y el dulzor especiado sin notas alcohólicas. Es un fenómeno viral por su identidad gourmand lujosa.',
      size: '100ml',
      notes: ['Canela', 'Dátiles', 'Vainilla'],
      mainAccords: [
        { name: 'dulce (gourmand)', color: '#d94b4b', width: 30 },
        { name: 'cálido especiado', color: '#c25e00', width: 25 },
        { name: 'ambarado / balsámico', color: '#e66b00', width: 15 },
        { name: 'amaderado', color: '#8d5e2a', width: 10 },
        { name: 'frutado (dátiles)', color: '#e91e63', width: 10 },
        { name: 'floral', color: '#ffc107', width: 10 }
      ],
      inStock: true
    },
    {
      id: 6,
      name: 'Lattafa Khamrah Qahwa',
      brand: 'Lattafa',
      category: 'arabico',
      price: 60.00,
      image: 'assets/images/products/lattafa-khamrah-qahwa.jpg',
      description: 'Versión más madura y oscura que el original, incorporando un acorde de café Arábica tostado para reducir el dulzor empalagoso en favor de un amargor aromático.',
      size: '100ml',
      notes: ['Café', 'Cardamomo', 'Praliné'],
      mainAccords: [
        { name: 'cálido especiado', color: '#c25e00', width: 30 },
        { name: 'dulce', color: '#d94b4b', width: 25 },
        { name: 'café', color: '#6F4E37', width: 20 },
        { name: 'avainillado / atalcado', color: '#f3e5ab', width: 15 },
        { name: 'almizclado', color: '#cfc9bd', width: 10 }
      ],
      inStock: true
    },
    {
      id: 7,
      name: 'Amber Oud Gold Edition',
      brand: 'Haramain',
      category: 'arabico',
      price: 60.00,
      image: 'assets/images/products/haramain-amber-oud-gold.jpg',
      description: 'Una "bomba frutal almizclada" de altísimo rendimiento. Huele a un cesto de frutas tropicales neón sobre una base de almizcle penetrante; no contiene Oud ni Ámbar tradicional.',
      size: '100ml',
      notes: ['Melón', 'Piña', 'Ámbar'],
      mainAccords: [
        { name: 'dulce', color: '#d94b4b', width: 40 },
        { name: 'afrutado', color: '#F9E076', width: 30 },
        { name: 'almizclado', color: '#cfc9bd', width: 15 },
        { name: 'ambarado', color: '#e66b00', width: 10 },
        { name: 'ozónico', color: '#4b9cd3', width: 5 }
      ],
      inStock: true
    },
    {
      id: 8,
      name: 'Amber Oud Aqua Dubai',
      brand: 'Haramain',
      category: 'arabico',
      price: 40.00,
      image: 'assets/images/products/haramain-amber-oud-aqua-dubai.jpg',
      description: 'Perfil "Aromático Frutal" que hibrida la base frutal de la línea con notas marinas, verdes y amargas como el gálvano, evocando un ambiente vacacional lujoso.',
      size: '100ml',
      notes: ['Bergamota', 'Notas Acuáticas', 'Almizcle'],
      mainAccords: [
        { name: 'afrutado', color: '#d94b4b', width: 35 },
        { name: 'verde / herbáceo', color: '#6b8c4d', width: 25 },
        { name: 'cítrico', color: '#F9E076', width: 20 },
        { name: 'almizclado', color: '#cfc9bd', width: 10 },
        { name: 'acuático / ambarado', color: '#4b9cd3', width: 10 }
      ],
      inStock: false
    },
    {
      id: 9,
      name: 'Odyssey Homme White Edition',
      brand: 'Armaf',
      category: 'arabico',
      price: 60.00,
      image: 'assets/images/products/armaf-odyssey-white.jpg',
      description: 'Un "Fougère Oriental Acuático" que utiliza Yuzu y Hoja de Violeta para ofrecer un aire elegante y de "pureza", evitando las notas marinas genéricas.',
      size: '100ml',
      notes: ['Pomelo', 'Yuzu', 'Maderas'],
      mainAccords: [
        { name: 'ámbar / amberwood', color: '#e66b00', width: 30 },
        { name: 'acuático / ozónico', color: '#4b9cd3', width: 20 },
        { name: 'cítrico (yuzu)', color: '#F9E076', width: 20 },
        { name: 'amaderado ahumado', color: '#8d5e2a', width: 15 },
        { name: 'especiado suave', color: '#c25e00', width: 15 }
      ],
      inStock: true
    },
    {
      id: 10,
      name: 'Lattafa Asad Bourbon',
      brand: 'Lattafa',
      category: 'arabico',
      price: 55.00,
      image: 'assets/images/products/lattafa-asad-bourbon.jpg',
      description: 'Un "Aromático Gourmand" que fusiona especias masculinas con Vainilla Bourbon y una nota frutal de Ciruela Mirabel, creando un efecto de "bombón de licor".',
      size: '100ml',
      notes: ['Pimienta Negra', 'Tabaco', 'Vainilla'],
      mainAccords: [
        { name: 'vainilla', color: '#f3e5ab', width: 30 },
        { name: 'cálido especiado', color: '#c25e00', width: 25 },
        { name: 'cacao / dulce', color: '#5D4037', width: 15 },
        { name: 'afrutado / boozy', color: '#d94b4b', width: 15 },
        { name: 'aromático', color: '#4d8c7c', width: 15 }
      ],
      inStock: false
    },

    // --- Perfumes de Diseñador ---
    {
      id: 11,
      name: 'K by Dolce&Gabbana (EDP)',
      brand: 'Dolce & Gabbana',
      category: 'diseñador',
      price: 120.00,
      image: 'assets/images/products/dg-k-gift-set.jpg',
      description: 'Fragancia aromática amaderada que utiliza notas culinarias mediterráneas como el pimiento y el néctar de higo para crear un corazón picante, cremoso y herbal.',
      size: '100ml',
      notes: ['Naranja Sanguina', 'Bayas de Enebro', 'Cítricos'],
      mainAccords: [
        { name: 'aromático', color: '#4d8c7c', width: 30 },
        { name: 'cítrico', color: '#F9E076', width: 25 },
        { name: 'amaderado / terroso', color: '#8d5e2a', width: 20 },
        { name: 'fresco especiado', color: '#8daf48', width: 15 },
        { name: 'frutal / lactónico', color: '#fffdd0', width: 10 }
      ],
      inStock: true
    },
    {
      id: 12,
      name: 'Versace Eros (EDT/EDP)',
      brand: 'Versace',
      category: 'diseñador',
      price: 110.00,
      image: 'assets/images/products/versace-eros.jpg',
      description: 'El arquetipo de la fragancia de club, ruidosa y extrovertida. Se basa en el contraste entre una salida fría de menta y manzana contra un fondo caliente de vainilla muy dulce.',
      size: '100ml',
      notes: ['Menta', 'Manzana Verde', 'Limón'],
      mainAccords: [
        { name: 'avainillado', color: '#f3e5ab', width: 35 },
        { name: 'aromático / verde', color: '#4d8c7c', width: 25 },
        { name: 'dulce', color: '#d94b4b', width: 20 },
        { name: 'fresco especiado', color: '#8daf48', width: 10 },
        { name: 'amaderado', color: '#8d5e2a', width: 10 }
      ],
      inStock: true
    },
    {
      id: 13,
      name: 'Phantom',
      brand: 'Paco Rabanne',
      category: 'diseñador',
      price: 100.00,
      image: 'assets/images/products/paco-rabanne-phantom.jpg',
      description: 'Un "Fougère Futurista" creado con inteligencia artificial. Es una mezcla sintética de limón cremoso, lavanda tecnológica y toques de humo y tierra.',
      size: '100ml',
      notes: ['Lavanda', 'Limón', 'Vainilla'],
      mainAccords: [
        { name: 'cítrico (limón cremoso)', color: '#F9E076', width: 30 },
        { name: 'aromático (lavanda)', color: '#4d8c7c', width: 25 },
        { name: 'avainillado / dulce', color: '#f3e5ab', width: 20 },
        { name: 'terroso / ahumado', color: '#8d5e2a', width: 15 },
        { name: 'amaderado', color: '#8d5e2a', width: 10 }
      ],
      inStock: true
    },

    // --- Decants Árabes ---
    {
      id: 14,
      name: 'Odyssey Mandarin Sky (Decant)',
      brand: 'Armaf',
      category: 'arabico-decant',
      price: 16.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 10ml.',
      size: '10ml',
      notes: ['Mandarina', 'Caramelo', 'Haba Tonka'],
      mainAccords: [
        { name: 'cítrico', color: '#F9E076', width: 100 },
        { name: 'dulce', color: '#d94b4b', width: 90 },
        { name: 'caramelo', color: '#8d5e2a', width: 80 },
        { name: 'avainillado', color: '#f3e5ab', width: 70 },
        { name: 'ámbar', color: '#e66b00', width: 60 }
      ],
      inStock: true
    },
    {
      id: 15,
      name: 'Al Nashama (Decant)',
      brand: 'Lattafa',
      category: 'arabico-decant',
      price: 16.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 10ml.',
      size: '10ml',
      notes: [],
      mainAccords: [
        { name: 'cuero', color: '#8d5e2a', width: 100 },
        { name: 'frutal', color: '#d94b4b', width: 85 },
        { name: 'aromático', color: '#4d8c7c', width: 75 },
        { name: 'dulce', color: '#d94b4b', width: 65 },
        { name: 'animalico', color: '#cfc9bd', width: 50 }
      ],
      inStock: true
    },
    {
      id: 16,
      name: 'Asad Bourbon (Decant)',
      brand: 'Lattafa',
      category: 'arabico-decant',
      price: 8.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Vainilla', 'Especias', 'Tabaco'],
      mainAccords: [
        { name: 'cálido especiado', color: '#c25e00', width: 100 },
        { name: 'avainillado', color: '#f3e5ab', width: 90 },
        { name: 'ámbar', color: '#e66b00', width: 80 },
        { name: 'amaderado', color: '#8d5e2a', width: 70 },
        { name: 'atalcado', color: '#cfc9bd', width: 60 }
      ],
      inStock: true
    },
    {
      id: 17,
      name: 'Amber Oud Gold Edition (Decant)',
      brand: 'Al Haramain',
      category: 'arabico-decant',
      price: 20.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 10ml.',
      size: '10ml',
      notes: ['Ámbar', 'Dulce', 'Almizcle'],
      mainAccords: [
        { name: 'dulce', color: '#d94b4b', width: 100 },
        { name: 'frutal', color: '#d94b4b', width: 95 },
        { name: 'almizclado', color: '#cfc9bd', width: 85 },
        { name: 'ámbar', color: '#e66b00', width: 80 },
        { name: 'tropical', color: '#F9E076', width: 75 }
      ],
      inStock: true
    },
    {
      id: 18,
      name: 'Asad Bourbon (Decant 5ml Agotado)',
      brand: 'Lattafa',
      category: 'arabico-decant',
      price: 10.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml. (Lote distinto/Precio actualizado)',
      size: '5ml',
      notes: ['Vainilla', 'Especias', 'Tabaco'],
      mainAccords: [
        { name: 'cálido especiado', color: '#c25e00', width: 100 },
        { name: 'avainillado', color: '#f3e5ab', width: 90 },
        { name: 'ámbar', color: '#e66b00', width: 80 },
        { name: 'amaderado', color: '#8d5e2a', width: 70 },
        { name: 'atalcado', color: '#cfc9bd', width: 60 }
      ],
      inStock: false
    },

    // --- Decants Diseñador ---
    {
      id: 19,
      name: 'Acqua di Gio Profondo (Decant)',
      brand: 'Giorgio Armani',
      category: 'diseñador-decant',
      price: 12.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Notas Marinas', 'Bergamota', 'Mandarina'],
      mainAccords: [
        { name: 'aromático', color: '#4d8c7c', width: 100 },
        { name: 'marino', color: '#4b9cd3', width: 95 },
        { name: 'fresco especiado', color: '#8daf48', width: 85 },
        { name: 'cítrico', color: '#F9E076', width: 80 },
        { name: 'mineral', color: '#a0a0a0', width: 60 }
      ],
      inStock: true
    },
    {
      id: 20,
      name: 'Armani Code Absolu (Decant)',
      brand: 'Giorgio Armani',
      category: 'diseñador-decant',
      price: 16.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 10ml.',
      size: '10ml',
      notes: ['Vainilla', 'Haba Tonka', 'Gamuza'],
      mainAccords: [
        { name: 'avainillado', color: '#f3e5ab', width: 100 },
        { name: 'dulce', color: '#d94b4b', width: 90 },
        { name: 'ambarado', color: '#e66b00', width: 85 },
        { name: 'cítrico', color: '#F9E076', width: 70 },
        { name: 'cuero', color: '#8d5e2a', width: 60 }
      ],
      inStock: false
    },
    {
      id: 21,
      name: 'Versace Eros EDT (Decant)',
      brand: 'Versace',
      category: 'diseñador-decant',
      price: 10.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Menta', 'Manzana Verde', 'Limón'],
      mainAccords: [
        { name: 'aromático', color: '#4d8c7c', width: 100 },
        { name: 'verde', color: '#6b8c4d', width: 90 },
        { name: 'avainillado', color: '#f3e5ab', width: 85 },
        { name: 'fresco especiado', color: '#8daf48', width: 75 },
        { name: 'cítrico', color: '#F9E076', width: 50 }
      ],
      inStock: true
    },
    {
      id: 22,
      name: 'Scandal Pour Homme (Decant 5ml)',
      brand: 'Jean Paul Gaultier',
      category: 'diseñador-decant',
      price: 10.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Caramelo', 'Haba Tonka', 'Salvia'],
      mainAccords: [
        { name: 'dulce', color: '#d94b4b', width: 100 },
        { name: 'caramelo', color: '#8d5e2a', width: 95 },
        { name: 'aromático', color: '#4d8c7c', width: 80 },
        { name: 'avainillado', color: '#f3e5ab', width: 75 },
        { name: 'madera', color: '#8d5e2a', width: 60 }
      ],
      inStock: false
    },
    {
      id: 23,
      name: 'K by Dolce & Gabbana EDT (Decant)',
      brand: 'Dolce & Gabbana',
      category: 'diseñador-decant',
      price: 12.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Cítricos', 'Pimienta', 'Cedro'],
      mainAccords: [
        { name: 'aromático', color: '#4d8c7c', width: 100 },
        { name: 'amaderado', color: '#8d5e2a', width: 90 },
        { name: 'cítrico', color: '#F9E076', width: 85 },
        { name: 'fresco especiado', color: '#8daf48', width: 70 },
        { name: 'verde', color: '#6b8c4d', width: 60 }
      ],
      inStock: true
    },
    {
      id: 24,
      name: 'Bad Boy EDT (Decant)',
      brand: 'Carolina Herrera',
      category: 'diseñador-decant',
      price: 10.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Pimienta Blanca', 'Cacao', 'Haba Tonka'],
      mainAccords: [
        { name: 'cálido especiado', color: '#c25e00', width: 100 },
        { name: 'ámbar', color: '#e66b00', width: 90 },
        { name: 'aromático', color: '#4d8c7c', width: 85 },
        { name: 'amaderado', color: '#8d5e2a', width: 75 },
        { name: 'cacao', color: '#5D4037', width: 60 }
      ],
      inStock: false
    },
    {
      id: 25,
      name: 'Scandal Pour Homme (Decant 10ml)',
      brand: 'Jean Paul Gaultier',
      category: 'diseñador-decant',
      price: 20.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 10ml.',
      size: '10ml',
      notes: ['Caramelo', 'Haba Tonka', 'Salvia'],
      mainAccords: [
        { name: 'dulce', color: '#d94b4b', width: 100 },
        { name: 'caramelo', color: '#8d5e2a', width: 95 },
        { name: 'aromático', color: '#4d8c7c', width: 80 },
        { name: 'avainillado', color: '#f3e5ab', width: 75 },
        { name: 'madera', color: '#8d5e2a', width: 60 }
      ],
      inStock: true
    },
    {
      id: 26,
      name: 'Phantom Intense (Decant)',
      brand: 'Paco Rabanne',
      category: 'diseñador-decant',
      price: 20.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 10ml.',
      size: '10ml',
      notes: ['Lavanda', 'Vainilla', 'Vetiver'],
      mainAccords: [
        { name: 'aromático', color: '#4d8c7c', width: 100 },
        { name: 'avainillado', color: '#f3e5ab', width: 90 },
        { name: 'fresco especiado', color: '#8daf48', width: 80 },
        { name: 'lavanda', color: '#967bb6', width: 70 },
        { name: 'amaderado', color: '#8d5e2a', width: 60 }
      ],
      inStock: true
    },
    {
      id: 27,
      name: 'Acqua di Gio EDT (Decant)',
      brand: 'Giorgio Armani',
      category: 'diseñador-decant',
      price: 20.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 10ml.',
      size: '10ml',
      notes: ['Lima', 'Limón', 'Notas Marinas'],
      mainAccords: [
        { name: 'cítrico', color: '#F9E076', width: 100 },
        { name: 'aromático', color: '#4d8c7c', width: 95 },
        { name: 'marino', color: '#4b9cd3', width: 85 },
        { name: 'fresco', color: '#8daf48', width: 75 },
        { name: 'salado', color: '#a0a0a0', width: 60 }
      ],
      inStock: true
    },
    {
      id: 28,
      name: 'Naxos (Decant)',
      brand: 'Xerjoff',
      category: 'nicho-decant',
      price: 20.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Miel', 'Tabaco', 'Lavanda'],
      mainAccords: [
        { name: 'dulce', color: '#d94b4b', width: 100 },
        { name: 'miel', color: '#e66b00', width: 90 },
        { name: 'tabaco', color: '#8d5e2a', width: 85 },
        { name: 'cítrico', color: '#F9E076', width: 75 },
        { name: 'aromático', color: '#4d8c7c', width: 70 }
      ],
      inStock: false
    },
    {
      id: 29,
      name: 'Millesime Imperial (Decant)',
      brand: 'Creed',
      category: 'nicho-decant',
      price: 25.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Frutas', 'Sal Marina', 'Iris'],
      mainAccords: [
        { name: 'marino', color: '#4b9cd3', width: 100 },
        { name: 'cítrico', color: '#F9E076', width: 90 },
        { name: 'salado', color: '#a0a0a0', width: 85 },
        { name: 'frutal', color: '#d94b4b', width: 70 },
        { name: 'almizclado', color: '#cfc9bd', width: 50 }
      ],
      inStock: true
    },
    {
      id: 30,
      name: 'Casamorati Italica (Decant)',
      brand: 'Xerjoff',
      category: 'nicho-decant',
      price: 20.00,
      image: 'assets/images/decant.png',
      description: 'Decant de 5ml.',
      size: '5ml',
      notes: ['Almendra', 'Toffee', 'Vainilla'],
      mainAccords: [
        { name: 'dulce', color: '#d94b4b', width: 100 },
        { name: 'almendrado', color: '#cfc9bd', width: 95 },
        { name: 'avainillado', color: '#f3e5ab', width: 90 },
        { name: 'lactónico', color: '#fffdd0', width: 75 },
        { name: 'cálido especiado', color: '#c25e00', width: 60 }
      ],
      inStock: false
    },
    {
      id: 31,
      name: 'Musamam White Intense',
      brand: 'Lattafa',
      category: 'arabico',
      price: '$',
      image: 'assets/images/products/lattafa-musamam-white-intense.jpg',
      description: 'Una fragancia cautivadora que evoca elegancia y sofisticación.',
      size: '100ml',
      notes: ['Nota 1', 'Nota 2', 'Nota 3'],
      mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
      inStock: true
    },
    {
      id: 32,
      name: 'Amber Oud Exclusif Sport',
      brand: 'Al Haramain',
      category: 'arabico',
      price: '$',
      image: 'assets/images/products/al-haramain-amber-oud-exclusif-sport.jpg',
      description: 'Un aroma deportivo y exclusivo con matices orientales.',
      size: '100ml',
      notes: ['Nota 1', 'Nota 2', 'Nota 3'],
      mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
      inStock: true
    },
    {
       id: 33,
       name: 'Odyssey Mandarin Sky Elixir',
       brand: 'Armaf',
       category: 'arabico',
       price: '$',
       image: 'assets/images/products/armaf-odyssey-mandarin-sky-elixir.jpg',
       description: 'Elixir intenso con notas cítricas y dulces.',
       size: '100ml',
       notes: ['Mandarina', 'Especias', 'Ámbar'],
       mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
       inStock: true
    },
    {
        id: 34,
        name: 'Club De Nuit Precieux 1 Extrait de Parfum',
        brand: 'Armaf',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/armaf-club-de-nuit-precieux-1.jpg',
        description: 'Extracto de perfume de alta concentración y lujo.',
        size: '200ml',
        notes: ['Nota 1', 'Nota 2', 'Nota 3'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 35,
        name: 'Asad',
        brand: 'Lattafa',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/lattafa-asad.jpg',
        description: 'Fragancia poderosa con carácter masculino y especiado.',
        size: '100ml',
        notes: ['Pimienta Negra', 'Tabaco', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 36,
        name: 'Asad Zanzibar',
        brand: 'Lattafa',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/lattafa-asad-zanzibar.jpg',
        description: 'Una variación exótica y fresca de la línea Asad.',
        size: '100ml',
        notes: ['Coco', 'Iris', 'Incienso'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 37,
        name: '9 PM',
        brand: 'Afnan',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/afnan-9-pm.jpg',
        description: 'Dulce, avainillado y perfecto para la noche.',
        size: '100ml',
        notes: ['Manzana', 'Canela', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 38,
        name: 'Hayaati Gift Set',
        brand: 'Lattafa',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/lattafa-hayaati-gift-set.jpg',
        description: 'Set de regalo Hayaati completo.',
        size: '100ml + 197ml Deso + 50ml Hair Mist',
        notes: ['Nota 1', 'Nota 2', 'Nota 3'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 39,
        name: 'Yara',
        brand: 'Lattafa',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/lattafa-yara.jpg',
        description: 'Fragancia dulce y cremosa, viral y femenina.',
        size: '100ml',
        notes: ['Orquídea', 'Gourmand', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 40,
        name: 'Asad Elixir',
        brand: 'Lattafa',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/lattafa-asad-elixir.jpg',
        description: 'Versión elixir de Asad, más intensa y profunda.',
        size: '100ml',
        notes: ['Especias', 'Maderas', 'Ámbar'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 41,
        name: 'Sehr',
        brand: 'Lattafa',
        category: 'arabico',
        price: '$',
        image: 'assets/images/products/lattafa-sehr.jpg',
        description: 'Encanto y misterio en una botella.',
        size: '100ml',
        notes: ['Nota 1', 'Nota 2', 'Nota 3'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 42,
        name: 'GAME OF SPADES OPAL',
        brand: 'Jo Milano Paris',
        category: 'nicho',
        price: '$',
        image: 'assets/images/products/jo-milano-game-of-spades-opal.jpg',
        description: 'Una apuesta segura de elegancia y distinción.',
        size: '100ml',
        notes: ['Nota 1', 'Nota 2', 'Nota 3'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
     {
        id: 43,
        name: 'Levante Exclusive',
        brand: 'Jo Milano Paris',
        category: 'nicho',
        price: '$',
        image: 'assets/images/products/jo-milano-levante-exclusive.jpg',
        description: 'Exclusividad y frescura mediterránea.',
        size: '100ml',
        notes: ['Nota 1', 'Nota 2', 'Nota 3'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 44,
        name: 'Paradoxe',
        brand: 'Prada',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/prada-paradoxe.jpg',
        description: 'La vanguardia de la feminidad moderna.',
        size: '90ml',
        notes: ['Neroli', 'Ámbar', 'Almizcle'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 45,
        name: 'Classique Set (2 Pzs)',
        brand: 'Jean Paul Gaultier',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/jpg-classique-set.jpg',
        description: 'El clásico atemporal de JPG en set.',
        size: '100ml',
        notes: ['Flor de Azahar', 'Jengibre', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 46,
        name: 'BOSS Bottled Infinite EDP Gift Set',
        brand: 'Hugo Boss',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/hugo-boss-bottled-infinite-set.jpg',
        description: 'Para el hombre de hoy que navega múltiples roles.',
        size: '100ml',
        notes: ['Manzana', 'Canela', 'Olivo'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 47,
        name: 'Emporio Armani Stronger With You Intensely Set',
        brand: 'Giorgio Armani',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/armani-swy-intensely-set.jpg',
        description: 'Intensamente enamorado y vibrante.',
        size: '50ml + 15ml',
        notes: ['Pimienta Rosa', 'Vainilla', 'Ámbar'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 48,
        name: 'Spicebomb Extreme EDP',
        brand: 'Viktor&Rolf',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/viktor-rolf-spicebomb-extreme.jpg',
        description: 'Una explosión de especias ardientes.',
        size: '90ml',
        notes: ['Especias', 'Tabaco', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 49,
        name: 'Flowerbomb EDP Trio Set',
        brand: 'Viktor&Rolf',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/viktor-rolf-flowerbomb-trio-set.jpg',
        description: 'Explosión floral en un set trío.',
        size: '50ml',
        notes: ['Flores', 'Pachulí', 'Té'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 50,
        name: 'The Most Wanted',
        brand: 'Azzaro',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/azzaro-the-most-wanted.jpg',
        description: 'Para el hombre que lo quiere todo.',
        size: '100ml',
        notes: ['Cardamomo', 'Toffee', 'Maderas'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 51,
        name: 'Phantom Parfum Men Set',
        brand: 'Paco Rabanne',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/paco-rabanne-phantom-parfum-set.jpg',
        description: 'Futurista y audaz, set completo.',
        size: '100ml + 150ml Deso + 10ml Travel',
        notes: ['Lavanda', 'Vainilla', 'Vetiver'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 52,
        name: 'Phantom Men\'s EDT Gift Set (2 Pzs)',
        brand: 'Paco Rabanne',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/paco-rabanne-phantom-edt-set.jpg',
        description: 'Set de regalo Phantom EDT.',
        size: '100ml + 150ml Deso',
        notes: ['Limón', 'Lavanda', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 53,
        name: 'Versace Eros EDT Set',
        brand: 'Versace',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/versace-eros-edt-set.jpg',
        description: 'Poder, pasión y belleza en un set.',
        size: '100ml + 10ml',
        notes: ['Menta', 'Manzana', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 54,
        name: 'Le Beau Le Parfum Eau de Parfum Intense',
        brand: 'Jean Paul Gaultier',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/jpg-le-beau-le-parfum-intense.jpg',
        description: 'Tentación intensa en el jardín del Edén.',
        size: '125ml',
        notes: ['Coco', 'Haba Tonka', 'Sándalo'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 55,
        name: 'The Most Wanted EDP Intense Gift Set',
        brand: 'Azzaro',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/azzaro-the-most-wanted-intense-set.jpg',
        description: 'Intensidad al máximo con este gift set.',
        size: '100ml + 70ml Deso + 10ml Travel',
        notes: ['Cardamomo', 'Toffee', 'Ámbar'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 56,
        name: 'Bad Boy Cobalt Elixir Gift Set',
        brand: 'Carolina Herrera',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/ch-bad-boy-cobalt-elixir-set.jpg',
        description: 'Un giro eléctrico y sofisticado del Bad Boy.',
        size: '100ml EDP + 100ml Shower Gel',
        notes: ['Pimienta', 'Trufa', 'Maderas'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 57,
        name: 'Le Male Le Parfum',
        brand: 'Jean Paul Gaultier',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/jpg-le-male-le-parfum.jpg',
        description: 'El capitán ha llegado. Elegancia negra y dorada.',
        size: '125ml',
        notes: ['Cardamomo', 'Lavanda', 'Vainilla'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 58,
        name: 'MYSLF Eau de Parfum Gift Set',
        brand: 'Yves Saint Laurent',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/ysl-myslf-set.jpg',
        description: 'La afirmación de la masculinidad moderna.',
        size: '100ml + 10ml',
        notes: ['Flor de Azahar', 'Maderas', 'Pachulí'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    },
    {
        id: 59,
        name: 'Stronger With You Intensely EDP',
        brand: 'Giorgio Armani',
        category: 'diseñador',
        price: '$',
        image: 'assets/images/products/armani-swy-intensely-edp.jpg',
        description: 'Audaz e intenso, para un amor duradero.',
        size: '100ml',
        notes: ['Pimienta Rosa', 'Vainilla', 'Ámbar'],
        mainAccords: [{ name: 'acorde principal', color: '#ccc', width: 50 }],
        inStock: true
    }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filtered = this.products.filter(p => p.category === category);
    return new BehaviorSubject<Product[]>(filtered).asObservable();
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}
