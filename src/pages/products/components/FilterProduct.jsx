import React, { useState } from "react";
import {
  MdKeyboardArrowDown as ArrowD,
  MdKeyboardArrowUp as ArrowU,
} from "react-icons/md";
const FilterProduct = () => {
  const yourChoices = ["vàng", "Coolmax", "XS", "vàng", "Coolmax", "XS"];
  const colors = ["#f9ce69", "#e85353", "#a7d129", "#000000", "#4741A6", "#9cbbfc", "#e7f6f2"];
  const materials = ["Cotton", "Colmax", "Cotton", "Pique", "Pique", "Pique", "Cotton", "Jeans"];
  const size = ["XS", "XS", "XS", "XS", "XS", "XS", "XS"]
  const rangePrices = ["Nhỏ hơn 100.000đ", "Từ 100.000đ-200.000đ", "Từ 200.000đ-350.000đ", "Từ 350.000đ-500.000đ", "Từ 500.000đ-700.000đ", "Lơn hơn 700.000đ"];
  //no clear code, can you find another better solution?
  //useState toggle các option lọc
  const [isToggle1, SetIsToggle1] = useState(false);
  const [isToggle2, SetIsToggle2] = useState(false);
  const [isToggle3, SetIsToggle3] = useState(false);
  const [isToggle4, SetIsToggle4] = useState(false);
  const toggleHandler1 = () => {
    SetIsToggle1(!isToggle1);
  };
  const toggleHandler2 = () => {
    SetIsToggle2(!isToggle2);
  };
  const toggleHandler3 = () => {
    SetIsToggle3(!isToggle3);
  };
  const toggleHandler4 = () => {
    SetIsToggle4(!isToggle4);
  };
  return (
    <div className=" col-span-2">
      <div className="relative w-full min-h-[110px] rounded-md border border-Black75 m-1 overflow-y-hidden">
        <h6 className="font-bold">Bạn chọn</h6>
        <div className="flex w-[90%] flex-wrap gap-2 m-1x min-h-[60px]">
          {yourChoices.map((item, index) => (
            <button key={index} className="border border-DarkBlue rounded-md py-1 px-2">
              <p>{item}</p>
            </button>
          ))}
        </div>
        <div className="p-1 text-right">
          <button className="text-white italic bg-Black50 rounded-full hover:bg-Black75 active:bg-BlackCool p-1">
            <p>Hủy chọn</p>
          </button>
        </div>
      </div>
      <div
        className={`relative w-full min-h-[120px] ${isToggle1 && "min-h-[40px] h-[40px]"
          } rounded-md border border-Black75 m-1 overflow-y-hidden transition-all duration-150 ease-in-out`}
      >
        <div className="flex justify-between">
          <h6 className="m-2">màu sắc</h6>
          {isToggle1 ? (
            <ArrowU size={30} onClick={toggleHandler1} />
          ) : (
            <ArrowD size={30} onClick={toggleHandler1} />
          )}{" "}
        </div>
        <div className="h-full w-[70%] m-1x grid grid-cols-3 grid-rows-4 gap-2">
          {colors.map((item, index) => (
            //khong bk truyen item vao classnam ra sao
            <button key={index} style={{ background: item }} className={`rounded-full h-[30px] w-[30px] focus:border focus:border-DarkBlue hover:opacity-75`}>
              {/* Nen truyen ma mau vao day va khong de hien thi */}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`relative w-full min-h-[120px] ${isToggle2 && "min-h-[40px] h-[40px]"
          } rounded-md border border-Black75 m-1 overflow-y-hidden transition-all duration-150 ease-in-out`}
      >
        <div className="flex justify-between">
          <h6 className="m-2">Chất lượng</h6>
          {isToggle2 ? (
            <ArrowU size={30} onClick={toggleHandler2} />
          ) : (
            <ArrowD size={30} onClick={toggleHandler2} />
          )}{" "}
        </div>
        <div className="flex w-[80%] m-1x flex-wrap gap-1">
          {materials.map((item, index) => (
            <button key={index} className="bg-Black10 hover:bg-Black25 px-1x py-1 rounded-md focus:bg-Black75 focus:text-white italic"><p>{item}</p></button>
          ))}
        </div>
      </div>
      <div
        className={`relative w-full min-h-[120px] ${isToggle3 && "min-h-[40px] h-[40px]"
          } rounded-md border border-Black75 m-1 overflow-y-hidden transition-all duration-150 ease-in-out`}
      >
        <div className="flex justify-between">
          <h6 className="m-2">Kích thước</h6>
          {isToggle3 ? (
            <ArrowU size={30} onClick={toggleHandler3} />
          ) : (
            <ArrowD size={30} onClick={toggleHandler3} />
          )}{" "}
        </div>
        <div className="flex flex-wrap w-[80%] gap-1 m-1x">
          {size.map((item, index) => (
            <button key={index} className="h-[30px] w-[30px] text-Black75 rounded-full border border-Black75 hover:bg-Black10 focus:bg-Black75 focus:text-white">
              {item}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`relative w-full min-h-[120px] ${isToggle4 && "min-h-[40px] h-[40px]"
          } rounded-md border border-Black75 m-1 overflow-y-hidden transition-all duration-150 ease-in-out`}
      >
        <div className="flex justify-between">
          <h6 className="m-2">Bảng giá</h6>
          {isToggle4 ? (
            <ArrowU size={30} onClick={toggleHandler4} />
          ) : (
            <ArrowD size={30} onClick={toggleHandler4} />
          )}
        </div>
        <div className="w-[90%] m-1x">
          {/* làm sao chỉ chọn 1 lần ? */}
          {rangePrices.map((item, index) => (
            <label className="flex gap-1 items-center p-1" key={index}>
              <input className="h-[16px] w-[16px]" type="checkbox" name="selectRangePrice" />
              <h6 className="text-[12px]">{item}</h6>
            </label>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
