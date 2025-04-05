import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import AboutPage from "~/pages/AboutPage";

export default component$(() => {
  return <AboutPage />;
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    { name: "description", content: "About page" },
  ],
};