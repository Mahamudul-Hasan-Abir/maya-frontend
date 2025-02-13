import BigImage from "@/components/BigImage/BigImage";
import Carusal from "@/components/Carusal/Carusal";
import Category from "@/components/Category/Category";

import Hero from "@/components/Hero/Hero";
import HeroFooter from "@/components/HeroFooter/HeroFooter";
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
      <Category key={categories.id} categories={categories}></Category>
      <BigImage></BigImage>
      <TipsTricks></TipsTricks>
    </div>
  );
};
export default Home;
