/* eslint-disable @next/next/no-img-element */
import { TProduct } from "@/types";

import Image from "next/image";

const CarusalCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="relative flex-shrink-0 w-full sm:w-auto">
      <div className="bg-[#F4F4F4] rounded-2xl h-[307px] flex justify-center items-center">
        <Image
          className="rounded-2xl h-full  w-full  object-center dark:bg-gray-500  aspect-square"
          src={product?.image?.original}
          alt="Image 1"
          width={220}
          height={220}
        />
      </div>
      <div className="mt-2">
        <h6 className="text-base font-semibold">{product?.name}</h6>
        <span className="flex gap-2 items-end">
          <p className="font-bold text-lg text-[#004B47] ">
            ${product?.min_price}
          </p>
          <p className="font-bold line-through text-sm mb-1 text-[#535862]">
            ${product?.min_price}
          </p>
        </span>
      </div>
    </div>
  );
};

export default CarusalCard;
