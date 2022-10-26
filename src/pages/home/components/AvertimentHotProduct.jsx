import React from "react";
import imgBannerMen from "../../../assets/banner-men.jpg";
import imgBannerWomen from "../../../assets/banner-women.jpg"
import imgBannerOldMen from "../../../assets/banner-oldman.jpg";
const AvertimentHotProduct = () => {
  return (
    <div className="bg-Black5 py-3x">
      <div className="mx-auto max-w-[1240px] ">
        <div className="flex gap-4 py-2x">
          <div className="flex-1 relative overflow-hidden cursor-pointer">
            <img
              src={imgBannerMen}
              className="h-[350px] w-full object-cover object-top hover:scale-105 transition"
              alt="ảnh vest nam"
            />
            <div className="absolute flex justify-center items-center bottom-0 left-0 w-full h-[53px] bg-LightBlue">
                <h5 className="underline underline-offset-4 font-bold text-white">  Áo vest nam lịch lãm!  </h5>
            </div>
          </div>
          <div className="flex-1 relative overflow-hidden cursor-pointer">
            <img
              src={imgBannerWomen }
              className="h-[350px] w-full object-cover object-top  hover:scale-105 transition"
              alt="ảnh vest nam"
            />
            <div className="absolute flex justify-center items-center bottom-0 left-0 w-full h-[53px] bg-WarningColor">
            <h5 className="underline underline-offset-4 font-bold text-white">  Thời trang năng động cho chị em! </h5>
            
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden cursor-pointer">
          <img
            src={imgBannerOldMen}
            className="h-[350px] w-full object-cover object-top  hover:scale-105 transition"
            alt="ảnh trang phục cho quý ông"
          />
          <div className="absolute flex justify-center items-center bottom-0 left-0 w-full h-[80px] bg-BlackCool">
          <h4 className="underline underline-offset-8 font-bold text-white">Khám phá tủ đồ cho quý ông! </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvertimentHotProduct;
