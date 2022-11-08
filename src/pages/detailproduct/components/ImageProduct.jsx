import React, { useContext, useEffect, useState } from "react";
import config from "../../../config";
import { ProductDetailContext } from "../ProductDetailContext";
import imgTest from "../../../assets/product-o1.png";
import {
  MdOutlineArrowBackIosNew as ArrowLeft,
  MdOutlineArrowForwardIos as ArrowRight,
} from "react-icons/md";

const ImageProduct = ({ imagesProduct }) => {
  const { product } = useContext(ProductDetailContext);
  const [indexChosen, setIndexChosen] = useState(0);
  const [imgChosen, setImgChosen] = useState(imagesProduct.length > 0 ? imagesProduct[0] : '');

  const switchImg = (index) => {
    setIndexChosen(index);
  };

  const switchLeft = () => {
    if (indexChosen === 0) {
      setIndexChosen(imagesProduct.length - 1);
    } else {
      setIndexChosen(indexChosen - 1);
    }
  };

  const switchRight = () => {
    if (indexChosen === imagesProduct.length - 1) {
      setIndexChosen(0);
    } else {
      setIndexChosen(indexChosen + 1);
    }
  };

  useEffect(() => {
    setImgChosen(imagesProduct[indexChosen])
  }, [indexChosen, imagesProduct])

  return (
    <div className="w-[430px] px-2x">
      <div className="relative">
        <div className="absolute top-[50%] w-full flex justify-between">
          <div className="text-white cursor-pointer p-1x rounded-full hover:bg-white/50 transition hover:translate-x-[-4px] backdrop-blur-sm bg-white/30 ">
            <ArrowLeft onClick={switchLeft} size={30} />
          </div>
          <div className="text-white cursor-pointer p-1x rounded-full hover:bg-white/50 transition hover:translate-x-1 backdrop-blur-sm bg-white/30 ">
            <ArrowRight onClick={switchRight} size={30} />
          </div>
        </div>
        <img
          // src={product ? config.urlImageProduct + product.image : ''} khi có api
          src={imgChosen}
          alt="Sản phẩm chi tiết"
          className="w-[380px] h-[525px] mx-auto my-2x object-cover"
        />
      </div>
      <div className="overflow-x-auto my-2x flex justify-center gap-1">
        {imagesProduct.map((item, index) => (
          <img
            onClick={() => switchImg(index)}
            key={index}
            src={item}
            alt="Ảnh khác"
            className={`${indexChosen === index && "border-2 border-DarkBlue"
              } w-[80px] h-[86px] cursor-pointer object-cover object-center`}
          />
        ))}
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
