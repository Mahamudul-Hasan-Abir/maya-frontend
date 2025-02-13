import { TipImage } from "@/types";
import Image from "next/image";
import Fram from "../../../assents/Tips&Tricks/Frame 1618868353.png";
const TipsCard = ({ tips }: { tips: TipImage }) => {
  return (
    <>
      <div className="relative rounded-2xl aspect-square w-full">
        <Image
          src={tips?.url}
          alt="Tips"
          className="object-cover h-full w-full rounded-2xl"
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-40 bg-gray-400 rounded-2xl">
          <Image src={Fram} alt="play btn"></Image>
        </div>
      </div>
    </>
  );
};

export default TipsCard;
