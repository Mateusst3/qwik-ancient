import { component$, useSignal, $, PropFunction } from "@builder.io/qwik";

export interface FilterState {
  search: string;
  minPrice: number;
  maxPrice: number;
  category: string;
  sortBy: "price_asc" | "price_desc" | "name_asc" | "name_desc";
}

interface Props {
  onFilterChange: PropFunction<(filters: FilterState) => void>;
  categories: string[];
}

export default component$<Props>(({ onFilterChange, categories }) => {
  const filters = useSignal<FilterState>({
    search: "",
    minPrice: 0,
    maxPrice: 1000,
    category: "",
    sortBy: "price_asc",
  });
  const isOpen = useSignal(false);
  const debouncedFilters = useSignal(filters.value);

  const updateFilters = $((newFilters: FilterState) => {
    filters.value = newFilters;
    setTimeout(() => {
      debouncedFilters.value = newFilters;
      onFilterChange(newFilters);
    }, 300);
  });

  return (
    <div class="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
      <button
        onClick$={() => (isOpen.value = !isOpen.value)}
        class="w-full p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span class="font-medium text-gray-700">Filters</span>
          {(filters.value.search ||
            filters.value.category ||
            filters.value.minPrice > 0 ||
            filters.value.maxPrice < 1000) && (
            <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class={`h-5 w-5 text-gray-500 transform transition-transform duration-300 ${isOpen.value ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        class={`transition-all duration-500 ease-in-out ${
          isOpen.value
            ? "max-h-[500px] opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-4"
        }`}
      >
        <div class="p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium text-gray-700">Search</label>
              <input
                type="text"
                class="border rounded-md p-2 h-10"
                placeholder="Product name..."
                value={filters.value.search}
                onInput$={(ev) => {
                  updateFilters({
                    ...filters.value,
                    search: (ev.target as HTMLInputElement).value,
                  });
                }}
              />
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium text-gray-700">
                Price Range
              </label>
              <div class="flex gap-2">
                <input
                  type="number"
                  class="border rounded-md p-2 w-full h-10"
                  placeholder="Min"
                  value={filters.value.minPrice}
                  onInput$={(ev) => {
                    updateFilters({
                      ...filters.value,
                      minPrice: Number((ev.target as HTMLInputElement).value),
                    });
                  }}
                />
                <input
                  type="number"
                  class="border rounded-md p-2 w-full h-10"
                  placeholder="Max"
                  value={filters.value.maxPrice}
                  onInput$={(ev) => {
                    updateFilters({
                      ...filters.value,
                      maxPrice: Number((ev.target as HTMLInputElement).value),
                    });
                  }}
                />
              </div>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium text-gray-700">Category</label>
              <select
                class="border rounded-md p-2 h-10"
                value={filters.value.category}
                onChange$={(ev) => {
                  updateFilters({
                    ...filters.value,
                    category: (ev.target as HTMLSelectElement).value,
                  });
                }}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium text-gray-700">Sort By</label>
              <select
                class="border rounded-md p-2 h-10"
                value={filters.value.sortBy}
                onChange$={(ev) => {
                  updateFilters({
                    ...filters.value,
                    sortBy: (ev.target as HTMLSelectElement)
                      .value as FilterState["sortBy"],
                  });
                }}
              >
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="name_asc">Name: A to Z</option>
                <option value="name_desc">Name: Z to A</option>
              </select>
            </div>

            <div class="flex flex-col gap-1">
              <label class="text-sm font-medium text-gray-700 invisible">
                Actions
              </label>
              <div class="flex gap-2">
                <button
                  class="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-300 h-10"
                  onClick$={() => {
                    const resetFilters: FilterState = {
                      search: "",
                      minPrice: 0,
                      maxPrice: 1000,
                      category: "",
                      sortBy: "price_asc" as const,
                    };
                    updateFilters(resetFilters);
                  }}
                >
                  Clear All
                </button>
                <button
                  class="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 h-10"
                  onClick$={() => {
                    isOpen.value = false;
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
