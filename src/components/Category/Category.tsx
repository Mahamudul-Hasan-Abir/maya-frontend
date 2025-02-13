import { TCategory } from "@/types";
import CategoryCard from "../CategoryCard/CategoryCard";

// interface CardListProps {
//   items: string[];
// }
// const colors = ["#DF883C", "#8DDF3B", "#3BDFBE", "#DF623B", "#3BBCDF"];
const Category = ({ categories }: { categories: TCategory[] }) => {
  return (
    <div className="px-6 md:px-28">
      <h1 className="text-2xl font-bold mt-8">Browse Category</h1>
      <div className="my-6 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 md:gap-10 gap-12">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
