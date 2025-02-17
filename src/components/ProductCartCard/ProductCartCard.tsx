import Image from "next/image";
import image1 from "../../../assents/ProductDetails/test-2.png";
const ProductCartCard = () => {
  return (
    <div className="flex justify-between  items-center shadow-md mt-2">
      <div className="w-20">
        <Image src={image1} alt="Cart Image"></Image>
      </div>
      <div className="flex flex-col gap-1 ">
        <h1>Zara miss Chase</h1>
        <p>Unite Price: $90.00</p>
        <div className="bg-[#004B47] text-white text-lg rounded-lg flex gap-6 justify-center items-center">
          <button>-</button>
          <p>0</p>
          <button>+</button>
        </div>
      </div>
      <p className="text-[#004B47]">$90.00</p>
    </div>
  );
};

export default ProductCartCard;
