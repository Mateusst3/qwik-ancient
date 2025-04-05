import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useCartContext } from "~/context/cart-context";
import ProductInCart from "../Products/ProductInCart";

export default component$(() => {
  const isOpen = useSignal(false);
  const cart = useCartContext();

  const getTotalPrice = () => {
    return cart.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useVisibleTask$(({ track }) => {
    track(() => isOpen.value);
    if (isOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const closeCart = $(() => {
    isOpen.value = false;
  });

  return (
    <div class="relative inline-block">
      <button
        onClick$={() => (isOpen.value = !isOpen.value)}
        class="relative p-2 text-white hover:bg-gray-700 rounded-md transition-colors"
      >
        <span class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {cart.value.length}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </button>

      <div
        onClick$={closeCart}
        class={`fixed inset-0 bg-white/30 backdrop-blur-sm z-50 transition-all duration-500 ease-in-out ${
          isOpen.value ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick$={(e) => e.stopPropagation()}
          class={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transition-transform duration-500 ease-in-out ${
            isOpen.value ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div class="flex flex-col h-full">
            <div class="p-4 border-b">
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold">Cart</h2>
                <button
                  onClick$={() => (isOpen.value = false)}
                  class="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            </div>

            {cart.value.length === 0 ? (
              <div class="flex-1 flex items-center justify-center">
                <p class="text-center text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div class="flex-1 overflow-y-auto p-4">
                  {cart.value.map((item) => (
                    <ProductInCart key={item.id} item={item} />
                  ))}
                </div>

                <div class="border-t p-4 bg-white text-blue-900">
                  <div class="flex justify-between mb-4">
                    <span class="font-bold">Total:</span>
                    <span class="font-bold">$ {getTotalPrice()}</span>
                  </div>
                  <button
                    class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick$={() => {
                      alert("Checkout not implemented");
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
