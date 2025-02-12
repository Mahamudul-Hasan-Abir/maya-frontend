"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const sampleCartItems: CartItem[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "/images/headphones.jpg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    image: "/images/smartwatch.jpg",
  },
  { id: 3, title: "Gaming Mouse", price: 49.99, image: "/images/mouse.jpg" },
  {
    id: 4,
    title: "Mechanical Keyboard",
    price: 129.99,
    image: "/images/keyboard.jpg",
  },
  {
    id: 5,
    title: "Portable Speaker",
    price: 89.99,
    image: "/images/speaker.jpg",
  },
  { id: 6, title: "Laptop Stand", price: 39.99, image: "/images/stand.jpg" },
];

const CartCarousel = () => {
  const [cartItems] = useState<CartItem[]>(sampleCartItems);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-6 text-white">
        Your Cart
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Default to 1 card per view
        breakpoints={{
          640: { slidesPerView: 2 }, // 2 cards on small screens
          768: { slidesPerView: 3 }, // 3 cards on medium screens
          1024: { slidesPerView: 4 }, // 4 cards on large screens
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
      >
        {cartItems.map((item) => (
          <SwiperSlide key={item.id} className="p-4">
            <div className="bg-gray-800 rounded-lg p-4 text-white shadow-lg flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-yellow-400 font-bold">
                ${item.price.toFixed(2)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CartCarousel;
