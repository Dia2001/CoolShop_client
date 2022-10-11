import React from 'react'
import imgAvt from '../../../assets/avatar.jpg'
const PersonalMenu = () => {
  return (
    <div className="flex flex-col justify-between">
        <div className="">
            <img src={imgAvt} alt="Ảnh đại diện" className="object-cover m-2 rounded-full shadow-sm w-[200px] h-[200px]"/>
            <h5 className='font-semibold m-1 text-center'>Nguyễn Hữu Nhân</h5>
            <button className="text-white bg-Primary w-full rounded-sm py-1x px-2x shadow-sm hover:opacity-75 font-bold"><h6>Chọn ảnh khác</h6></button>
        </div>
        <div className="flex flex-col gap-4">
            <button className="text-white bg-WarningColor rounded-sm py-1x px-2x shadow-sm hover:opacity-75 font-bold"><h6>Đổi mật khẩu</h6></button>
            <button className="text-white bg-ErrorColor rounded-sm py-1x px-2x shadow-sm hover:opacity-75 font-bold"><h6>Đăng xuất</h6></button>
        </div>
       
    </div>
  )
}

export default PersonalMenu