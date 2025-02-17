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

export type TSingleProductResponse = {
  id?: number;
  name?: string;
  slug?: string;
  type?: {
    id?: number;
    name?: string;
    slug?: string;
    logo?: string | null;
  };
  language?: string;
  translated_languages?: string[];
  product_type?: string;
  categories?: any[];
  tags?: {
    id?: number;
    name?: string;
    slug?: string;
  }[];
  metas?: any[];
  digital_file?: any | null;
  variations?: {
    id?: number;
    slug?: string;
    attribute_id?: number;
    value?: string;
    language?: string;
    meta?: string;
    translated_languages?: string[];
    attribute?: {
      id?: number;
      slug?: string;
      language?: string;
      name?: string;
      shop_id?: number;
      created_at?: string;
      updated_at?: string;
      translated_languages?: string[];
    };
  }[];
  variation_options?: {
    id?: number;
    title?: string;
    image?: string | null;
    price?: string;
    sale_price?: string;
    language?: string;
    quantity?: number;
    sold_quantity?: number;
    is_disable?: number;
    sku?: string;
    options?: {
      name?: string;
      value?: string;
    }[];
    product_id?: number;
    digital_file_tracker?: any | null;
    created_at?: string;
    updated_at?: string;
    is_digital?: number;
    blocked_dates?: any[];
  }[];
  shop_id?: number;
  shop?: {
    id?: number;
    name?: string;
    slug?: string;
    logo?: {
      id?: number;
      original?: string;
      thumbnail?: string;
    };
  };
  author?: {
    id?: number | null;
    name?: string | null;
    slug?: string | null;
    logo?: string | null;
  };
  manufacturer?: {
    id?: number | null;
    name?: string | null;
    slug?: string | null;
    logo?: string | null;
  };
  related_products?: any[];
  description?: string;
  in_stock?: number;
  is_taxable?: number;
  is_digital?: number;
  is_external?: number;
  external_product_url?: string | null;
  external_product_button_text?: string | null;
  sale_price?: string | null;
  max_price?: number;
  min_price?: number;
  ratings?: number;
  total_reviews?: number;
  rating_count?: any[];
  my_review?: any | null;
  in_wishlist?: boolean;
  sku?: string | null;
  gallery?: any[];
  image?: {
    id?: number;
    original?: string;
    thumbnail?: string;
  };
  video?: string | null;
  status?: string;
  height?: number | null;
  length?: number | null;
  width?: number | null;
  price?: string | null;
  quantity?: number;
  unit?: string;
  in_flash_sale?: number;
};
export interface LittleImageData {
  id: number;
  original: string;
  thumbnail: string;
}
