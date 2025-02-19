import { Checkbox } from "@/components/ui/checkbox";
import { BsFilterLeft } from "react-icons/bs";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProductCard from "@/components/ProductCard/ProductCard";
import { TProduct } from "@/types";

const Products = async () => {
  const ProductRes = await fetch("https://api-maya.nusratech.com/products", {
    cache: "force-cache",
  });
  const jsonRes = await ProductRes.json();
  const products = jsonRes?.data;
  return (
    <div className=" w-full flex lg:px-10 ">
      {/* Filter Nav */}

      {/* Desktop Version */}
      <div className=" w-[30%] hidden lg:block ">
        <div className="lg:flex gap-3 hidden mt-10">
          <p>Home</p>
          <p>/</p>
          <p className="text-[#004B47]">Search</p>
        </div>
        <div className="flex justify-between mt-10 items-center pb-10 border-b-[1px] pr-5">
          <h1 className="text-2xl font-bold text-[#004B47]">Filters</h1>
          <p className="mt-2 text-[#91949b]">Clear All</p>
        </div>
        <div className="mt-10">
          <h1 className="text-xl text-[#004B47] mb-2">Category</h1>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Hair Care</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Skin Care</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Body Care</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Essential Oil</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Shampoo</p>
          </div>
          <div className="mt-6 border-b-[1px]"></div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl text-[#004B47] mb-2">Brands</h1>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Fusion</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Vintgae</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Masteriod</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Hoppister</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Klien Shoes</p>
          </div>
          <div className="mt-6 border-b-[1px]"></div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl text-[#004B47] mb-2">Price</h1>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">User $50</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">$50 to $100</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">$100 to $150</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">$150 to $200</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">$200 to $300</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">$300 to $500</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">$500 to $1000</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Over $1000</p>
          </div>
          <div className="mt-6 border-b-[1px]"></div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl text-[#004B47] mb-2">Size</h1>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Small</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Medium</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Large</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">7</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">8</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">9</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">10</p>
          </div>

          <div className="mt-6 border-b-[1px]"></div>
        </div>
        <div className="mt-10">
          <h1 className="text-xl text-[#004B47] mb-2">Size</h1>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Small</p>
          </div>

          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Red</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Blue</p>
          </div>
          <div className="flex gap-3 my-3 items-center">
            <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
            <p className="text-[#004B47]">Yellow</p>
          </div>

          <div className="mt-6 border-b-[1px]"></div>
        </div>
      </div>

      {/* Mobile Version */}

      {/* Product Section */}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className=" w-full ">
            {/* This is Filter Nav */}
            <div className="w-full h-15 flex justify-between  items-center md:px-10 px-5 lg:px-20 mt-10">
              <h1 className="text-2xl font-bold text-[#004B47] hidden lg:block">
                Shop
              </h1>
              <label
                htmlFor="my-drawer"
                className="border-[1px] lg:hidden flex justify-between gap-5 items-center h-12  p-2 rounded-md  text-[#004B47]"
              >
                <BsFilterLeft className="size-7 font-bold" />
                <p className="text-lg ">Filters</p>
              </label>

              <div>
                <Accordion type="single" collapsible className="relative">
                  <AccordionItem value="item-1 relative">
                    <AccordionTrigger className="text-base font-semibold border  px-2  rounded-md text-[#004B47]">
                      Sorting Options
                    </AccordionTrigger>
                    <AccordionContent className=" bg-white w-[160px] bottom-[-155px] shadow-sm border-[1px] z-10 rounded-md p-2 absolute flex flex-col gap-2">
                      <p>Sorting Option</p>
                      <p>Oldest</p>
                      <p>Popularity</p>
                      <p>Price: Low to High</p>
                      <p>Price: High to low</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Products Card will render here */}
            <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product: TProduct) => (
                <ProductCard key={product.id} product={product}></ProductCard>
              ))}
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="lg:flex gap-3 hidden mt-10">
              <p>Home</p>
              <p>/</p>
              <p className="text-[#004B47]">Search</p>
            </div>
            <div className="flex justify-between mt-10 items-center pb-10 border-b-[1px] pr-5">
              <h1 className="text-2xl font-bold text-[#004B47]">Filters</h1>
              <p className="mt-2 text-[#91949b]">Clear All</p>
            </div>
            <div className="mt-10">
              <h1 className="text-xl text-[#004B47] mb-2">Category</h1>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Hair Care</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Skin Care</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Body Care</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Essential Oil</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Shampoo</p>
              </div>
              <div className="mt-6 border-b-[1px]"></div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl text-[#004B47] mb-2">Brands</h1>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Fusion</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Vintgae</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Masteriod</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Hoppister</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Klien Shoes</p>
              </div>
              <div className="mt-6 border-b-[1px]"></div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl text-[#004B47] mb-2">Price</h1>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">User $50</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">$50 to $100</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">$100 to $150</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">$150 to $200</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">$200 to $300</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">$300 to $500</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">$500 to $1000</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Over $1000</p>
              </div>
              <div className="mt-6 border-b-[1px]"></div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl text-[#004B47] mb-2">Size</h1>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Small</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Medium</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Large</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">7</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">8</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">9</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">10</p>
              </div>

              <div className="mt-6 border-b-[1px]"></div>
            </div>
            <div className="mt-10">
              <h1 className="text-xl text-[#004B47] mb-2">Size</h1>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Small</p>
              </div>

              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Red</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Blue</p>
              </div>
              <div className="flex gap-3 my-3 items-center">
                <Checkbox className="border-[#E9EAEB] size-5"></Checkbox>
                <p className="text-[#004B47]">Yellow</p>
              </div>

              <div className="mt-6 border-b-[1px]"></div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
