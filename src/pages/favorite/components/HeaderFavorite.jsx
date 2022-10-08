import React from 'react'
import {BsSearch as Search} from 'react-icons/bs'
const HeaderFavorite = (props) => {
  return (
    <div className="flex justify-between py-2x px-3x rounded-md shadow-md items-center bg-white">
        <h4 className="font-semibold text-ErrorColor">Yêu thích</h4>
        <div className="relative">
            <input type="text" className="px-5x p-1x rounded-full outline-none border-2 border-Black10 w-[410px] shadow-sm" placeholder="Tìm kiếm nhanh ..."/>
            <Search className="absolute top-2 left-2 text-Black10" size={30}/>
        </div>
        <h5 className="font-semibold text-ErrorColor">Sản phẩm ({props.length})</h5>
    </div>
  )
}

export default HeaderFavorite