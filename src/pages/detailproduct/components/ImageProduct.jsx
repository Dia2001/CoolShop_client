import React from "react";
import imgProduct from "../../../assets/product-o1.png";
const ImageProduct = () => {
  return (
    <div className="w-[430px] px-2x">
     <div className="">
     <img
        src={imgProduct}
        alt="Sản phẩm chi tiết"
        className="w-[380px] h-[525px] mx-auto my-2x object-cover"
      />
     </div>
      <div className="flex justify-between py-3x ">
        <button className="py-2x px-1x font-bold text-WarningColor hover:text-white bg-white hover:bg-WarningColor rounded-sm border-2 border-WarningColor transition">
          <h6>Đánh giá sản phẩm</h6>
        </button>
        <button className="py-1x px-5x font-bold text-white bg-ErrorColor hover:opacity-75 rounded-sm">
          <h6>Báo lỗi</h6>
        </button>
      </div>
    </div>
  );
};

export default ImageProduct;
