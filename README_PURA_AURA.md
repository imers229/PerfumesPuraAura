# PURA AURA - Tienda de Perfumes

Una aplicación web moderna desarrollada en Angular para la venta de perfumes de diseñador y perfumes árabes.

## 🌟 Características

- **Navegación Intuitiva**: Navbar con menú desplegable para categorías de productos
- **Catálogo Organizado**: 
  - Perfumes Árabes
  - Perfumes de Diseñador
  - Decants 5ml
  - Decants 10ml
- **Detalles de Producto**: Página dedicada con información completa de cada perfume
- **Carrito de Compras**: Sistema de carrito con persistencia en localStorage
- **Integración WhatsApp**: Botón de compra que envía pedido directamente a WhatsApp
- **Diseño Elegante**: Paleta de colores sofisticada con dorado y negro
- **Animaciones Sutiles**: Transiciones suaves para una mejor experiencia de usuario
- **Responsive**: Diseño adaptable a todos los dispositivos

## 🎨 Paleta de Colores

- **Fondo Oscuro**: `#0a0a0a`
- **Dorado Refinado**: `#C5B358`
- **Texto Principal**: `#9ca3af`
- **Texto Descriptivo**: `#6b7280`

## 🔤 Tipografía

- **Títulos**: Playfair Display (elegante y robusta)
- **Texto**: Montserrat (moderna y legible)

## 📱 Funcionalidades Principales

### Página de Inicio
- Hero section con llamada a la acción
- Productos destacados
- Secciones de categorías

### Nosotros
- Historia de la marca
- Misión y valores
- Compromiso con la calidad

### Catálogo
- Filtrado por categoría
- Tarjetas de producto con imagen, precio y descripción
- Indicadores de stock
- Notas olfativas

### Detalle de Producto
- Imágenes de alta calidad
- Descripción completa
- Notas olfativas
- Selector de cantidad
- Botón "Añadir al Carrito"

### Carrito
- Lista de productos agregados
- Ajuste de cantidades
- Cálculo de total
- Botón "Comprar vía WhatsApp"
- Número de contacto: +593 95 929 5507

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v18 o superior)
- Angular CLI (v19)

### Pasos de instalación

1. Instalar dependencias:
```bash
cd PuraAuraPerfumes
npm install
```

2. Ejecutar el servidor de desarrollo:
```bash
ng serve
```

3. Abrir en el navegador:
```
http://localhost:4200/
```

## 📂 Estructura del Proyecto

```
PuraAuraPerfumes/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── navbar/          # Barra de navegación
│   │   ├── pages/
│   │   │   ├── home/            # Página de inicio
│   │   │   ├── about/           # Página "Nosotros"
│   │   │   ├── catalog/         # Catálogo de productos
│   │   │   ├── product-detail/  # Detalles del producto
│   │   │   └── cart/            # Carrito de compras
│   │   ├── services/
│   │   │   ├── product.ts       # Servicio de productos
│   │   │   └── cart.ts          # Servicio de carrito
│   │   ├── models/
│   │   │   └── product.model.ts # Modelos de datos
│   │   └── app.routes.ts        # Configuración de rutas
│   ├── styles.css               # Estilos globales
│   └── index.html               # Página principal
└── public/
    └── assets/
        └── images/              # Imágenes de productos
```

## 🛠️ Tecnologías Utilizadas

- **Angular 19**: Framework principal
- **TypeScript**: Lenguaje de programación
- **RxJS**: Programación reactiva
- **Google Fonts**: Tipografías (Playfair Display, Montserrat)
- **CSS3**: Estilos y animaciones
- **LocalStorage**: Persistencia del carrito

## 📦 Compilación para Producción

```bash
ng build --configuration production
```

Los archivos compilados estarán en el directorio `dist/`.

## 🎯 Próximas Mejoras Sugeridas

- [ ] Agregar más productos al catálogo
- [ ] Implementar sistema de búsqueda
- [ ] Agregar filtros avanzados (precio, marca, notas)
- [ ] Implementar sistema de favoritos
- [ ] Agregar galería de imágenes en detalle de producto
- [ ] Implementar reviews y valoraciones
- [ ] Agregar animaciones de scroll
- [ ] Optimización de imágenes (lazy loading)

## 📞 Contacto

**WhatsApp**: +593 95 929 5507

## 📄 Licencia

Este proyecto fue creado para PURA AURA.

---

**Desarrollado con ❤️ usando Angular**
