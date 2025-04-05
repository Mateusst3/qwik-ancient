import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { getProductsRest, Product } from "~/api";

export default component$(() => {
  const productsSignal = useSignal<Product[]>([]);

  useTask$(async () => {
    try {
      const data = await getProductsRest();
      productsSignal.value = data;
    } catch (error) {
      console.error("Error loading products", error);
    }
  });
  return (
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div class="container mx-auto px-4 py-8 md:py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Our Collection
              <span class="block text-blue-600">Exclusive Products</span>
            </h1>
            
            <p class="text-lg md:text-xl text-gray-600 leading-relaxed">
              Explore our carefully curated selection of premium products.
              Exceptional quality, innovative design, and competitive prices.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/products" 
                class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 group"
              >
                Explore Products
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
              
              <a 
                href="#features" 
                class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          <div class="relative">
            <div class="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl transform -rotate-6"></div>
            <div class="relative bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div class="grid grid-cols-2 gap-4">
                {productsSignal.value.filter((_product, index) => index < 4).map((product) => (
                  <div 
                    key={product.id} 
                    class="aspect-square bg-gray-100 rounded-lg p-4 flex items-center justify-center"
                  >
                    <img 
                      src={product.images[0]} 
                      alt={product.title} 
                      class="w-full h-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "🛡️",
              title: "Quality Guaranteed",
              description: "Products carefully selected for your satisfaction"
            },
            {
              icon: "🚚",
              title: "Fast Delivery",
              description: "We ship your order with all the agility you deserve"
            },
            {
              icon: "💎",
              title: "Premium Products",
              description: "We offer only the best for our customers"
            }
          ].map((feature) => (
            <div key={feature.title} class="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="text-4xl mb-4">{feature.icon}</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p class="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
