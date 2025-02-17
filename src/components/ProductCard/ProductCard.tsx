"use client";
import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";

const ProductCard = ({ product }: { product: TProduct }) => {
  // const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   e.stopPropagation();
  //   router.push(`/allproducts/${}`)
  // };

  return (
    <Link
      href={`/allproducts/${product.id}`}
      className="relative flex-shrink-0 w-full sm:w-auto"
    >
      <div className="bg-[#F4F4F4] rounded-2xl h-[307px] flex justify-center items-center">
        <Image
          className="rounded-2xl h-full w-full object-fill dark:bg-gray-500 "
          src={product?.image?.original}
          alt="Image 1"
          sizes="(max-width: 768px) 100vw"
          width={1600}
          height={900}
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
    </Link>
  );
};

export default ProductCard;
