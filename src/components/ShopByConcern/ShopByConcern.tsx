import { ShopImage } from "@/types";
import image1 from "../../../assents/face/image (1).png";
import image2 from "../../../assents/face/image.png";
import image3 from "../../../assents/face/image (3).png";
import image4 from "../../../assents/face/image (4).png";
import image5 from "../../../assents/face/image (5).png";
import image6 from "../../../assents/face/image (2).png";
import ShopCard from "../ShopCard/ShopCard";

const shopArray: ShopImage[] = [
  {
    id: 1,
    url: image1,
    message: "Aging",
  },
  {
    id: 2,
    url: image2,
    message: " Dullness",
  },
  {
    id: 3,
    url: image3,
    message: "Eye Care",
  },
  {
    id: 4,
    url: image4,
    message: "Shine",
  },
  {
    id: 5,
    url: image5,
    message: "Texture",
  },
  {
    id: 6,
    url: image6,
    message: "Congestion",
  },
];
const ShopByConcern = () => {
  return (
    <div className="md:px-28 px-6  my-8">
      <h1 className="text-2xl bold">Shop by Concern</h1>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-8 my-6">
        {shopArray.map((shop) => (
          <ShopCard key={shop.id} shop={shop}></ShopCard>
        ))}
      </div>
    </div>
  );
};

export default ShopByConcern;
