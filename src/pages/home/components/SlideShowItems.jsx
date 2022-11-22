import React from "react";
import {
  BsArrowLeftCircle as ArrowLeft,
  BsArrowRightCircle as ArrowRight,
} from "react-icons/bs";
import Items from "./Items";

const SlideShowItems = ({ listItem, category }) => {

  return (
    <div className={`border border-BlackCool p-1x my-2x`}>
      <h5 className="text-left">{category}:</h5>

      <div className="grid grid-cols-10 grid-rows-1 gap-2 w-full">
        <div className="col-span-1 flex items-center justify-center">
          <ArrowLeft
            size={50}
            className="cursor-pointer p-1x hover:opacity-75 hover:scale-105 transition  text-BlackCool"
          />
        </div>
        <div className="col-span-8 overflow-x-hidden py-1x overflow-y-visible">
          <div className="flex gap-6">
            {Array.isArray(listItem) ? listItem.map((item, index) => (
              <Items key={index} item={item} />
            )) : ''}
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <ArrowRight
            size={50}
            className="cursor-pointer p-1x hover:opacity-75 hover:scale-105 transition  text-BlackCool"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideShowItems;
