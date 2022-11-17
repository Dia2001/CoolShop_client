import React, { useContext, useState } from "react";
import imgProduct from "../assets/product-o1.png";
import { GrClose as Close } from "react-icons/gr";
import { AppContext } from "../Providers/AppContext";
import { enPriceVnd } from "../utils";
import { Link } from "react-router-dom";
import config from "../config";

const NotificationCart = ({ setIsVisible }) => {
  const { carts } = useContext(AppContext)
  const [tmpClose, setTmpClose] = useState(false);
  let countItem=0;
  const hiddenItem=(index)=>{
    if(index>1){
      countItem++;
      return 'hidden';
    }
    else
      return '';
  }
  return (
    <div
      onMouseLeave={setIsVisible}
      className={` ${tmpClose && "hidden"
        } w-[250px] min-h-[255px] bg-white/90 mt-2x border border-BlackCool shadow-md z-30`}
    >
      <div className="absolute top-[-30px] left-0 w-[70%] h-[40px]"></div>
      <div className="flex justify-between m-1x items-center">
        <h5 className="text-DarkBlue">Giỏ hàng ({carts.length})</h5>
        <Close onClick={() => {
          setIsVisible()
          setTmpClose(!tmpClose)
        }
        } size={30} />
      </div>
      <div className="h-[24px] w-[95%] mx-auto border-b-2 border-BlackCool"></div>
      <div className="min-h-32">
        {Array.isArray(carts) && carts.length > 0 ? carts.map((item, index) => {
          return (
            <div className={`${hiddenItem(index)} flex m-2x gap-2`} key={index}>
              <img
                src={item.img}
                alt="Ảnh sản phẩm"
                className="w-[80px] h-[90px] object-cover"
              />
              <div className="grow min-w-[0px]">
                <Link to={config.routes.product + '/' + item.productId}>
                  <p className="m-1 font-semibold italic whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.name}
                  </p>
                </Link>
                <div className="p-1 border text-left">
                  <p>{enPriceVnd(item.price)}Đ</p>
                  <p>{item.description}</p>
                  <p>x{item.quantity}</p>
                </div>
              </div>
            </div>
          )
        }) :
          <div className="flex justify-center items-center text-xl h-24">
            Trống
          </div>}
      </div>
      <div className="flex justify-center font-semibold"><h6>{countItem>0&&'+'+countItem}</h6></div>
      <div className="h-[8px] w-[40%] mx-auto border-b border-BlackCool"></div>
      <div className="flex justify-center">
        <Link to={config.routes.cart}
          className="w-[80%] flex justify-center py-1x m-1x uppercase text-white bg-WarningColor hover:opacity-75 shadow-lg">
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default NotificationCart;
