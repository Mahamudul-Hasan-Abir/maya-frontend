"use client";

import test from "../../../assents/ProductDetails/test.png";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { LittleImageData, TSingleProductResponse } from "@/types";
import { useState } from "react";
import ProductCartCard from "../ProductCartCard/ProductCartCard";
import { useCart } from "@/Context/CartContext/CartContext";
const ProductDetailsCard = ({
  productDetails,
}: {
  productDetails: TSingleProductResponse;
}) => {
  const [quantity, setQuantity] = useState(0);
  const { toggleCart } = useCart();
  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log("Increase Clicked");
  };
  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };
  return (
    <div className=" w-full">
      <div className="drawer drawer-end relative">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}

            <div>
              <p className="text-2xl font-bold border-b-2 py-2">
                Shopping cart
              </p>
            </div>
            <ProductCartCard></ProductCartCard>

            <div className="absolute bottom-2 flex justify-between bg-[#004B47] text-white py-3 w-full pr-10">
              <p className="p-2">Proceed To Checkout</p>
              <p className="p-2">|</p>
              <p className="p-2">$90.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* Upper Part */}
      <div className=" w-full md:flex md:px-20">
        {/* Image Section */}
        <div className=" md:w-[40%] mx-6 mt-5 flex flex-col justify-center items-center gap-3">
          {/* Big image */}
          <div className=" rounded-2xl md:h-[512px] h-[380px] w-full">
            <Image
              src={productDetails?.image?.original || test}
              alt="This is Big Image"
              className="w-full h-full object-cover rounded-2xl"
              width={1600}
              height={900}
            ></Image>
          </div>
          {/* Small image div */}

          <div className="grid grid-cols-4 gap-4  w-full">
            {/* little image  1  */}
            {productDetails?.gallery?.map((IO: LittleImageData) => (
              <div
                key={IO.id}
                className=" h-[96px] md:h-[116px] size-full rounded-xl"
              >
                <Image
                  src={IO.thumbnail}
                  alt="This is Big Image"
                  className="w-full h-full object-cover rounded-lg"
                  width={1600}
                  height={900}
                ></Image>
              </div>
            ))}
          </div>
        </div>
        {/* text Section */}
        <div className=" w-full md:w-[60%] mt-5 md:m-5 m-0 flex flex-col gap-3 px-6">
          <h1 className="text-4xl font-semibold">{productDetails.name}</h1>
          <p>
            Secret tone-up sun cream is your ultimate skincare solution for
            achieving a vibrant and glowing complexion. With its SPF50+ PA+++
            formula, this sun cream provides superior protection.
          </p>
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-400" />
            <p className="text-xl">4.7</p>
            <p className="text-lg text-[#A4A7AE]">(643)</p>
          </div>
          <div className="flex gap-3 items-center">
            <h1 className="text-[#2B6A66] text-3xl">{productDetails.price}</h1>
            <p className="text-lg text-[#A4A7AE] line-through ">
              {productDetails.max_price}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 text-2xl px-6 rounded-xl py-1 font-bold border border-[#004B47]">
              <button onClick={handleDecrease}>-</button>
              <p>{quantity}</p>
              <button onClick={handleIncrease}>+</button>
            </div>

            <label
              className="drawer-button px-6 py-3 bg-[#004B47] rounded-xl text-white"
              onClick={toggleCart}
            >
              Add to Cart
            </label>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-semibold">
                  Product Details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between">
                    <p className="text-sm font-semibold">Description</p>
                    <p className="text-sm text-[#414651]">
                      {productDetails.description}
                    </p>
                  </div>
                  <div className="flex md:gap-44">
                    <p className="text-sm font-semibold">Size</p>
                    <p className="text-sm text-[#414651]">20 ml</p>
                  </div>
                  <div className="flex md:gap-44">
                    <p className="text-sm font-semibold">Sku</p>
                    <p className="text-sm text-[#414651]">
                      {productDetails.sku}
                    </p>
                  </div>
                  <div className="flex md:gap-44">
                    <p className="text-sm font-semibold">Categories</p>
                    <p className="text-sm text-[#414651]">skin</p>
                  </div>
                  <div className="flex md:gap-44">
                    <p className="text-sm font-semibold">Type</p>
                    <p className="text-sm text-[#414651]">
                      {productDetails.type?.name}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* Accordian 2 */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-semibold">
                  How To Use
                </AccordionTrigger>
                <AccordionContent>
                  <p>Answer</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* Accordian 3 */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-semibold">
                  Ingredients
                </AccordionTrigger>
                <AccordionContent>
                  <p>Answer</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="w-full  mt-10 text-center">
        <h1 className="text-5xl font-semibold">Frequently asked questions</h1>
        <p className="text-[#414651] mt-2 mx-2">
          We may or may not be from the future. Here are the questions you were
          just about to ask us.
        </p>

        <div className="md:w-[60%] md:mx-auto mx-6">
          {/* FAQ1 */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                How does the free trial work?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We may or may not be from the future. Here are the questions
                  you were just about to ask us.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* FAQ2 */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                What happens when my trial ends?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We may or may not be from the future. Here are the questions
                  you were just about to ask us.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* FAQ3 */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                When do i get billed?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We may or may not be from the future. Here are the questions
                  you were just about to ask us.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* FAQ4 */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Can i cancel my subscription anytime
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We may or may not be from the future. Here are the questions
                  you were just about to ask us.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* FAQ5 */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                What happens if i lose my account details?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  We may or may not be from the future. Here are the questions
                  you were just about to ask us.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
