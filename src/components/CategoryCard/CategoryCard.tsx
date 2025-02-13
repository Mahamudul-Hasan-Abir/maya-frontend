import { TCategory } from "@/types";
import Image from "next/image";

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <div className="w-full ">
      <div className=" flex justify-center">
        <Image
          src={category?.image[0].original}
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
  );
};

export default CategoryCard;

/* colors
#DF883C
#8DDF3B
#3BDFBE
#DF623B
#3BBCDF

*/
