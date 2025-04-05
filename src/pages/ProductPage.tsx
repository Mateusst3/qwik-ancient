import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { getCategories, getProducts, Product, Category } from "~/api";
import ProductCard from "~/components/Products/ProductCard";
import ProductFilters, { FilterState } from "~/components/Products/ProductFilters";

export default component$(() => {
    const productsSignal = useSignal<Product[]>([]);
    const filteredProductsSignal = useSignal<Product[]>([]);
    const isLoadingSignal = useSignal(true);
    const categoriesSignal = useSignal<Category[]>([]);
  
    useTask$(async () => {
      const categories = await getCategories();
      categoriesSignal.value = categories;
    });
  
    const applyFilters = $((filters: FilterState) => {
      let filtered = [...productsSignal.value];
  
      if (filters.search) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
  
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.minPrice && product.price <= filters.maxPrice
      );
  
      if (filters.category) {
        filtered = filtered.filter(
          (product) => product.category.name === filters.category
        );
      }
  
      filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case "price_asc":
            return a.price - b.price;
          case "price_desc":
            return b.price - a.price;
          case "name_asc":
            return a.title.localeCompare(b.title);
          case "name_desc":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
  
      filteredProductsSignal.value = filtered;
    });
  
    useTask$(async () => {
      try {
        const data = await getProducts();
        productsSignal.value = data;
        filteredProductsSignal.value = data;
      } catch (error) {
        console.error("Error loading products", error);
      } finally {
        isLoadingSignal.value = false;
      }
    });

  
    return (
      <div class="container mx-auto px-4">
        <ProductFilters
          onFilterChange={applyFilters}
          categories={categoriesSignal.value.map((category) => category.name)}
        />
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProductsSignal.value.length > 0 ? (
            filteredProductsSignal.value.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div class="col-span-full text-center py-8 text-gray-500">
              No products found matching your criteria
            </div>
          )}
        </div>
      </div>
    );
  });