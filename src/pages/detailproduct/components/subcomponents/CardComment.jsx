import React from "react";
import imgAvatar from "../../../../assets/avatar.jpg";
import imgO3 from '../../../../assets/product-o3.jpg';
import imgO4 from '../../../../assets/product-o4.jpg'
import { MdStar as Star } from "react-icons/md";
import { BiLike as Like } from 'react-icons/bi';
import { BiMessageDetail as Message } from 'react-icons/bi'

const CardComment = () => {
  const votesStarDemo = [1, 1, 1, 1, 1];
  return (
    <div className="m-1x p-1 border-2 rounded-sm flex justify-between">
      <div className="w-[50%]">
        <img
          src={imgAvatar}
          alt="Ảnh đại diện"
          className="float-left h-[60px] w-[60px] rounded-full"
        />
        <h6 className="font-semibold">Hữu Nhân</h6>
        {/*không marin left hay padding left được */}
        <div className="flex gap-2 items-center">
          <div className="ml-1x flex text-WarningColor">
            {votesStarDemo.map((item, index) => (
              <Star key={index} size={20} />
            ))}
          </div>
          <p className="grow text-Black50 border-l border-Black25 h-fit px-1x">
            2 tháng trước
          </p>
        </div>
        <div className=" ml-5x my-3x text-[16px] text-BlackCool">
          Sản phẩm rất tốt!
        </div>
        <div className="ml-5x flex gap-4 items-center">
          <div className="text-LightBlue gap-1 flex items-center">
            <Like size={25} />
            <h6>1</h6>
          </div>
          <div className="text-ActiveColor gap-1 flex items-center">
            <Message size={25} />
            <h6>1</h6>
          </div>
        </div>
      </div>
      <div className="flex m-1 gap-4">
        <img src={imgO3} alt="anh 1" className="object-cover w-[130px] h-[136px]" />
        <img src={imgO4} alt="anh 2" className="object-cover w-[130px] h-[136px]" />
        <h4 className="px-1 bg-Black75 h-fit w-fit text-white">3+</h4>
      </div>
    </div>
  );
};

export default CardComment;
