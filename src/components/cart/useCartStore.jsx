import { create } from 'zustand';

const useCartStore = create(
  persist(
    (set) => ({
      products: [],
      actions: {
        addToCart: (product) => set((state) => ({ products: [...state.products, product] })),
        clearCart: () => set({ products: [] }),
      },
    }),
    {name: "cart"}
  )
);

export const useCartActions = () => {
  const { actions } = useCartStore();
  return actions;
};

export const useProducts = () => useCartStore((state) => state.product);
