import { $, component$, useSignal } from "@builder.io/qwik";
import { Product } from "~/api";
import ProductFullScreenView from "./ProductFullScreenView";
import { useCartContext } from "~/context/cart-context";

interface Props {
  product: Product;
}

export default component$(({ product }: Props) => {
  const isFullScreen = useSignal(false);
  const cart = useCartContext();

  const addedToCart = useSignal(false);

  const toggleFullScreen = $(() => {
    isFullScreen.value = !isFullScreen.value;
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

  if (isFullScreen.value) {
    return (
      <ProductFullScreenView
        product={product}
        toggleFullScreen={toggleFullScreen}
      />
    );
  }

  return (
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-full max-w-sm mx-auto">
      <div class="relative overflow-hidden group">
        <img
          src={product.images[0]}
          alt={product.title}
          class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute top-2 right-2 bg-white dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-white">
          ${product.price.toFixed(2)}
        </div>
      </div>

      <div class="p-5 flex flex-col flex-grow">
        <span class="text-xs font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wider mb-2">
          {product.category.name}
        </span>

        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {product.title}
        </h3>

        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {product.description}
        </p>

        <div class="mt-auto flex items-center justify-center gap-2">
          <button
            class="bg-white hover:bg-blue-700 text-blue-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            onClick$={toggleFullScreen}
          >
            See Details
          </button>
          {addedToCart.value ? (
            <div class="text-green-500 transition-colors duration-300">
              <p class="flex items-center">Successfully!</p>
            </div>
          ) : (
            <button
              onClick$={addToCart}
              class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 rounded-lg transition-colors duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
});
