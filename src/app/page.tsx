import BigImage from "@/components/BigImage/BigImage";
import Carusal from "@/components/Carusal/Carusal";
import CategoryCarusal from "@/components/CategoryCarusal/CategoryCarusal";
import Hero from "@/components/Hero/Hero";
import HeroFooter from "@/components/HeroFooter/HeroFooter";
import ShopByConcern from "@/components/ShopByConcern/ShopByConcern";

import TipsTricks from "@/components/Tips&Tricks/TipsTricks";

export const revalidateTime = 6;
const Home = async () => {
  /* Product Api */
  const ProductRes = await fetch("https://api-maya.nusratech.com/products", {
    cache: "force-cache",
  });
  const jsonRes = await ProductRes.json();
  const products = jsonRes?.data;

  /* Categories Api */
  const res = await fetch("https://api-maya.nusratech.com/categories/", {
    cache: "force-cache",
  });
  const jsonCategories = await res.json();
  const categories = jsonCategories?.data;
  return (
    <div>
      <Hero></Hero>
      <HeroFooter></HeroFooter>
      <Carusal products={products}></Carusal>
      <CategoryCarusal categories={categories}></CategoryCarusal>
      <BigImage></BigImage>
      <TipsTricks></TipsTricks>
      <ShopByConcern></ShopByConcern>
    </div>
  );
};
export default Home;
