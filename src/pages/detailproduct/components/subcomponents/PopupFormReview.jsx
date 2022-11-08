import React from "react";
import { GrClose as CloseButton } from "react-icons/gr";
import { BsVectorPen as Pen } from "react-icons/bs";
import imgAvt from "../../../../assets/avatar.jpg";
import imgAddFile from "../../../../assets/img-add.svg";
const PopupFormReview = ({ popUp, setPopUp }) => {
  return (
    <div
      className={`${
        !popUp && "hidden"
      } fixed flex justify-center items-center bg-BlackCool/75 animate-slowShow w-full h-[100vh] z-10`}
    >
      <div className="p-1x w-[610px] min-h-[445px] bg-white rounded-[3px]">
        <div className="flex justify-between">
          <h5 className=" flex gap-2">
            <Pen size={40} className="text-WarningColor" />
            Đánh giá sản phẩm
          </h5>
          <CloseButton
            size={40}
            onClick={setPopUp}
            className="cursor-pointer"
          />
        </div>
        <div className="p-1x flex gap-2 my-2x">
          <img
            src={imgAvt}
            className="w-[80px] h-[80px] rounded-full shadow-sm"
            alt="Ảnh người dùng"
          />
          <textarea
            className="grow h-[140px] p-2x border-2 rounded-md resize-none border-Black25 outline-none"
            placeholder="Đánh giá sản phẩm ..."
          ></textarea>
        </div>
        <div className="flex justify-center gap-2 my-1x">
          <h6>Điểm sản phẩm</h6>
          <div>sao</div>
          <h6>Rất tốt</h6>
        </div>
        <div className="flex gap-4 pl-1x">
          <img
            src={imgAddFile}
            className="w-[80px] h-[80px] cursor-pointer"
            alt="img add file"
          />
          {/* test multi img , you can replace div tag to img tag */}
          <div className="h-[80px] w-[80px] bg-Black50"></div>
          <div className="h-[80px] w-[80px] bg-Black50"></div>
          <div className="h-[80px] w-[80px] bg-Black50"></div>
        </div>
        <div className="m-1x flex justify-between">
          <button className="w-[190px] h-[50px] shadow-md bg-DarkBlue text-white active:shadow-sm hover:opacity-75">
            <h6>Thêm ảnh</h6>
          </button>
          <button className="w-[190px] h-[50px] shadow-md bg-WarningColor text-white active:shadow-sm hover:opacity-75">
            <h6>Gửi đánh giá</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupFormReview;
