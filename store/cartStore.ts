import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// Cart store items 
interface CartStore {
  items: CartItem[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotal: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  
  addProduct: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // If product exists, increment quantity
        return {
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      
      // If product doesn't exist, add new item
      return {
        items: [...state.items, { product, quantity: 1 }],
      };
    });
  },
  
  removeProduct: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId),
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      ),
    }));
  },
  
  getTotal: () => {
    const state = get();
    return state.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },

  // Reset cart items to empty array
  resetCart: () => set({items: []}),
}));