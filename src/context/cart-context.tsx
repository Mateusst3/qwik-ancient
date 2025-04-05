import { createContextId, useContextProvider, useSignal, useContext, Signal, component$, Slot } from "@builder.io/qwik";
import type { Product } from "~/api";

export interface CartItem extends Product {
  quantity: number;
}

export const CartContext = createContextId<Signal<CartItem[]>>("cart-context");

export const useCartContext = () => useContext(CartContext);

export const CartProvider = component$(() => {
  const cartSignal = useSignal<CartItem[]>([]);
  useContextProvider(CartContext, cartSignal);
  return <Slot />;
}); 