import React from "react";
import {
  BsPencilSquare as Modify,
  BsFillCartDashFill as RemoveCart,
} from "react-icons/bs";
//thu vien them tooltip
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
const ItemsCart = ({ item }) => {
  return (
    <div className="relative gap-2 flex shadow-md bg-white ">
      <img
        src={item.img}
        className="object-cover h-[120px] w-[120px]"
        alt={item.name}
      />
      <div className="w-[70%]">
        <h6>{item.name}</h6>
        <br />
        <p>{item.description}</p>
      </div>
      <div className="absolute bottom-1 right-2 flex justify-center items-center text-center gap-2">
        <h6 className="font-bold">{item.price}</h6>
      <Tippy content={'Xóa sản phẩm'}>
        <button className="rounded-full hover:opacity-75 text-white bg-ErrorColor p-2">
          <RemoveCart size={20} />
        </button>
      </Tippy>
      <Tippy content={'Thay đổi sản phẩm'}>
        <button className="rounded-full hover:opacity-75  text-white bg-ActiveColor p-2">
          <Modify size={20} />
        </button>
      </Tippy>
      </div>
      {/* input number */}
      <div class="custom-number-input h-10 w-32 absolute right-1 top-1">
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            class=" bg-white border border-Black10 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-full bg-white border border-Black10 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value="1"
          ></input>
          <button
            data-action="increment"
            class="bg-white border border-Black10 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCart;
