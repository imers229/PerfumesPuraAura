export interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'arabico' | 'diseñador' | 'nicho' | 'arabico-decant' | 'diseñador-decant' | 'nicho-decant';
  price: number | string;
  image: string;
  description: string;
  notes?: string[];
  mainAccords?: { name: string; color: string; width: number }[];
  size?: string; // Para identificar el tamaño del decant
  inStock?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
