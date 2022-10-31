import React, { useState } from "react";
import modelImg from "../../../assets/model-img.png";
import {
  MdOutlineArrowBackIosNew as ArrowLeft,
  MdOutlineArrowForwardIos as ArrowRight,
} from "react-icons/md";
import CardProductV2 from "../../../components/CardProductV2";
const SlideImgs = ({role}) => {
  const testSlideImg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [isHover, setIsHover] = useState(false);
  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };
  const turnLeft = () => {
   

  };
  const turnRight = () => {
    
  };
  return (
    <div className="flex w-[1240px] mx-auto pb-5x">
      <div className="relative overflow-hidden basis-1/4">
        <img
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="w-[288px]"
          src={modelImg}
          alt="Người mẫu"
        />
        <button
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className={`${
            !isHover && "translate-y-[100%]"
          }  view-all w-full absolute left-0 bottom-0 h-[60px] text-center text-white p-1 hover:bg-BlackCool hover:opacity-75 transition`}
        >
          <h6 className="font-bold">Xem tất cả</h6>
        </button>
      </div>
      <div className="basis-3/4 overflow-hidden">
        <div className="w-full text-left block">
          <h5 className="font-bold italic">Thời trang {role}</h5>
        </div>
        <div className="relative h-full overflow-hidden w-[835px] mx-auto">
          <div
            onClick={turnLeft}
            className="absolute h-full  left-0 items-center flex justify-center"
          >
            <ArrowLeft
              color="white"
              size={40}
              className="bg-BlackCool opacity-50 hover:opacity-100 p-1x"
            />
          </div>
          <div
            onClick={turnRight}
            className="absolute h-full right-0 items-center flex justify-center"
          >
            <ArrowRight
              color="white"
              size={40}
              className="bg-BlackCool opacity-50 hover:opacity-100 p-1x"
            />
          </div>
          <div
            className=" flex overflow-x-hidden transition items-center w-[90%] mx-auto h-full"
          >
            {/* <CardImg no={1} />
            <CardImg no={2} />
            <CardImg no={3} />
            <CardImg no={4} />
            <CardImg no={5} />
            <CardImg no={5} />
            <CardImg no={5} /> */}
            <div id="carousel-container" className="flex gap-2 transition">
              {testSlideImg.map((index, item) => (
                <CardProductV2 key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideImgs;
