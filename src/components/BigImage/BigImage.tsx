import Image from "next/image";
import bigImage from "../../../assents/BigImage/big-image.png";
const BigImage = () => {
  return (
    <div className="rounded-2xl">
      <Image
        className="w-full lg:h-[500px] md:h-[400px] h-[300px] md:p-0 p-6"
        src={bigImage}
        alt="Big Image of a woman"
      ></Image>
    </div>
  );
};

export default BigImage;
