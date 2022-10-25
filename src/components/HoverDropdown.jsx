import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HoverDropdown = ({isVisible,setIsVisible}) => {
   
  return (
    <div
    onMouseLeave={setIsVisible}
     className={`${!isVisible&&"hidden"} absolute bottom-[-140px] left-[0px] w-[130px] bg-white rounded-[6px] shadow-md `}>
        <div className="absolute left-[0px] top-[-70px] w-[90%] h-[70px] z-10">
        </div>
        <div className="w-full text-center rounded-t-[6px]  py-1x bg-white hover:bg-Primary hover:text-white transition">
       <Link to="/thong-tin-ca-nhan">
        <h6>Tài khoản</h6>
       </Link>
       </div>
       <div className="w-full text-center  py-1x bg-white hover:bg-WarningColor hover:text-white transition">
       <Link to="/lich-su-mua-hang">{/*Nên là hiển thị các đơn hàng đang xử lý và đã giao thành công */}
        <h6>Đơn hàng</h6>
       </Link>
       </div>
       <div className="w-full text-center rounded-b-[6px]  py-1x bg-white hover:bg-ErrorColor hover:text-white transition">
       <Link to="">
        <h6>Đăng xuất</h6>
       </Link>
       </div>
    </div>
  )
}

export default HoverDropdown