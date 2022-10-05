import React, { useState } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import imgProducto1 from "../assets/product-o1.png";
import { BsCartPlus } from "react-icons/bs";
const CardProductV2 = () => {
  const [isFavorite, setFavorite] = useState(true);
  const favoriteHandler = () => {
    setFavorite(!isFavorite);
  };
  return (
    <div className="relative min-w-[230px] h-[330px] shadow-sm hover:shadow-md border mx-1x">
      <h6 className="absolute bg-BlackCool text-white top-[-8px] left-[-4px] px-1x font-bold">
        Nổi bật
      </h6>
      {isFavorite ? (
        <MdOutlineFavoriteBorder
          size={30}
          color="red"
          className="absolute right-1 top-1 cursor-pointer"
          onClick={favoriteHandler}
        />
      ) : (
        <MdOutlineFavorite
          size={30}
          color="red"
          className="absolute right-1 top-1 cursor-pointer"
          onClick={favoriteHandler}
        />
      )}
      <img className="w-full h-[280px] object-cover" src={imgProducto1} alt="Ảnh mẫu" />
      <button className="absolute left-0 bottom-[50px] bg-BlackCool/75 text-white text-center py-1x w-full hover:bg-BlackCool">
        <div className="flex gap-1 justify-center items-center">
        <BsCartPlus size={30} />
        <h6>Thêm vào giỏ hàng</h6>
        </div>
      </button>
      <div className="h-[50px] w-full pl-1x py-1x">
        <p className="text-Black75 whitespace-nowrap text-ellipsis overflow-hidden">Áo vest 6VBB03GHS + Quần tây phong cách sang trọng</p>
        <div className="flex gap-1">
            <p className="italic">1.290.000Đ</p>
            <p className="italic line-through">2.000.000Đ</p>
        </div>
      </div>
    </div>
  );
};

export default CardProductV2;
