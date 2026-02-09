export interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'arabico' | 'diseñador' | 'nicho' | 'arabico-decant' | 'diseñador-decant' | 'nicho-decant';
  price: number | string;
  image: string;
  description: string;
  gender?: 'masculino' | 'femenino' | 'unisex'; // Para identificar si es para hombre, mujer o ambos
  notes?: string[];
  mainAccords?: { name: string; color: string; width: number }[];
  size?: string; // Para identificar el tamaño del decant
  inStock?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
