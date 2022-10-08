import React, { useState } from "react";
import { MdRemoveCircle as Remove } from "react-icons/md";
import { BsFillCartPlusFill as Cart } from "react-icons/bs";
const ItemFavorite = ({ item }) => {
  const [isEnable, setIsEnabled] = useState(false);
  const toggleOptionsHandler = () => {
    setIsEnabled(!isEnable);
  };
  return (
    <div
      onMouseLeave={() => setIsEnabled(false)}
      className="flex overflow-x-hidden bg-white shadow-sm"
    >
      <div
        onClick={toggleOptionsHandler}
        className="relative basis-10/12 gap-2 flex bg-white "
      >
        <img
          src={item.img}
          className="basis-1/5 object-cover h-[130px] w-[130px]"
          alt={item.name}
        />
        <div className="basis-4/5">
          <h6>{item.name}</h6>
          <br />
          <p>{item.description}</p>
        </div>
      </div>
      <div
        className={`${
          !isEnable && "translate-x-[101%]"
        } transition duration-75 ease-in-out flex basis-2/12 flex-col`}
      >
        <button className="flex-1 py-2 text-center font-bold text-white bg-ErrorColor">
          <div className="flex flex-col items-center gap-1">
          <Remove size={25} />
          <p>Xóa</p>
          </div>
        </button>
        <button className="flex-1 py-2 text-center font-bold text-white bg-ActiveColor">
        <div className="flex flex-col items-center gap-1">
          <Cart size={25} />
          <p>Thêm vào</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ItemFavorite;
