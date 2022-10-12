import React from 'react'
import {MdFavoriteBorder as Heart,MdOutlineRemoveRedEye as Eye,MdStar as Star} from 'react-icons/md'
const IntroProduct = () => {
    const listStar=[1,1,1,1,1];
    return (
    <div>
         <h5 className="w-[80%] font-bold">
        Quần jeans nam Ống suông co giãn thoáng mát Quần jeans nam Ống suông co
        giãn thoáng mát
      </h5>
      <div className="flex justify-between items-center my-2x py-1 border-b ">
        <div className="flex gap-2 text-ErrorColor items-center">
            <h6>Yêu thích: 222</h6>
            <Heart size={20}/>
        </div>
        <div className="flex gap-2 items-center text-ActiveColor">
            <h6>Lượt xem: 67.897</h6>
            <Eye size={20}/>
        </div>
        <div className="flex gap-1 item-center text-WarningColor">
            {listStar.map((item,index)=>(
                <Star size={20}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default IntroProduct