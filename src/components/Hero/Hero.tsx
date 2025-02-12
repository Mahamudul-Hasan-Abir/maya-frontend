import Image from "next/image";
import HeroImage from "../../../assents/Hero/hero.png";
import butttonLogo from "../../../assents/Buttons/shopping-cart.png";
const Hero = () => {
  return (
    <div className="md:h-[472px] relative  bg-[#003532] md:flex items-center  overflow-hidden">
      <div className="flex w-70 md:w-[50%] flex-col gap-[24px] md:ps-[50px] lg:ps-[90px] p-10 ">
        <h1 className="text-2xl font-bold text-white">
          Get <span className="text-[#FCD34D]">Free Delivery</span> on shopping
          $355
        </h1>
        <p className="text-white">
          Grab your favorites, hit the checkout, and we’ll take care of the
          delivery. Shop <br /> now and make the most of your purchase!
        </p>
        <button className="bg-[#FCD34D] w-[175px] h-[44px] text-base flex justify-center items-center rounded-[10px] gap-1">
          <p>Start Shopping</p>
          <Image
            src={butttonLogo}
            alt="button Cart Logo"
            className="w-[19px] h-[14px]"
          ></Image>
        </button>
      </div>
      <Image
        className="md:w-[500px] lg:w-[640px] h-[600px] hidden md:block rotate-[-28deg] absolute right-[-45px] bottom-[-190px]"
        src={HeroImage}
        alt="Maya All Natural Image"
      ></Image>
    </div>
  );
};

export default Hero;
