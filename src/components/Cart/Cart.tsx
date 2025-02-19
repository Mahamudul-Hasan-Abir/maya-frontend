"use client";

import { useCart } from "@/Context/CartContext/CartContext";

const Cart = () => {
  const { isOpen, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 transform transition-transform z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button onClick={closeCart} className="text-gray-600 text-lg">
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-4 py-4">
          {/* Example Item */}
          <div className="flex items-center gap-4 border-b pb-2">
            <div className="w-16 h-16 bg-gray-200 rounded"></div>
            <div className="flex-1">
              <p className="font-semibold">Product Name</p>
              <p className="text-sm text-gray-500">$19.99</p>
            </div>
            <button className="text-red-500">Remove</button>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-auto">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
