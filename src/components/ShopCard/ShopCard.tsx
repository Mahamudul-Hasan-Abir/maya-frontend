import { ShopImage } from "@/types";
import Image from "next/image";

const ShopCard = ({ shop }: { shop: ShopImage }) => {
  return (
    <div className="relative h-full rounded-2xl aspect-square w-full">
      <Image
        src={shop?.url}
        alt="Tips"
        className="object-cover  h-full w-full rounded-2xl"
      ></Image>
      <p className="text-#2D2D2D text-lg font-semibold">{shop.message}</p>
    </div>
  );
};

export default ShopCard;
