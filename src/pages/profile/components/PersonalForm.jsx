import React from 'react'

const PersonalForm = () => {
  return (
    <div className="flex-1 text-center">
      <h4 className="uppercase mt-1x mb-4x font-bold text-LightBlue">Thông tin cá nhân</h4>
      <div className="flex items-center gap-8 m-5x">
      <div className="flex items-center gap-2">
          <h6 className="font-bold">Tên:</h6>
          <input type="text" className="outline-none pl-4 py-1x rounded-sm border-2 w-[170px] border-Black10 shadow-sm focus:shadow-md" value="Nhân"/>
        </div>
        <div className="flex items-center gap-2">
        <h6 className="font-bold">Họ:</h6>
          <input type="text" className="outline-none pl-4 py-1x rounded-sm border-2 w-[185px] border-Black10 shadow-sm focus:shadow-md" value="Nguyễn"/>
      </div>
      </div>
      <div className="flex items-center gap-2 m-2x">
        <h6 className="font-bold">Email:</h6>
        <input type="email" className="outline-none pl-1 py-1x rounded-sm border-2 w-[340px] border-Black10 shadow-sm focus:shadow-md" value="Nguyenhuunhan1111@gmail.com"/>
      </div>
      <div className="flex items-center gap-2 m-2x">
        <h6 className="font-bold">Số điện thoại:</h6>
        <input type="number" className="outline-none pl-1 py-1x rounded-sm border-2 w-[340px] border-Black10 shadow-sm focus:shadow-md" value="0986255555"/>
      </div>
      <div className="flex items-left gap-2 m-2x">
        <h6 className="font-bold">Địa chỉ:</h6>
        <textarea className="outline-none pl-1 py-1x rounded-sm border-2 min-h-[90px] w-[340px] border-Black10 shadow-sm focus:shadow-md">
        222 Trần Hưng Đạo, Tổ 2, khu vực 2, 
        Tp Quy Nhơn, Bình Định
        </textarea>   
      </div>
      <div class="flex justify-between mt-5x">
        <button className="text-LightBlue shadow-sm rounded-md font-semibold transition hover:bg-LightBlue hover:text-MainBlue bg-MainBlue py-1x px-2x "><h6>Bỏ thay đổi</h6></button>
        <button className="text-white shadow-sm rounded-md font-semibold transition hover:bg-DarkBlue hover:opacity-75 bg-LightBlue py-1x px-2x uppercase"><h6>Lưu lại</h6></button>
      </div>
    </div>
  )
}

export default PersonalForm