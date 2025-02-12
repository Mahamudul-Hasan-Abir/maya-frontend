import CartCarousel from "@/components/CartItem/CartCarusal";
import Hero from "@/components/Hero/Hero";
import HeroFooter from "@/components/HeroFooter/HeroFooter";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <HeroFooter></HeroFooter>

      <CartCarousel></CartCarousel>
    </div>
  );
}
