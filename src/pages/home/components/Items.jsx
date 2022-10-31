import React, { useState } from 'react'
import {MdOutlineFavoriteBorder as FavoriteBorder,MdFavorite as Favorite} from "react-icons/md"
const Items = ({item}) => {
    const [showName,setShowName]=useState(false);
  return (
   
    <div  className="relative w-[150px] overflow-y-visible">
                <div
                onMouseLeave={()=>setShowName(false)}
                 className={`${!showName&&"hidden"} absolute bg-BlackCool/25 text-white top-0 left-0 w-full h-full px-2x rounded-[6px] flex justify-center items-center `}>
                    <p>{item.name}</p>
                </div>
                <FavoriteBorder size={25} className="absolute left-2 top-2 text-white font-bold z-10"/>
                <img
                    onMouseEnter={() =>setShowName(true)}
                  src={item.img}
                  className="object-cover w-[150px] h-[150px] object-center shadow-md rounded-[6px]"
                  alt={item.name}
                />
                <p className="text-ellipsis whitespace-nowrap overflow-hidden w-full">
                  {item.name}
                </p>
              </div>
  )
}

export default Items