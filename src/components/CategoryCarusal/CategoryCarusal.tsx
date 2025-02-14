import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TCategory } from "@/types";
import Image from "next/image";

const CategoryCarusal = ({ categories }: { categories: TCategory[] }) => {
  return (
    // 33% of the carousel width.
    <div className="mx-5 md:mx-28 my-10">
      <h1 className="text-2xl font-bold mt-8">Browse Category</h1>
      <Carousel className="mt-6">
        <CarouselContent>
          {categories?.map((category) => (
            <CarouselItem
              key={category.id}
              className="xl:basis-1/5 md:basis-1/4 basis-1/2"
            >
              <div className="w-full ">
                <div className=" flex justify-center">
                  <Image
                    src={category?.image[0]?.original}
                    alt={category?.name}
                    height={220}
                    width={220}
                    className="rounded-full"
                  ></Image>
                </div>
                <p className="  text-center text-[#2B6A66] text-lg font-semibold">
                  {category.name}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarusal;
