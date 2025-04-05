import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Cart from "~/components/Cart/Cart";

export default component$(() => {
  const isMenuOpen = useSignal(false);

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  return (
    <nav class="bg-gray-900 text-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="text-xl font-bold">Qwik Shop</span>
            </div>
            <div class="hidden md:block ml-10">
              <div class="flex items-center space-x-4">
                <Link
                  href="/"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/about"
                  class="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="hidden md:block">
              <Cart />
            </div>
            <div class="flex items-center md:hidden">
              <button
                onClick$={toggleMenu}
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class={`h-6 w-6 ${isMenuOpen.value ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  class={`h-6 w-6 ${isMenuOpen.value ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
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
          </div>
        </div>
      </div>

      <div class={`md:hidden ${isMenuOpen.value ? "block" : "hidden"}`}>
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors"
          >
            Products
          </Link>
          <Link
            href="/about"
            class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors"
          >
            About
          </Link>
          <div class="mt-1">
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
});
