# Modern E-commerce with Qwik ⚡️

A high-performance e-commerce application built with Qwik, showcasing modern web development practices and real-time data management.

## 🚀 Technologies

- [Qwik](https://qwik.dev/) - Framework for high-performance web applications
- [GraphQL](https://graphql.org/) - Query language for our API
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Platzi Fake Store API](https://fakeapi.platzi.com/) - GraphQL API for product data

## 🛠 Project Overview

This e-commerce platform demonstrates:
- Resumable state management with Qwik
- Efficient data fetching with GraphQL
- Responsive design with TailwindCSS
- Shopping cart functionality
- Product filtering and search
- Real-time updates

### ⚠️ Important Note About Data

This project uses the Platzi Fake Store API, which is a public API where:
- Data can be modified by any user
- Products may be unstable or inconsistent
- Images might not always be available
- New products can be added/removed at any time

## 🏗 Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.dev/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `npm run qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.dev/qwikcity/guides/static-site-generation/).

```shell
npm run qwik add # or `yarn qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `yarn start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
npm run preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
npm run build # or `yarn build`
```

## 🚦 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start development server:
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:5173`

## 🛠 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

## 🌐 API Integration

We use GraphQL to fetch data from the Platzi Fake Store API:

```typescript
const getProducts = async () => {
  // GraphQL query for products
  const query = `
    query {
      products(limit: 10, offset: 0) {
        title
        price
        images
        description
        category {
          name
        }
      }
    }
  `;
  // ... query execution
};
```

## 🔄 State Management

The application uses Qwik's built-in state management:
- Signals for reactive state
- Contexts for global state (shopping cart)
- Lazy-loading for optimal performance

## 📱 Features

- **Product Catalog**: Browse through available products
- **Shopping Cart**: Add/remove items, update quantities
- **Product Filters**: Filter by category, price, and search terms
- **Responsive Design**: Works on all device sizes
- **Real-time Updates**: Instant feedback on user actions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ⚡️ by Mateus Silva Teixeira
