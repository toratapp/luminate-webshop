import { create } from 'zustand';
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      productsInCart: [],
      addToCart: (product) => set((state) => ({ productsInCart: [...state.productsInCart, product] })),
      clearCart: () => set({ productsInCart: [] }),
    }),
    {name: "cart"}
  )
);

export const useCartActions = () => {
  const { addToCart, clearCart } = useCartStore();
  return { addToCart, clearCart };
};

export const useProducts = () => useCartStore((state) => state.productsInCart);
