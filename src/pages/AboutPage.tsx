import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-6 md:p-8">
      <div class="flex flex-col gap-12 max-w-7xl mx-auto">
        <header class="flex flex-col items-center text-center p-6 sm:p-8">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Built with Modern Tech
            <span class="block text-blue-600 mt-2">For Maximum Performance</span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mt-6">
            Our e-commerce platform leverages cutting-edge technologies to deliver 
            an exceptional shopping experience with unmatched speed and reliability.
          </p>
        </header>

        <section class="flex flex-col md:flex-row gap-8 p-4">
          <div class="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="h-16 w-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mt-6">Qwik.js</h3>
            <p class="text-gray-600 mt-4">
              Built on Qwik.js, our application achieves instant load times through 
              resumability and fine-grained lazy loading. This means blazing-fast 
              performance without sacrificing functionality.
            </p>
            <div class="flex flex-wrap gap-2 mt-6">
              {["Resumable", "Fast", "Modern"].map(tag => (
                <span key={tag} class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* GraphQL Card */}
          <div class="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg class="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.002 0c-2.872 0-5.339 1.404-6.872 3.741l6.872 11.898 6.872-11.898C17.341 1.404 14.874 0 12.002 0zm0 18.849L4.328 5.681C3.511 7.316 3.05 9.181 3.05 11.159c0 4.941 4.011 8.951 8.952 8.951s8.952-4.01 8.952-8.951c0-1.978-.461-3.843-1.278-5.478L12.002 18.849z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mt-6">GraphQL API</h3>
            <p class="text-gray-600 mt-4">
              Our GraphQL implementation enables precise data fetching, eliminating 
              over-fetching and under-fetching issues. This results in optimal 
              network performance and a smoother user experience.
            </p>
            <div class="flex flex-wrap gap-2 mt-6">
              {["Efficient", "Flexible", "Precise"].map(tag => (
                <span key={tag} class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div class="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div class="h-16 w-16 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 16.5h3v-6h-3v6zm0-9h3v-3h-3v3z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mt-6">State Management</h3>
            <p class="text-gray-600 mt-4">
              Utilizing Qwik's built-in state management with signals and stores, 
              we achieve reactive updates with minimal overhead, ensuring a smooth 
              and responsive user interface.
            </p>
            <div class="flex flex-wrap gap-2 mt-6">
              {["Reactive", "Efficient", "Simple"].map(tag => (
                <span key={tag} class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section class="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
          <h2 class="text-3xl font-bold text-gray-900 text-center">Key Features</h2>
          <div class="flex flex-col md:flex-row flex-wrap gap-8 mt-8">
            {[
              {
                title: "Lightning Fast Performance",
                description: "Optimized loading and rendering for instant user interactions"
              },
              {
                title: "Smart Data Fetching",
                description: "Efficient API calls with GraphQL for optimal data transfer"
              },
              {
                title: "Responsive Design",
                description: "Beautiful and functional across all device sizes"
              },
              {
                title: "Modern Architecture",
                description: "Built with the latest web technologies and best practices"
              }
            ].map((feature) => (
              <div key={feature.title} class="flex-1 min-w-[200px] flex items-start gap-4 p-4">
                <div class="flex-shrink-0">
                  <div class="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p class="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});
