import React, { useState } from 'react'
import {IoBookmarkOutline as Mark,IoBookmark as Marked} from 'react-icons/io5'
const Article = ({data}) => {
    const [isMark,setIsMark]=useState(false);
   
  return (
    <div className="w-[320px] h-[450px] shadow-md hover:shadow-sm transition">
        <img src={data.img} className="w-full h-[222px] object-cover object-center" alt="Ảnh bài viết" />
        <div className="flex justify-between p-1x">
            <h6 className="font-bold">{data.title}</h6>
            {isMark?
            <Marked size={30} className="cursor-pointer" onClick={()=>setIsMark(!isMark)}/>:
            <Mark size={30} className="cursor-pointer" onClick={()=>setIsMark(!isMark)}/>
            }
        </div>
        <div className="w-[290px] h-[150px] mx-auto overflow-y-hidden text-left">
            <h6>{data.description}</h6>
        </div>
        <h6 className="font-semibold text-center cursor-pointer hover:scale-105 transition">Xem bài viết</h6>
    </div>
  )
}

export default Article