import { component$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import HomePage from "~/pages/HomePage";

export default component$(() => {
  return <HomePage />;
});

export const head: DocumentHead = {
  title: "QwikJs Store",
  meta: [
    {
      name: "description",
      content: "QwikJs Store",
    },
  ],
};
