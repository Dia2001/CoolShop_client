import React, { useContext, useEffect, useState } from "react";
import {
  MdKeyboardArrowDown as ArrowD,
  MdKeyboardArrowUp as ArrowU,
} from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { ProductContext } from '../../../Providers/ProductContext'

const FilterProduct = ({ optionFilter, handleFilter }) => {
  const rangePrices = [
    {
      value: '100000',
      label: "Nhỏ hơn 100.000đ",
    },
    {
      value: '200000',
      label: "Từ 100.000đ-200.000đ"
    },
    {
      value: '350000',
      label: "Từ 200.000đ-350.000đ"
    },
    {
      value: '500000',
      label: "Từ 350.000đ-500.000đ"
    },
    {
      value: '700000',
      label: "Từ 500.000đ-700.000đ"
    },
  ];

  const { sizes, colors } = useContext(ProductContext)
  //no clear code, can you find another better solution?
  //useState toggle các option lọc
  const [isToggle1, SetIsToggle1] = useState(false);
  const [isToggle3, SetIsToggle3] = useState(false);
  const [isToggle4, SetIsToggle4] = useState(false);

  const [colorSelected, setColorSelected] = useState('')
  const [sizeSelected, setSizeSelected] = useState('')
  const [priceFilter, setPriceFilter] = useState('')

  useEffect(() => {
    if (optionFilter) {
      setColorSelected(optionFilter.colorId)
      setSizeSelected(optionFilter.sizeId)
      setPriceFilter(optionFilter.price)
    }
  }, [])

  const toggleHandler1 = () => {
    SetIsToggle1(!isToggle1);
  };

  const toggleHandler3 = () => {
    SetIsToggle3(!isToggle3);
  };

  const toggleHandler4 = () => {
    SetIsToggle4(!isToggle4);
  };

  const handleClickFilter = () => {
    if (colorSelected !== '' || sizeSelected !== '' || priceFilter !== '') {
      handleFilter({
        ...optionFilter,
        colorId: colorSelected,
        sizeId: sizeSelected,
        price: priceFilter
      })
    }
  }

  return (
    <div className=" col-span-2">
      <div className="relative w-full px-2 rounded-md border border-Black75 m-1 overflow-y-hidden py-1">
        <div className=" flex justify-between">
          <h6 className="font-bold">Tùy chọn lọc</h6>
          <button className="px-2 py rounded-md hover:opacity-70 bg-ActiveColor"
            onClick={handleClickFilter}>Lọc</button>
        </div>
        <div className="flex w-[90%] flex-wrap gap-2 m-1x ">
          {colorSelected !== '' ?
            <button className="border border-DarkBlue rounded-md py-1 px-2">
              <p>{colorSelected}</p>
            </button>
            : ''}
          {sizeSelected !== '' ?
            <button className="border border-DarkBlue rounded-md py-1 px-2">
              <p>{sizeSelected}</p>
            </button>
            : ''}
          {priceFilter !== '' ?
            <button className="border border-DarkBlue rounded-md py-1 px-2">
              <p>{priceFilter}</p>
            </button>
            : ''}
        </div>
      </div>
      <div
        className={`relative w-full ${isToggle1 && "min-h-[40px] h-[40px]"
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
            <Tippy key={index} content={item.name} >
              <button key={index} style={{ background: item.code }}
                onClick={() => colorSelected === item.colorId ? setColorSelected('') : setColorSelected(item.colorId)}
                className={`overflow-hidden bg-gray-100 rounded-full h-[30px] w-[30px] hover:opacity-75 ${colorSelected === item.colorId ? ' border border-DarkBlue' : ''}`}>
                {item.name}
              </button>
            </Tippy>
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
          {sizes.map((item, index) => (
            <button key={index}
              onClick={() => sizeSelected === item.sizeId ? setSizeSelected('') : setSizeSelected(item.sizeId)}
              className={`h-[30px] w-[30px] rounded-full border border-Black75 ${sizeSelected === item.sizeId ? 'bg-Black75 text-white ' : ' text-Black75 '} hover:bg-Black10 `}>
              {item.name}
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
              <input className="h-[16px] w-[16px]"
                onChange={(e) => priceFilter === item.value ? setPriceFilter('') : setPriceFilter(item.value)}
                checked={priceFilter === item.value}
                type="checkbox" name="selectRangePrice" />
              <h6 className="text-[12px]">{item.label}</h6>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
