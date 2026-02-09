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
      gender: 'masculino',
      image: 'assets/images/products/armaf-odyssey-tyrant.jpg',
      description: 'Cítrico agresivo con base oscura y resinosa. Presencia imposible de ignorar.',
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
      gender: 'masculino',
      image: 'assets/images/products/armaf-odyssey-aqua.jpg',
      description: 'Marina aromática moderna con perfil maduro y naturalista.',
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
      price: 60.00,
      gender: 'masculino',
      image: 'assets/images/products/armaf-odyssey-mandarin-sky.jpg',
      description: 'Mandarina ácida contra caramelo adictivo. Alto contraste seductor y magnético.',
      size: '100ml',
      notes: ['Mandarina', 'Caramelo', 'Haba Tonka'],
      mainAccords: [
        { name: 'cítrico (mandarina)', color: '#F9E076', width: 30 },
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
      gender: 'masculino',
      image: 'assets/images/products/armaf-odyssey-wild-one.jpg',
      description: 'Del frío glacial a la calidez terrosa. Camaleónico y dinámico. Puro contraste.',
      size: '100ml',
      notes: ['Jengibre', 'Menta', 'Pimienta'],
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
      gender: 'unisex',
      image: 'assets/images/products/lattafa-khamrah.jpg',
      description: 'Dátil y especias cálidas en lujo oriental absoluto. Denso y comestible. Confort extremo.',
      size: '100ml',
      notes: ['Canela', 'Dátiles', 'Vainilla'],
      mainAccords: [
        { name: 'dulce (gourmand)', color: '#d94b4b', width: 30 },
        { name: 'cálido especiado', color: '#c25e00', width: 25 },
        { name: 'ambarado / balsámico', color: '#e66b00', width: 15 },
        { name: 'amaderado (akigalawood)', color: '#8d5e2a', width: 10 },
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
      gender: 'unisex',
      image: 'assets/images/products/lattafa-khamrah-qahwa.jpg',
      description: 'Café arábica tostado con especias agudas y amargura aromática equilibrada. Oscuro, maduro y complejo.',
      size: '100ml',
      notes: ['Jengibre', 'Canela', 'Cardamomo'],
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
      gender: 'masculino',
      image: 'assets/images/products/haramain-amber-oud-gold.jpg',
      description: 'Potencia nuclear de frutas tropicales vibrantes sobre almizcle penetrante. Amado u odiado por su extremismo.',
      size: '100ml',
      notes: ['Bergamota', 'Melón', 'Piña'],
      mainAccords: [
        { name: 'dulce', color: '#d94b4b', width: 40 },
        { name: 'afrutado (melón/piña)', color: '#F9E076', width: 30 },
        { name: 'almizclado', color: '#cfc9bd', width: 15 },
        { name: 'ambarado', color: '#e66b00', width: 10 },
        { name: 'ozónico / fresco', color: '#4b9cd3', width: 5 }
      ],
      inStock: true
    },
    {
      id: 8,
      name: 'Amber Oud Aqua Dubai',
      brand: 'Haramain',
      category: 'arabico',
      price: 40.00,
      gender: 'masculino',
      image: 'assets/images/products/haramain-amber-oud-aqua-dubai.jpg',
      description: 'Frutal tropical con frescura verde y marina amarga. Lujoso, vacacional y brillantemente refrescante.',
      size: '100ml',
      notes: ['Bergamota', 'Mandarina', 'Gálbano'],
      mainAccords: [
        { name: 'afrutado (grosella/melón)', color: '#d94b4b', width: 35 },
        { name: 'verde / herbáceo', color: '#6b8c4d', width: 25 },
        { name: 'cítrico', color: '#F9E076', width: 20 },
        { name: 'almizclado', color: '#cfc9bd', width: 10 },
        { name: 'acuático / ambarado', color: '#4b9cd3', width: 10 }
      ],
      inStock: true
    },
    {
      id: 9,
      name: 'Odyssey Homme White Edition',
      brand: 'Armaf',
      category: 'arabico',
      price: 60.00,
      gender: 'masculino',
      image: 'assets/images/products/armaf-odyssey-white.jpg',
      description: 'Fougère Oriental Acuático sofisticado con hoja de violeta. Elegancia depurada sin lo deportivo.',
      size: '100ml',
      notes: ['Yuzu', 'Hoja de Violeta', 'Pimienta Rosa'],
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
      gender: 'masculino',
      image: 'assets/images/products/lattafa-asad-bourbon.jpg',
      description: 'Especias potentes sumergidas en chocolate y ciruela. Nocturno, elegante y seductor.',
      size: '100ml',
      notes: ['Pimienta Rosa', 'Lavanda', 'Ciruela Mirabel'],
      mainAccords: [
        { name: 'vainilla', color: '#f3e5ab', width: 30 },
        { name: 'cálido especiado', color: '#c25e00', width: 25 },
        { name: 'cacao / dulce', color: '#5D4037', width: 15 },
        { name: 'afrutado / boozy (licor)', color: '#d94b4b', width: 15 },
        { name: 'aromático (lavanda)', color: '#4d8c7c', width: 15 }
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
      gender: 'masculino',
      image: 'assets/images/products/dg-k-gift-set.jpg',
      description: 'Pimiento e higo mediterráneo sobre estructura azul fresca. Intensidad cremosa y especiada refinada.',
      size: '100ml',
      notes: ['Naranja Sanguina', 'Higo', 'Pimiento'],
      mainAccords: [
        { name: 'aromático', color: '#4d8c7c', width: 30 },
        { name: 'cítrico (naranja sanguina)', color: '#F9E076', width: 25 },
        { name: 'amaderado / terroso', color: '#8d5e2a', width: 20 },
        { name: 'fresco especiado (pimiento)', color: '#8daf48', width: 15 },
        { name: 'frutal / lactónico (higo)', color: '#fffdd0', width: 10 }
      ],
      inStock: true
    },
    {
      id: 12,
      name: 'Versace Eros EDT',
      brand: 'Versace',
      category: 'diseñador',
      price: 110.00,
      gender: 'masculino',
      image: 'assets/images/products/versace-eros.jpg',
      description: 'Menta glacial contra vainilla envolvente en absoluto contraste. Máxima proyección. Heroísmo y seducción.',
      size: '100ml',
      notes: ['Menta', 'Limón Italiano', 'Manzana Verde', 'Vainilla', 'Cedro', 'Ambroxan'],
      mainAccords: [
        { name: 'vainilla', color: '#f3e5ab', width: 30 },
        { name: 'aromático', color: '#b8d9b3', width: 20 },
        { name: 'verde', color: '#90ee90', width: 15 },
        { name: 'amaderado', color: '#8b7355', width: 15 },
        { name: 'ámbar', color: '#e8b4a0', width: 20 }
      ],
      inStock: true
    },
    {
      id: 13,
      name: 'Phantom',
      brand: 'Paco Rabanne',
      category: 'diseñador',
      price: 100.00,
      gender: 'masculino',
      image: 'assets/images/products/paco-rabanne-phantom.jpg',
      description: 'Limón cremoso con lavanda tecnológica y vainilla. Sintético, chocante y futurista. IA en una botella.',
      size: '100ml',
      notes: ['Lavanda', 'Limón de Amalfi', 'Ralladura de Limón'],
      mainAccords: [
        { name: 'cítrico (limón cremoso)', color: '#F9E076', width: 30 },
        { name: 'aromático (lavanda)', color: '#4d8c7c', width: 25 },
        { name: 'avainillado / dulce', color: '#f3e5ab', width: 20 },
        { name: 'terroso / ahumado', color: '#6F4E37', width: 15 },
        { name: 'amaderado', color: '#8d5e2a', width: 10 }
      ],
      inStock: true
    },

    // --- Decants Árabes ---
    {
      id: 14,
      name: 'Club De Nuit Precieux 1',
      brand: 'Armaf',
      category: 'arabico',
      price: 85.00,
      gender: 'unisex',
      image: 'assets/images/products/armaf-club-de-nuit-precieux-1.jpg',
      description: 'Piña y pera en apertura, caramelo adictivo, corazón de anís con cuero y ámbar oscuro. Sofisticación pura.',
      size: '100ml',
      notes: ['Piña', 'Bergamota', 'Pimienta Rosa', 'Jazmín', 'Anís', 'Cuero', 'Ámbar', 'Vainilla'],
      mainAccords: [
        { name: 'cítrico', color: '#f4d03f', width: 25 },
        { name: 'ámbar / resinoso', color: '#d4a756', width: 20 },
        { name: 'amaderado', color: '#8b7355', width: 15 },
        { name: 'especiado', color: '#c25e00', width: 15 },
        { name: 'dulce', color: '#e8b4a0', width: 15 },
        { name: 'cuero / almizale', color: '#6F4E37', width: 10 }
      ],
      inStock: true
    },
    {
      id: 16,
      name: 'Asad Bourbon (Decant)',
      brand: 'Lattafa',
      category: 'arabico-decant',
      price: 8.00,
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'femenino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'masculino',
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
      gender: 'femenino',
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
      price: 65.00,
      gender: 'unisex',
      image: 'assets/images/products/lattafa-musamam-white-intense.jpg',
      description: 'Cítrico fresco evolucionando a paraíso floral con sándalo cálido. Recorrido olfativo sofisticado e inesperado.',
      size: '100ml',
      notes: ['Bergamota', 'Ylang-Ylang', 'Sándalo'],
      mainAccords: [
        { name: 'amaderado (sándalo)', color: '#8d5e2a', width: 25 },
        { name: 'especiado cálido', color: '#c25e00', width: 20 },
        { name: 'coco', color: '#f3e5ab', width: 15 },
        { name: 'floral amarillo (ylang-ylang)', color: '#ffc107', width: 15 },
        { name: 'cítrico', color: '#F9E076', width: 15 },
        { name: 'almizclado / atalcado', color: '#cfc9bd', width: 10 }
      ],
      inStock: true
    },
    {
      id: 32,
      name: 'Amber Oud Exclusif Sport',
      brand: 'Al Haramain',
      category: 'arabico',
      price: 60.00,
      gender: 'masculino',
      image: 'assets/images/products/al-haramain-amber-oud-exclusif-sport.jpg',
      description: 'Hierbas aromáticas y maderas blancas con ámbar refrescante. Vigorante sofisticación energética.',
      size: '100ml',
      notes: ['Cítrico', 'Azafrán', 'Jazmín'],
      mainAccords: [
        { name: 'cítrico', color: '#F9E076', width: 30 },
        { name: 'aromático (hierbas)', color: '#4d8c7c', width: 20 },
        { name: 'marino / acuático', color: '#4b9cd3', width: 15 },
        { name: 'amaderado (cedro blanco)', color: '#8d5e2a', width: 15 },
        { name: 'ámbar / resinoso', color: '#e66b00', width: 10 },
        { name: 'almizclado', color: '#cfc9bd', width: 10 }
      ],
      inStock: true
    },
    {
       id: 33,
       name: 'Odyssey Mandarin Sky Elixir',
       brand: 'Armaf',
       category: 'arabico',
       price: 70.00,
       gender: 'masculino',
       image: 'assets/images/products/armaf-odyssey-mandarin-sky-elixir.jpg',
       description: 'Mandarina cítrica con especias y base oscura cerosa. Impacto energético garantizado.',
       size: '100ml',
       notes: ['Mandarina', 'Especias', 'Ámbar'],
       mainAccords: [
         { name: 'fresco especiado', color: '#c25e00', width: 35 },
         { name: 'amaderado', color: '#8d5e2a', width: 25 },
         { name: 'cítrico', color: '#F9E076', width: 15 },
         { name: 'aromático', color: '#4d8c7c', width: 15 },
         { name: 'cálido especiado', color: '#c25e00', width: 10 }
       ],
       inStock: true
    },
    {
        id: 34,
        name: 'Club De Nuit Precieux 1 Extrait de Parfum',
        brand: 'Armaf',
        category: 'arabico',
        price: 70.00,
        gender: 'masculino',
        image: 'assets/images/products/armaf-club-de-nuit-precieux-1.jpg',
        description: 'Composición Chypre Ambarina densa y multifacética que combina notas de piña, pera y caramelo con un corazón de anís y un fondo de cuero y ámbar.',
        size: '200ml',
        notes: ['Nota 1', 'Nota 2', 'Nota 3'],
        mainAccords: [
          { name: 'cítrico', color: '#F9E076', width: 25 },
          { name: 'ámbar / resinoso', color: '#e66b00', width: 20 },
          { name: 'amaderado', color: '#8d5e2a', width: 15 },
          { name: 'especiado', color: '#c25e00', width: 15 },
          { name: 'dulce', color: '#d94b4b', width: 15 },
          { name: 'cuero / almizcle', color: '#6F4E37', width: 10 }
        ],
        inStock: true
    },
    {
        id: 35,
        name: 'Asad',
        brand: 'Lattafa',
        category: 'arabico',
        price: 55.00,
        gender: 'masculino',
        image: 'assets/images/products/lattafa-asad.jpg',
        description: 'Clavo y nuez moscada proyectando autoridad robusta. Sándalo cálido con vainilla oscura. Masculinidad genuina.',
        size: '100ml',
        notes: ['Clavo', 'Nuez Moscada', 'Ámbar', 'Sándalo', 'Vainilla', 'Tabaco'],
        mainAccords: [
          { name: 'especiado cálido', color: '#d2691e', width: 35 },
          { name: 'ámbar', color: '#cc8844', width: 25 },
          { name: 'amaderado', color: '#8b6914', width: 20 },
          { name: 'dulce', color: '#e8b4a0', width: 20 }
        ],
        inStock: true
    },
    {
        id: 36,
        name: 'Asad Zanzibar',
        brand: 'Lattafa',
        category: 'arabico',
        price: 55.00,
        gender: 'masculino',
        image: 'assets/images/products/lattafa-asad-zanzibar.jpg',
        description: 'Coco y sal marina evocando playas exóticas. Dulzura tropical láctica con elegancia atalcada. Lujo costero.',
        size: '100ml',
        notes: ['Sal Marina', 'Agua de Coco', 'Vainilla', 'Iris', 'Base Cremosa'],
        mainAccords: [
          { name: 'salino / marino', color: '#3a8db7', width: 30 },
          { name: 'coco', color: '#f0e68c', width: 25 },
          { name: 'vainilla', color: '#f5deb3', width: 25 },
          { name: 'floral', color: '#d3c0d0', width: 20 }
        ],
        inStock: true
    },
    {
        id: 37,
        name: '9 PM',
        brand: 'Afnan',
        category: 'arabico',
        price: 60.00,
        gender: 'masculino',
        image: 'assets/images/products/afnan-9-pm.jpg',
        description: 'Manzana verde luminosa contra vainilla ardiente y especiado. Nocturno, audaz y adictivamente energético.',
        size: '100ml',
        notes: ['Manzana Verde', 'Canela', 'Vainilla', 'Notas Dulces'],
        mainAccords: [
          { name: 'dulce', color: '#e8a5a0', width: 35 },
          { name: 'vainilla', color: '#f5deb3', width: 25 },
          { name: 'frutal', color: '#ffa07a', width: 20 },
          { name: 'especiado cálido', color: '#d2691e', width: 20 }
        ],
        inStock: true
    },
    {
        id: 38,
        name: 'Hayaati Gift Set',
        brand: 'Lattafa',
        category: 'arabico',
        price: 70.00,
        gender: 'unisex',
        image: 'assets/images/products/lattafa-hayaati-gift-set.jpg',
        description: 'Manzana fresca y bergamota cítrica con canela cálida. Equilibrio diario perfecto. Refrescante pero con cuerpo.',
        size: '100ml',
        notes: ['Manzana', 'Bergamota', 'Canela', 'Almízcle', 'Vainilla'],
        mainAccords: [
          { name: 'amaderado', color: '#8b7355', width: 35 },
          { name: 'aromático', color: '#6fa8a3', width: 25 },
          { name: 'frutal', color: '#ffa07a', width: 20 },
          { name: 'especiado fresco', color: '#d2b48c', width: 20 }
        ],
        inStock: true
    },
    {
        id: 39,
        name: 'Yara',
        brand: 'Lattafa',
        category: 'arabico',
        price: 60.00,
        gender: 'femenino',
        image: 'assets/images/products/lattafa-yara.jpg',
        description: 'Vainilla cremosa con almizcle suave y frutas tropicales exóticas. Fresas con crema y flores de terciopelo. Inocencia sofisticada.',
        size: '100ml',
        notes: ['Vainilla', 'Almízcle', 'Frutas Tropicales', 'Fresa con Crema'],
        mainAccords: [
          { name: 'dulce / láctico', color: '#e8a5a0', width: 40 },
          { name: 'atalcado', color: '#d3c0d0', width: 30 },
          { name: 'frutal tropical', color: '#ffa07a', width: 30 }
        ],
        inStock: true
    },
    {
        id: 40,
        name: 'Asad Elixir',
        brand: 'Lattafa',
        category: 'arabico',
        price: 60.00,
        gender: 'masculino',
        image: 'assets/images/products/lattafa-asad-elixir.jpg',
        description: 'Especiado pesado extremo en densidad oriental pura. Duración eterna en piel. Alto impacto para climas fríos.',
        size: '100ml',
        notes: ['Especiado Pesado', 'Resinas', 'Ámbar', 'Amaderado Oscuro'],
        mainAccords: [
          { name: 'especiado pesado', color: '#d2691e', width: 40 },
          { name: 'resinoso / balsámico', color: '#cc8844', width: 30 },
          { name: 'amaderado oscuro', color: '#8b6914', width: 30 }
        ],
        inStock: true
    },
    {
        id: 41,
        name: 'Sehr',
        brand: 'Lattafa',
        category: 'arabico',
        price: 55.00,
        gender: 'unisex',
        image: 'assets/images/products/lattafa-sehr.jpg',
        description: 'Ámbar misterioso con especias cálidas. Sándalo y maderas proporcionando elegancia oriental. Lujo puro.',
        size: '100ml',
        notes: ['Ámbar', 'Especiado Cálido', 'Sándalo', 'Amaderado'],
        mainAccords: [
          { name: 'ámbar', color: '#cc8844', width: 40 },
          { name: 'especiado cálido', color: '#d2691e', width: 30 },
          { name: 'amaderado', color: '#8b7355', width: 30 }
        ],
        inStock: true
    },
    {
        id: 42,
        name: 'Game of Spades Opal',
        brand: 'Jo Milano Paris',
        category: 'nicho',
        price: 70.00,
        gender: 'unisex',
        image: 'assets/images/products/jo-milano-game-of-spades-opal.jpg',
        description: 'Bergamota y limón frescos contra pera y frambuesa profundas. Sofisticación versátil y larga duración nicho.',
        size: '100ml',
        notes: ['Bergamota', 'Pera', 'Frambuesa'],
        mainAccords: [
          { name: 'floral (rosa/peonía)', color: '#ffc107', width: 20 },
          { name: 'verde / aromático', color: '#4d8c7c', width: 20 },
          { name: 'amaderado (cedro/sándalo)', color: '#8d5e2a', width: 15 },
          { name: 'especiado cálido', color: '#c25e00', width: 15 },
          { name: 'frutal (pera/frambuesa)', color: '#e91e63', width: 15 },
          { name: 'atalcado / almizclado', color: '#cfc9bd', width: 15 }
        ],
        inStock: true
    },
     {
        id: 43,
        name: 'Levante Exclusive',
        brand: 'Jo Milano Paris',
        category: 'nicho',
        price: 60.00,
        gender: 'masculino',
        image: 'assets/images/products/jo-milano-levante-exclusive.jpg',
        description: 'Neroli y bergamota luminosos con frescura marina oceánica. Elegancia costera ligera y sofisticada. Climas cálidos.',
        size: '100ml',
        notes: ['Neroli', 'Bergamota', 'Notas Marinas', 'Flores Blancas'],
        mainAccords: [
          { name: 'cítrico', color: '#f4d03f', width: 40 },
          { name: 'marino / salino', color: '#4a90a4', width: 30 },
          { name: 'amaderado suave', color: '#c9b5a0', width: 30 }
        ],
        inStock: true
    },
    {
        id: 44,
        name: 'Paradoxe',
        brand: 'Prada',
        category: 'diseñador',
        price: 120.00,
        gender: 'femenino',
        image: 'assets/images/products/prada-paradoxe.jpg',
        description: 'Neroli fresco con ámbar intenso y almizcle. Biotecnología revelando multidimensionalidad femenina. Paradoja equilibrada.',
        size: '90ml',
        notes: ['Neroli', 'Ámbar (Ambrofix™)', 'Almizclado (Serenolide™)'],
        mainAccords: [
          { name: 'floral blanco (neroli)', color: '#ffc107', width: 35 },
          { name: 'ámbar (Ambrofix™)', color: '#e66b00', width: 25 },
          { name: 'almizclado (Serenolide™)', color: '#cfc9bd', width: 15 },
          { name: 'dulce (vainilla bourbon)', color: '#d94b4b', width: 15 },
          { name: 'cítrico', color: '#F9E076', width: 10 }
        ],
        inStock: true
    },
    {
        id: 45,
        name: 'Classique Set (2 Pzs)',
        brand: 'Jean Paul Gaultier',
        category: 'diseñador',
        price: 135.00,
        gender: 'femenino',
        image: 'assets/images/products/jpg-classique-set.jpg',
        description: 'Jengibre explosivo con azahar y vainilla oriental. Icónico desde 1993. Ramo frescamente dulce e inolvidable.',
        size: '100ml',
        notes: ['Flor de Azahar', 'Jengibre', 'Flor de China'],
        mainAccords: [
          { name: 'floral blanco (azahar)', color: '#ffc107', width: 30 },
          { name: 'dulce (vainilla)', color: '#d94b4b', width: 20 },
          { name: 'atalcado / iris', color: '#cfc9bd', width: 15 },
          { name: 'especiado cálido (jengibre)', color: '#c25e00', width: 15 },
          { name: 'frutal (pera/mandarina)', color: '#e91e63', width: 10 },
          { name: 'ámbar', color: '#e66b00', width: 10 }
        ],
        inStock: true
    },
    {
        id: 46,
        name: 'BOSS Bottled Infinite EDP Gift Set',
        brand: 'Hugo Boss',
        category: 'diseñador',
        price: 130.00,
        gender: 'masculino',
        image: 'assets/images/products/hugo-boss-bottled-infinite-set.jpg',
        description: 'Manzana y lavanda fresca con acento de olivo ahumado único. Equilibrio arquitectónico y sofisticado moderno.',
        size: '100ml',
        notes: ['Manzana', 'Lavanda', 'Olivo'],
        mainAccords: [
          { name: 'amaderado (olivo/sándalo)', color: '#8d5e2a', width: 30 },
          { name: 'aromático (lavanda/salvia)', color: '#4d8c7c', width: 20 },
          { name: 'frutal (manzana/mandarina)', color: '#e91e63', width: 15 },
          { name: 'especiado cálido (canela)', color: '#c25e00', width: 15 },
          { name: 'herbal (romero)', color: '#6b8c4d', width: 10 },
          { name: 'fresco', color: '#8daf48', width: 10 }
        ],
        inStock: true
    },
    {
        id: 47,
        name: 'Emporio Armani Stronger With You Intensely Set',
        brand: 'Giorgio Armani',
        category: 'diseñador',
        price: 120.00,
        gender: 'masculino',
        image: 'assets/images/products/armani-swy-intensely-set.jpg',
        description: 'Pimienta rosa contra vainilla ambarina densa y adictiva. Fuerza y sofisticación personificadas. Elegancia confiada.',
        size: '50ml + 15ml',
        notes: ['Pimienta Rosa', 'Vainilla', 'Ámbar'],
        mainAccords: [
          { name: 'dulce', color: '#d94b4b', width: 25 },
          { name: 'vainilla', color: '#f3e5ab', width: 20 },
          { name: 'ámbar', color: '#e66b00', width: 15 },
          { name: 'especiado cálido', color: '#c25e00', width: 15 },
          { name: 'aromático', color: '#4d8c7c', width: 15 },
          { name: 'amaderado', color: '#8d5e2a', width: 10 }
        ],
        inStock: true
    },
    {
        id: 48,
        name: 'Spicebomb Extreme EDP',
        brand: 'Viktor&Rolf',
        category: 'diseñador',
        price: 125.00,
        gender: 'masculino',
        image: 'assets/images/products/viktor-rolf-spicebomb-extreme.jpg',
        description: 'Lavanda contra tabaco ardiente y comino intenso. Intensidad fogosa para climas fríos y noches. Masculinidad robusta.',
        size: '90ml',
        notes: ['Lavanda', 'Comino', 'Azafrán', 'Tabaco', 'Vainilla'],
        mainAccords: [
          { name: 'especiado fresco', color: '#8daf48', width: 30 },
          { name: 'tabaco', color: '#6F4E37', width: 20 },
          { name: 'vainilla', color: '#f3e5ab', width: 20 },
          { name: 'especiado cálido', color: '#c25e00', width: 15 },
          { name: 'amaderado / ambarino', color: '#8d5e2a', width: 15 }
        ],
        inStock: true
    },
    {
        id: 49,
        name: 'Flowerbomb EDP Trio Set',
        brand: 'Viktor&Rolf',
        category: 'diseñador',
        price: 130.00,
        gender: 'femenino',
        image: 'assets/images/products/viktor-rolf-flowerbomb-trio-set.jpg',
        description: 'Rosa y jazmín exuberantes contra pachulí terroso. Explosión floral seductora y adictiva. Feminidad brillante.',
        size: '50ml',
        notes: ['Orquídea', 'Jazmín', 'Pachulí', 'Bergamota', 'Rosa Centifolia'],
        mainAccords: [
          { name: 'floral', color: '#d47bc2', width: 40 },
          { name: 'pachulí', color: '#8b6f47', width: 20 },
          { name: 'dulce', color: '#f4c4a0', width: 15 },
          { name: 'floral blanco', color: '#f8f5f0', width: 15 },
          { name: 'cítrico/té', color: '#8db84d', width: 10 }
        ],
        inStock: true
    },
    {
        id: 51,
        name: 'Phantom Parfum Men Set',
        brand: 'Paco Rabanne',
        category: 'diseñador',
        price: 150.00,
        gender: 'masculino',
        image: 'assets/images/products/paco-rabanne-phantom-parfum-set.jpg',
        description: 'Lavanda francesa contra vainilla de Madagascar lujosa y vetiver sensual. Sofisticación nocturna parisina. Misterio puro.',
        size: '100ml',
        notes: ['Lavanda de Francia', 'Vainilla de Madagascar', 'Vetiver de Haití', 'Cardamomo', 'Cedro'],
        mainAccords: [
          { name: 'aromático', color: '#607d8b', width: 25 },
          { name: 'especiado cálido', color: '#b8860b', width: 20 },
          { name: 'amaderado', color: '#8b6914', width: 20 },
          { name: 'dulce', color: '#d4a574', width: 15 },
          { name: 'atalcado / balsámico', color: '#c9b5a0', width: 10 },
          { name: 'frutal', color: '#d2691e', width: 10 }
        ],
        inStock: true
    },
    {
        id: 52,
        name: "Phantom Men's EDT Gift Set (2 Pzs)",
        brand: 'Paco Rabanne',
        category: 'diseñador',
        price: 130.00,
        gender: 'masculino',
        image: 'assets/images/products/paco-rabanne-phantom-edt-set.jpg',
        description: 'Limón energizante con lavanda cremosa hipnótica. Vibración eléctrica y confort seductor. Futurismo rebelde.',
        size: '100ml + 150ml Deso',
        notes: ['Limón de Amalfi', 'Lavanda Cremosa', 'Vainilla', 'Vetiver'],
        mainAccords: [
          { name: 'cítrico', color: '#f4d03f', width: 30 },
          { name: 'lavanda cremosa', color: '#b0a9cc', width: 25 },
          { name: 'amaderado', color: '#8b7355', width: 15 },
          { name: 'ahumado / terroso', color: '#8b6f47', width: 15 },
          { name: 'dulce', color: '#e8b4a0', width: 15 }
        ],
        inStock: true
    },
    {
        id: 53,
        name: 'Versace Eros EDT Set',
        brand: 'Versace',
      category: 'diseñador',
      price: 110.00,
      gender: 'masculino',
      image: 'assets/images/products/versace-eros-edt-set.jpg',
      description: 'Menta glacial contra vainilla envolvente en absoluto contraste. Máxima proyección. Heroísmo y seducción personificados.',
      size: '100ml',
      notes: ['Menta', 'Limón Italiano', 'Manzana Verde', 'Vainilla', 'Cedro', 'Ambroxan'],
      mainAccords: [
        { name: 'vainilla', color: '#f3e5ab', width: 30 },
        { name: 'aromático', color: '#b8d9b3', width: 20 },
        { name: 'verde', color: '#90ee90', width: 15 },
        { name: 'amaderado', color: '#8b7355', width: 15 },
        { name: 'ámbar', color: '#e8b4a0', width: 20 }
      ],
      inStock: true
    },
  
    {
        id: 54,
        name: 'Le Beau Le Parfum Eau de Parfum Intense',
        brand: 'Jean Paul Gaultier',
        category: 'diseñador',
        price: 135.00,
        gender: 'masculino',
        image: 'assets/images/products/jpg-le-beau-le-parfum-intense.jpg',
        description: 'Piña y coco vibrantes evolucionando a vainilla cremosa sofisticada. Tropical intenso con madurez elegante.',
        size: '125ml',
        notes: ['Piña', 'Coco', 'Iris', 'Haba Tonka', 'Sándalo', 'Ylang-Ylang'],
        mainAccords: [
          { name: 'dulce', color: '#f4c4a0', width: 30 },
          { name: 'amaderado', color: '#8b7355', width: 20 },
          { name: 'coco', color: '#f5deb3', width: 20 },
          { name: 'tropical / frutal', color: '#ffa500', width: 15 },
          { name: 'atalcado', color: '#d3d3d3', width: 15 }
        ],
        inStock: true
    },
    {
        id: 55,
        name: 'The Most Wanted EDP Intense Gift Set',
        brand: 'Azzaro',
        category: 'diseñador',
        price: 140.00,
        gender: 'masculino',
        image: 'assets/images/products/azzaro-the-most-wanted-intense-set.jpg',
        description: 'Cardamomo rojo seductor con toffee adictivo y ámbar magnético. Autoridad sofisticada oscura. Rastro inolvidable.',
        size: '100ml + 70ml Deso + 10ml Travel',
        notes: ['Cardamomo Rojo', 'Toffee', 'Ámbar', 'Maderas Ambarinas'],
        mainAccords: [
          { name: 'especiado cálido', color: '#d2691e', width: 40 },
          { name: 'amaderado / ámbar', color: '#cc8844', width: 30 },
          { name: 'dulce', color: '#e8a5a0', width: 30 }
        ],
        inStock: true
    },
    {
        id: 56,
        name: 'Bad Boy Cobalt Elixir Gift Set',
        brand: 'Carolina Herrera',
        category: 'diseñador',
        price: 120.00,
        gender: 'masculino',
        image: 'assets/images/products/ch-bad-boy-cobalt-elixir-set.jpg',
        description: 'Pimienta rosa brillante con trufa negra misteriosa y cedro oscuro. Mineralidad vanguardista y elegante. Nocturno puro.',
        size: '100ml EDP + 100ml Shower Gel',
        notes: ['Pimienta Rosa', 'Trufa Negra', 'Cedro', 'Maderas Oscuras'],
        mainAccords: [
          { name: 'mineral / terroso', color: '#8b7355', width: 30 },
          { name: 'fresco especiado', color: '#b8d9b3', width: 25 },
          { name: 'amaderado', color: '#8b6914', width: 25 },
          { name: 'dulce', color: '#d4a574', width: 20 }
        ],
        inStock: true
    },
    {
        id: 57,
        name: 'Le Male Le Parfum',
        brand: 'Jean Paul Gaultier',
        category: 'diseñador',
        price: 150.00,
        gender: 'masculino',
        image: 'assets/images/products/jpg-le-male-le-parfum.jpg',
        description: 'Cardamomo rojo con iris sofisticado y vainilla negra amaderada. Elegancia masculina personificada. Clase definitiva.',
        size: '125ml',
        notes: ['Cardamomo Rojo', 'Lavanda', 'Menta', 'Iris', 'Vainilla Negra', 'Amaderado'],
        mainAccords: [
          { name: 'especiado cálido', color: '#d2691e', width: 30 },
          { name: 'lavanda', color: '#b0a9cc', width: 25 },
          { name: 'vainilla', color: '#f5deb3', width: 25 },
          { name: 'amaderado / iris', color: '#8b7355', width: 20 }
        ],
        inStock: true
    },
    {
        id: 58,
        name: 'MYSLF Eau de Parfum Gift Set',
        brand: 'Yves Saint Laurent',
        category: 'diseñador',
        price: 140.00,
        gender: 'masculino',
        image: 'assets/images/products/ysl-myslf-set.jpg',
        description: 'Azahar radiante con bergamota limpia y pachulí amaderado. Limpieza de camisa blanca con sofisticación francesa. Vulnerabilidad + Fuerza.',
        size: '100ml + 10ml',
        notes: ['Azahar', 'Bergamota', 'Almízcle', 'Pachulí'],
        mainAccords: [
          { name: 'floral blanco', color: '#f0e68c', width: 35 },
          { name: 'cítrico', color: '#f4d03f', width: 25 },
          { name: 'almizclado', color: '#d3c0d0', width: 20 },
          { name: 'amaderado', color: '#8b7355', width: 20 }
        ],
        inStock: true
    },
    {
        id: 59,
        name: 'Stronger With You Intensely EDP',
        brand: 'Giorgio Armani',
        category: 'diseñador',
        price: 130.00,
        gender: 'masculino',
        image: 'assets/images/products/armani-swy-intensely-edp.jpg',
        description: 'Castaña azucarada con vainilla y pimienta rosa adictiva. Intensidad ambarina sofisticada personificada.',
        size: '100ml',
        notes: ['Pimienta Rosa', 'Vainilla', 'Ámbar'],
        mainAccords: [
          { name: 'dulce', color: '#d94b4b', width: 25 },
          { name: 'vainilla', color: '#f3e5ab', width: 20 },
          { name: 'ambar', color: '#e66b00', width: 15 },
          { name: 'especiado calido', color: '#c25e00', width: 15 },
          { name: 'aromatico', color: '#4d8c7c', width: 15 },
          { name: 'amaderado', color: '#8d5e2a', width: 10 }
        ],
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
