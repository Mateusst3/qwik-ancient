import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Product } from "~/api";
import { useCartContext } from "~/context/cart-context";

interface Props {
  product: Product;
  toggleFullScreen: () => void;
}

export default component$(({ product, toggleFullScreen }: Props) => {
  const cart = useCartContext();
  const addedToCart = useSignal(false);

  useVisibleTask$(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const addToCart = $(() => {
    const existingItem = cart.value.find((item) => item.id === product.id);

    if (existingItem) {
      cart.value = cart.value.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      cart.value = [...cart.value, { ...product, quantity: 1 }];
    }
    addedToCart.value = true;
    setTimeout(() => {
      addedToCart.value = false;
    }, 3000);
  });

  return (
    <div
      onClick$={toggleFullScreen}
      class="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-500 ease-in-out"
    >
      <div
        onClick$={(e) => e.stopPropagation()}
        class="bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-500 ease-in-out transform scale-100 opacity-100"
        style="animation: slideIn 0.5s ease-out"
      >
        <div class="p-4 flex justify-between items-center border-b border-gray-700">
          <h2 class="text-xl font-bold text-white">{product.title}</h2>
          <button
            onClick$={toggleFullScreen}
            class="text-gray-300 hover:text-white transition-colors"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="p-6">
          <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/2">
              <img
                src={product.images[0]}
                alt={product.title}
                class="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div class="md:w-1/2">
              <span class="text-sm font-medium text-blue-400 uppercase tracking-wider">
                {product.category.name}
              </span>
              <h3 class="text-2xl font-bold mt-2 mb-4 text-white">
                {product.title}
              </h3>
              <div class="text-xl font-bold text-blue-400 mb-4">
                $ {product.price.toFixed(2)}
              </div>
              <p class="text-gray-300">{product.description}</p>
              {addedToCart.value ? (
                <div class="mt-6 w-full bg-green-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Successfully added to cart!
                </div>
              ) : (
                <button
                  onClick$={addToCart}
                  class="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
});
