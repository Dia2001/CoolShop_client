import React, { useState } from "react";
import {
  MdKeyboardArrowDown as ArrowD,
  MdKeyboardArrowUp as ArrowU,
} from "react-icons/md";
const OptionsProduct = () => {
  const [isToggle, setIsToggle] = useState(false);
  const colors = ["#f9ce69", "#e85353", "#a7d129", "#000000", "#2C3333"];
  const materials = [
    "Cotton",
    "Colmax",
    "Cotton",
    "Pique",
  ];
  const size = ["XS", "XS", "XS", "XS", "XS", "XS", "XS"];
  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="flex p-2x border my-2x">
      <div className="flex-1">
        <h6>Màu sắc:</h6>
        <div className="grid grid-cols-4 grid-row-3 gap-2 w-[40%] ">
          {colors.map((item, index) => (
            //khong bk truyen item vao classnam ra sao
            <button
              key={index}
              style={{ background: item }}
              className={`rounded-full h-[30px] w-[30px] focus:border focus:border-DarkBlue hover:opacity-75`}
            >
              {/* Nen truyen ma mau vao day va khong de hien thi */}
            </button>
          ))}
        </div>
        <h6>Chất liệu:</h6>
        <div className="flex w-[50%] m-1x flex-wrap gap-1">
          {materials.map((item, index) => (
            <button className="bg-Black10 hover:bg-Black25 px-1x py-1 rounded-md focus:bg-Black75 focus:text-white italic">
              <p>{item}</p>
            </button>
          ))}
        </div>
        <h6>Size:</h6>
        <div className="flex flex-wrap w-[50%] gap-1 m-1x">
          {size.map((item,index)=>(
            <button className="h-[30px] w-[30px] text-Black75 rounded-full border border-Black75 hover:bg-Black10 focus:bg-Black75 focus:text-white">
                {item}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`relative flex-1 w-full min-h-[120px] ${
          isToggle && "min-h-[40px] h-[40px]"
        } rounded-md border border-Black75 m-1 overflow-y-hidden transition-all duration-150 ease-in-out`}
      >
        <div className="flex justify-center gap-4 items-center">
          <h6 className="m-2 font-bold">Mô tả sản phẩm</h6>
          {isToggle ? (
            <ArrowU size={30} onClick={toggleHandler} />
          ) : (
            <ArrowD size={30} onClick={toggleHandler} />
          )}{" "}
        </div>
        <div className="min-h-[230px] p-1x"></div>
      </div>
    </div>
  );
};

export default OptionsProduct;
