import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProductPage from "~/pages/ProductPage";

export default component$(() => {
  return <ProductPage />;
});

export const head: DocumentHead = {
  title: "Products | QwikJs Store",
  meta: [
    {
      name: "description",
      content: "QwikJs Store Products Page",
    },
  ],
};
