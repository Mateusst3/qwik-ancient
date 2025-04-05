import { gql, GraphQLClient } from "graphql-request";

const BASE_URL = "https://api.escuelajs.co/graphql";
const BASE_URL_API_REST = "https://react-shop-backend.liara.run";

const client = new GraphQLClient(BASE_URL);

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
  };
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const getProductsRest = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL_API_REST}/products`);
  const data = await response.json();
  return data;
};

export const getProducts = async (): Promise<Product[]> => {
  const query = gql`
    query Products {
      products {
        id
        title
        price
        description
        images
        category {
          id
          name
        }
      }
    }
  `;

  const data = await client.request<{ products: Product[] }>(query);
  return data.products;
};

export const getProductById = async (id: number): Promise<Product> => {
  const query = gql`
    query {
      product(id: "${id}") {
        id
        title
        price
        description
        images
        category {
          id
          name
        }
      }
    }
  `;

  const data = await client.request<{ product: Product }>(query);
  return data.product;
};

export const getCategories = async (): Promise<Category[]> => {
  const query = gql`
    query Category {
      categories {
        id
        name
        slug
        image
        creationAt
        updatedAt
      }
    }
  `;

  const data = await client.request<{ categories: Category[] }>(query);
  return data.categories;
};
