import image1 from "../../../assents/Tips&Tricks/d2c57d2fc3305cd3d5a379d19aad1935.jpeg";
import image2 from "../../../assents/Tips&Tricks/dbc118040a4bd4f7a3f94e873668e124.jpeg";
import image3 from "../../../assents/Tips&Tricks/ec335179eb24de719a1266eb97740864.jpeg";
import image4 from "../../../assents/Tips&Tricks//efa35f4c10dad65ca88a136adb375c9a.jpeg";

import TipsCard from "../Tips&TricksCard/TipsCard";
import { TipImage } from "@/types";

const tipsImageArray: TipImage[] = [
  {
    id: 1,
    url: image2,
  },
  {
    id: 2,
    url: image1,
  },
  {
    id: 3,
    url: image3,
  },
  {
    id: 4,
    url: image4,
  },
];
const TipsTricks = () => {
  return (
    <div className="md:px-28 px-6  my-8">
      <h1 className="text-2xl bold">Tips & Tricks</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 my-6">
        {tipsImageArray.map((tips) => (
          <TipsCard key={tips.id} tips={tips}></TipsCard>
        ))}
      </div>
    </div>
  );
};

export default TipsTricks;
