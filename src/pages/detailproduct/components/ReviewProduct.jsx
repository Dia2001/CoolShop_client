import React from 'react'
import {MdStar as Star} from 'react-icons/md'
import CardComment from './subcomponents/CardComment';
import imgStar from '../../../assets/happystar.svg'
const ReviewProduct = () => {
  const VotesStar=[1,1,1,1,1];
  return (
    <div className="bg-white rounded-sm shadow-sm mt-2x mb-5x">
      <div className="flex justify-between p-1x items-center">
        <div className="flex gap-4 items-center">
          <h5 className="font-bold">Đánh giá sản phẩm:</h5>
          <h4 className="font-bold text-WarningColor">5.0</h4>
          <div className="text-WarningColor flex gap-1">
            {VotesStar.map((item,index)=>(
                <Star key={index} size={30} />
            ))}
          </div>
        </div>
        <button className="py-2x px-1x h-fit w-fit font-bold text-WarningColor hover:text-white bg-white hover:bg-WarningColor rounded-sm border-2 border-WarningColor transition">
          <h6>Đánh giá sản phẩm</h6>
        </button>
      </div>
      <div className="">
        {/* Code phần bình luận */}
       <div className="min-h-[60vh]">
       <CardComment/>
       </div>
        <div className="text-center bottom-0 w-full">
              <img src={imgStar} alt="Ngôi sao" className="w-[180px] h-[180px] mx-auto m-2x"/>
              <h4 className="text-DarkBlue m-2x">Cảm ơn những đánh giá của bạn!</h4>
        </div>
      </div>
    </div>
  )
}

export default ReviewProduct