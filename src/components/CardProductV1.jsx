import React, { useState } from "react";
import imgProducto1 from "../assets/product-o1.png";
import imgProducto2 from "../assets/product-o2.png";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import {BsCartPlus,BsCurrencyDollar as Dollar} from 'react-icons/bs';
const CardProductV1 = () => {
  const [imgRepresent, setImgRepresent] = useState(false);
  const [isFavorite, setFavorite] = useState(true);
  const favoriteHandler = () => {
    setFavorite(!isFavorite);
  };
  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setImgRepresent(!imgRepresent)}
      onMouseLeave={() => setImgRepresent(!imgRepresent)}
    >
      <div className="absolute  left-1x w-full flex justify-between">
        {isFavorite ? (
          <MdOutlineFavoriteBorder
            size={30}
            color="red"
            className="cursor-pointer"
            onClick={favoriteHandler}
          />
        ) : (
          <MdOutlineFavorite 
          size={30}
          color="red"
          className="cursor-pointer"
          onClick={favoriteHandler} />
        )}
        <p className="bg-ErrorColor text-white rounded-sm self-start cursor-pointer">-20%</p>
      </div>
      <img
        src={imgRepresent ? imgProducto1 : imgProducto2}
        className="object-cover"
        alt="ảnh sản phẩm"
      />
      <div className="absolute bottom-[30px] w-full flex justify-between">
        <h6 className="font-bold px-2x py-1 bg-BlackCool/75 text-white">400.000đ</h6>
        <div className="flex gap-1 self-start">
            <div className="rounded-full p-1x bg-BlackCool/75 hover:bg-BlackCool active:bg-ActiveColor/75"><BsCartPlus size={15} color="white"/></div>
            <div className="rounded-full p-1x bg-BlackCool/75 hover:bg-BlackCool active:bg-ActiveColor/75"><Dollar size={15} color="white"/></div>
        </div>
      </div>
      {/* two that tag div must be same value about bottom and height is corresponding */}
      <div className="bg-white w-full h-[30px] pl-1x">
      <p className=" whitespace-nowrap text-ellipsis overflow-hidden p-1x">Quần Jean Nam Ống Suông Co Giãn Thoáng Mát</p>
      </div>
    </div>
  );
};

export default CardProductV1;
