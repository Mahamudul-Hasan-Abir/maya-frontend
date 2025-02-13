import Image from "next/image";
import bigImage from "../../../assents/BigImage/big-image.png";
const BigImage = () => {
  return (
    <div className="lg:h-[500px] md:h-[400px] h-[300px]">
      <Image
        className="w-full h-full object-cover"
        src={bigImage}
        alt="Big Image of a woman"
        objectFit="contain"
      ></Image>
    </div>
  );
};

export default BigImage;
