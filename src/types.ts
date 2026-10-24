export interface MenuItem {
  id: string;
  name: string;
  category: 'shakes' | 'coffee' | 'tea' | 'burgers' | 'savory' | 'desserts';
  price: number; // in PKR
  description: string;
  image?: string;
  badge?: string;
  spicy?: boolean;
  popular?: boolean;
  serves?: string;
  prepTime?: string;
  options?: {
    name: string;
    choices: string[];
  }[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedOptions?: Record<string, string>;
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  content: string;
  mealType?: string;
  ownerResponse?: string;
  photosCount?: number;
}

export interface Reservation {
  name: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  notes?: string;
}
