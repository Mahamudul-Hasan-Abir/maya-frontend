import { TProduct } from "@/types";
import CarusalCard from "../CarusalCard/CarusalCard";

const Carusal = ({ products }: { products: TProduct[] }) => {
  if (products) {
    console.log(products);
  }
  return (
    <div className="relative flex items-center justify-center w-full dark:text-gray-900">
      <button
        aria-label="Slide back"
        type="button"
        className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
      >
        <svg
          width="8"
          height="14"
          fill="none"
          viewBox="0 0 8 14"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-5 md:mx-28 overflow-auto lg:gap-8 ">
        {products?.map((product) => (
          <CarusalCard key={product.id} product={product}></CarusalCard>
        ))}
      </div>
      <button
        aria-label="Slide forward"
        id="next"
        className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Carusal;
