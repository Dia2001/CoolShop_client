import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../assets/product-o1.png";
import {MdOutlineArrowBackIos as RightArrow} from 'react-icons/md'
const PayProduct = () => {
  const listProduct = [
    //test code
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
  ];
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
            <NavLink className="flex gap-1 text-WarningColor">
              <RightArrow size={20}/>
              <h6>Quay lại giỏ hàng</h6>
            </NavLink>
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
              <h6>800.000Đ</h6>
            </div>
          </div>
          <button className="text-center uppercase text-white bg-LightBlue hover:bg-DarkBlue w-full p-1x">
            <h6>Thanh toán</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayProduct;