import { $, component$ } from "@builder.io/qwik";
import type { CartItem } from "~/context/cart-context";
import { useCartContext } from "~/context/cart-context";
interface Props {
  item: CartItem;
}

export default component$(({ item }: Props) => {
  const cart = useCartContext();

  const handleAdd = $(() => {
    cart.value = cart.value.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  });

  const handleRemove = $(() => {
    if (item.quantity === 1) {
      cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
      return;
    }
    cart.value = cart.value.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
  });
  return (
    <div key={item.id} class="flex items-center gap-4 border-b py-2">
      <img
        src={item.images[0]}
        alt={item.title}
        class="w-20 h-20 object-cover rounded"
      />
      <div class="flex-1">
        <h3 class="font-medium text-blue-900">{item.title}</h3>
        <div class="flex items-center justify-start">
          <p class="text-gray-500 w-24">
            $ {item.price} x {item.quantity}
          </p>
          <section class="flex items-center gap-2">
            <button
              onClick$={handleRemove}
              class="font-bold text-blue-500 rounded-full text-xl w-4 h-4 flex items-center justify-center"
            >
              -
            </button>
            <button
              onClick$={handleAdd}
              class="font-bold text-blue-500 rounded-full text-xl w-4 h-4 flex items-center justify-center"
            >
              +
            </button>
          </section>
        </div>
      </div>
      <button
        onClick$={() => {
          cart.value = cart.value.filter((cartItem) => cartItem.id !== item.id);
        }}
        class="text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
});
