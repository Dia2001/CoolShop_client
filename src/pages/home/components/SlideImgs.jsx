import React, { useEffect, useRef, useState } from "react";
import modelImg from "../../../assets/model-img.png";
import {
  MdOutlineArrowBackIosNew as ArrowLeft,
  MdOutlineArrowForwardIos as ArrowRight,
} from "react-icons/md";
import CardProductV2 from "../../../components/CardProductV2";
import config from "../../../config";
import { Link } from "react-router-dom";

const SlideImgs = ({ data }) => {
  const [isHover, setIsHover] = useState(false);
  const [imageSlide, setImageSlide] = useState(modelImg)
  const baseWidthProductCart = 254
  const [marginSlide, setMarginSlide] = useState(0)
  const quantiy = useRef(0)
  const [position, setPosition] = useState(0)

  const mouseEnterHandler = () => {
    setIsHover(true);
  };

  useEffect(() => {
    if (data && data.product.length > 0) {
      setImageSlide(config.urlImageProduct + data.product[0].image)
      quantiy.current = data.product.length
    }
  }, [data])


  const mouseLeaveHandler = () => {
    setIsHover(false);
  };
  const turnLeft = () => {
    console.log(quantiy.current, position)
    if (quantiy.current === 3) {
      return
    } else if (position === 0) {
      setPosition(quantiy.current)
    } else {
      setPosition(prev => prev - 1)
    }
  };
  const turnRight = () => {
    console.log(quantiy.current, position)
    if (quantiy.current === 3) {
      return
    } else if (position === quantiy.current) {
      setPosition(0)
    } else {
      setPosition(prev => prev + 1)
    }
  };
  if (data)
    return (
      <Link to={config.routes.product + `?c=${data.categoryId}`} >
        <div className="flex w-[1240px] mx-auto mb-5x">
          <div className="relative overflow-hidden basis-1/4">
            <img
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="w-[288px]"
              src={imageSlide}
              alt="Người mẫu"
            />
            <button
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className={`${!isHover && "translate-y-[100%]"
                }  view-all w-full absolute left-0 bottom-0 h-[60px] text-center text-white p-1 hover:bg-BlackCool hover:opacity-75 transition`}
            >
              <h6 className="font-bold">Xem tất cả</h6>
            </button>
          </div>
          <div className="basis-3/4">
            <div className="w-full text-left block">
              <h5 className="font-bold italic">Thời trang {data.name}</h5>
            </div>
            <div className="relative h-full overflow-hidden w-[835px] mx-auto">
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  turnLeft()
                }}
                className="absolute h-full  left-0 items-center flex justify-center"
              >
                <ArrowLeft
                  color="white"
                  size={40}
                  className="bg-BlackCool opacity-50 hover:opacity-100 p-1x"
                />
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  turnRight()
                }}
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
                <div id="carousel-container"
                  className={`transition-all flex gap-2`}
                  style={{ marginLeft: `-${baseWidthProductCart * position}px` }}>
                  {data.product.map((product, index) => (
                    <CardProductV2 key={index} product={product} />
                  ))}
                  {data.product.map((product, index) => (
                    <CardProductV2 key={index} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  else return ''
};

export default SlideImgs;
