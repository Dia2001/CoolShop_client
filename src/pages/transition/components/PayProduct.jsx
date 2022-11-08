import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowBackIos as RightArrow } from 'react-icons/md'
import { enPriceVnd } from '../../../utils'
import config from "../../../config";

const PayProduct = ({ isPay, checkoutInfo, listProduct, handleCheckout }) => {
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let total = listProduct.reduce((curr, item) => curr + item.price * item.amount, 0)
    total += checkoutInfo.priceShip
    setTotalPrice(total)
  }, [checkoutInfo, listProduct])

  return (
    <div className="w-[430px] min-h-[525px] text-center shadow-sm hover:shadow-md bg-white">
      <h5 className="font-bold text-LightBlue p-2">Sản phẩm thanh toán</h5>
      <div className="w-[380px] h-[320px] mx-auto overflow-y-auto m-2x">
        {listProduct.map((item, index) => (
          <div key={index} className="relative flex gap-2 border m-1 py-1">
            <img src={item.img} className="h-[90px] w-[90px] object-cover" alt={item.name} />
            <div className="max-w-[266px] text-left">
              <h6 className="font-bold">{item.name}</h6>
              <h6>{item.description}</h6>
              <h6 className="text-DarkBlue border w-fit px-1 border-DarkBlue block rounded-md">
                x{item.amount}
              </h6>
            </div>
            <h6 className="absolute right-2 bottom-2 tracking-wide">{item.price}</h6>
          </div>
        ))}
      </div>
      <div className="w-[380px] min-h-[60px] m-2 p-1 border border-Black75 flex justify-between">
        <div className="flex justify-between flex-col">
          <h6>5 sản phẩm</h6>
          <Link to={config.routes.cart} className="flex gap-1 text-WarningColor">
            <RightArrow size={20} />
            <h6>Quay lại giỏ hàng</h6>
          </Link>
        </div>
        <div className="flex justify-between flex-col">
          <div>
            <div className="flex justify-between m-1">
              <h6>Tạm tính:</h6>
              <h6>800.000Đ</h6>
            </div>
            <div className="flex justify-between m-1">
              <h6>Phí vận chuyển:</h6>
              <h6>miễn phí</h6>
            </div>
            <div className="flex justify-between m-1">
              <h6 className="font-bold">Tổng cộng:</h6>
              <h6>{enPriceVnd(totalPrice)}Đ</h6>
            </div>
          </div>
          <button onClick={handleCheckout} disabled={!isPay}
            className={`text-center uppercase text-white bg-LightBlue ${!isPay ? ' opacity-75 cursor-not-allowed' : ' hover:bg-DarkBlue'} w-full p-1x`}>
            <h6>Thanh toán</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayProduct;
