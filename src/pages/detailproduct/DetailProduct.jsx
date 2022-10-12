import React from "react";
import ContentProduct from "./components/ContentProduct";
import DescriptionProduct from "./components/DescriptionProduct";
import HeaderDetailProduct from "./components/HeaderDetailProduct";
import ImageProduct from "./components/ImageProduct";
import ReviewProduct from "./components/ReviewProduct";

const DetailProduct = () => {
  return (
    <div className="bg-LightBlue/5">
      <div className="w-[1240px] mx-auto py-4x">
        <HeaderDetailProduct />
        <div className="flex gap-4 rounded-sm bg-white shadow-sm py-2x">
          <ImageProduct />
          <ContentProduct />
        </div>
        <DescriptionProduct />
        <ReviewProduct />
      </div>
    </div>
  );
};

export default DetailProduct;
