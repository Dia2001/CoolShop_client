import React from "react";
import StatusProgress from "./StatusProgress";
import { IoNewspaperOutline as Ordered } from "react-icons/io5"
import {FaRegHandshake as Accept} from 'react-icons/fa'
import {RiTruckFill as Truck} from 'react-icons/ri'
import {IoMdCheckboxOutline as Delivered} from 'react-icons/io'
const HeaderInfoAndProgress = () => {
  //Status of order
  const progress = 2;

  return (
    <div className="flex gap-4 h-[170px]">
      <div className="basis-1/3 pl-4x pt-2x rounded-[50px] shadow-sm bg-white">
        <h5 className="font-semibold">Nguyễn Hữu Nhân</h5>
        <h6 className="pt-1x">Địa chỉ: một nơi nào đó thật xa</h6>
        <h6 className="pt-2x">Điện thoại: 098555444</h6>
      </div>
      <div className="basis-2/3 py-2x bg-white rounded-[50px] shadow-sm flex justify-center items-center gap-1">
        <StatusProgress
          status="Đặt hàng"
          time="12/03/2022"
          Icon={Ordered}
          enable={progress>=0?'text-ActiveColor bg-ActiveColor/10':false}
        />
        <div className={`w-[70px] h-[10px] ${progress>=1?'bg-ActiveColor': 'bg-Black25'}  rounded-full`}></div>
        <StatusProgress
          status="Đã xác nhận"
          time="12/03/2022"
          Icon={Accept}
          enable={progress>=1?'text-ActiveColor bg-ActiveColor/10':false}
        />
        <div className={`w-[70px] h-[10px] ${progress>=2?'bg-ActiveColor': 'bg-Black25'}  rounded-full`}></div>
        <StatusProgress
          status="Đang giao"
          time="14/03/2022"
          Icon={Truck}
          enable={progress>=2?'text-ActiveColor bg-ActiveColor/10':false}
        />
        <div className={`w-[70px] h-[10px] ${progress>=3?'bg-ActiveColor': 'bg-Black25'}  rounded-full`}></div>
        <StatusProgress
          status="Thành công"
          time="12/03/2022"
          Icon={Delivered}
          enable={progress>=3?'text-ActiveColor bg-ActiveColor/10':false}
        />
      </div>
    </div>
  );
};

export default HeaderInfoAndProgress;
