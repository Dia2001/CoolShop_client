import React from "react";

const PriceAndQuality = () => {
  return (
    <div className="flex justify-between p-1x border items-center">
      <div>
        <div className="flex gap-4">
            <h5 className="line-through">600.000Đ</h5>
            <h6 className="p-1 h-fit w-fit rounded-md bg-LightBlue text-white">-30%</h6>
        </div>
        <h5>400.000Đ</h5>
      </div>
      <div>
        <h6>
          Tình trạng: <span className="font-bold">Mới</span>
        </h6>
        <br/>
        <h6>
          Số lượng: <span className="font-bold">Còn hàng</span>
        </h6>
      </div>
    </div>
  );
};

export default PriceAndQuality;
