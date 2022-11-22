import React, { useState } from "react";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import imgProducto1 from "../assets/product-o1.png";
import { BsCartPlus } from "react-icons/bs";
import { enPriceVnd } from "../utils";
import config from "../config";
import { Link } from "react-router-dom";

const CardProductV2 = ({ product }) => {
  const [isFavorite, setFavorite] = useState(true);
  const favoriteHandler = () => {
    setFavorite(!isFavorite);
  };
  if (product)
    return (
      <Link to={config.routes.product + "/" + product.slug} >
        <div className="relative w-[230px] h-[330px] shadow-sm hover:shadow-md border mx-1x">
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
          <img className="w-full h-[280px] object-cover" src={config.urlImageProduct + product.image} alt="Ảnh mẫu" />
          <button className="absolute left-0 bottom-[50px] bg-BlackCool/75 text-white text-center py-1x w-full hover:bg-BlackCool">
            <div className="flex gap-1 justify-center items-center">
              <BsCartPlus size={30} />
              <h6>Thêm vào giỏ hàng</h6>
            </div>
          </button>
          <div className="h-[50px] w-full pl-1x py-1x">
            <p className="text-Black75 whitespace-nowrap text-ellipsis overflow-hidden">
              {product.productName}
            </p>
            <div className="flex gap-1">
              <p className="italic">{enPriceVnd(product.price)}Đ</p>
              <p className="italic line-through">{enPriceVnd(product.price / 100 * 30 + product.price)}Đ</p>
            </div>
          </div>
        </div>
      </Link>
    );
  return ''
};

export default CardProductV2;
