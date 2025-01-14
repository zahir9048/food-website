import { client } from "@/sanity/lib/client";

export interface IProduct {
  _id: string;
  name: string;
  quantityAvailable: number;
  category: string;
  price: number;
  isAvailable: boolean;
  imageUrls: string[];
}

export const getAllProducts = async () => {
  try {
    const queryAllProducts =
      "*[_type == 'product']{_id, name, quantityAvailable, category, price, isAvailable, 'imageUrls': images[].asset->url}";
    const products: IProduct[] = await client.fetch(queryAllProducts);
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const queryProduct =
      "*[_type == 'product' && _id == $id ][0]{_id, name, quantityAvailable, category, price, isAvailable, 'imageUrls': images[].asset->url}";
    const product: IProduct = await client.fetch(queryProduct, { id });
    return product ? product : null;
  } catch (error) {
    console.log(error);
  }
};
