import { StaticImageData } from "next/image";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Image = {
  id: number;
  original: string;
  thumbnail: string;
};

export type Type = {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  settings: any[];
};

export type Shop = {
  id: number;
  name: string;
  slug: string;
  logo: Image;
};

export type TProduct = {
  id: number;
  name: string;
  slug: string;
  type: Type;
  language: string;
  translated_languages: string[];
  product_type: "simple" | "variable";
  shop: Shop;
  sale_price: number | null;
  max_price: number;
  min_price: number;
  image: Image;
  status: string;
  price: number | null;
  quantity: number;
  unit: string;
  sku: string | null;
  sold_quantity: number;
  in_flash_sale: number;
  visibility: string;
};

export type ProductResponse = {
  data: TProduct[];
  current_page: number;
  from: number;
  to: number;
  last_page: number;
  path: string;
  per_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  last_page_url: string;
  first_page_url: string;
};

/* Types for Categories */

export interface CategoryImage {
  id: number;
  original: string;
  thumbnail: string;
}

export interface TCategory {
  id: number;
  name: string;
  slug: string;
  language: string;
  translated_languages: string[];
  parent: { name: string | null };
  children: any[];
  products_count: number;
  details: string | null;
  image: Image[];
  icon: string | null;
  type_id: number | null;
  banner_image: any[];
  type: {
    id: number | null;
    name: string | null;
    slug: string | null;
    logo: string | null;
  };
}

export interface CatagoryApiResponse {
  data: TCategory[];
  current_page: number;
  from: number;
  to: number;
  last_page: number;
  path: string;
  per_page: number;
  total: number;
  next_page_url: string | null;
  prev_page_url: string | null;
  last_page_url: string;
  first_page_url: string;
}
export type TipImage = {
  id: number;
  url: string | StaticImageData;
};
export type ShopImage = {
  id: number;
  url: string | StaticImageData;
  message: string;
};
