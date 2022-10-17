import React, { useState } from "react";
import imgProduct from "../assets/product-o1.png";
import { GrClose as Close } from "react-icons/gr";
const NotificationCart = () => {
  const [tmpClose, setTmpClose] = useState(false);
  return (
    <div
      className={`absolute ${
        tmpClose && "hidden"
      } block w-[250px] min-h-[255px] bg-white/90 left-0 bottom-[-280px] border border-BlackCool shadow-md z-30`}
    >
    <div className="absolute top-[-30px] left-0 w-[70%] h-[40px]"></div>
      <div className="flex justify-between m-1x items-center">
        <h5 className="text-DarkBlue">Giỏ hàng (1)</h5>
        <Close onClick={() => setTmpClose(!tmpClose)} size={30} />
      </div>
      <div className="h-[24px] w-[95%] mx-auto border-b-2 border-BlackCool"></div>
      <div className="flex m-2x gap-2">
        <img
          src={imgProduct}
          alt="Ảnh sản phẩm"
          className="w-[80px] h-[90px] object-cover"
        />
        <div className="grow min-w-[0px]">
          <p className="m-1 font-semibold italic whitespace-nowrap overflow-hidden text-ellipsis">
            Quần jeans nam ống siêu tốt co giãn
          </p>
          <div className="p-1 border text-left">
            <p>400.000Đ</p>
            <p>XS, Xanh</p>
            <p>x2</p>
          </div>
        </div>
      </div>
      <div className="h-[8px] w-[40%] mx-auto border-b border-BlackCool"></div>
     <div className="flex justify-center">
     <button className="w-[80%] py-1x m-1x uppercase text-white bg-WarningColor hover:opacity-75 shadow-lg">
        thanh toán
      </button>
     </div>
    </div>
  );
};

export default NotificationCart;
