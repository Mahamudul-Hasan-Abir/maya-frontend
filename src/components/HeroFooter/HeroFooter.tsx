import Image from "next/image";
import heroFooter from "../../../assents/Hero/heroFooter.png";
const HeroFooter = () => {
  return (
    <div className="w-full bg-[#F7F6F4] flex  justify-center items-center h-[50px] md:h-[80px]">
      <div className="md:h-[60px] h-[30px] ">
        <Image
          className="w-full h-full object-center "
          src={heroFooter}
          alt="The Honest Standard and some logo"
        ></Image>
      </div>
    </div>
  );
};

export default HeroFooter;
