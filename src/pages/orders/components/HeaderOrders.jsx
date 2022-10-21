import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Select from 'react-select'
const HeaderOrders = () => {
  const optionsFilter=[
    {"value":"default","label":"Tất cả các đơn"},
    {"value":"thanhtoan","label":"Chờ thanh toán"},
    {"value":"vanchuyen","label":"Đang vận chuyển"},
    {"value":"dagiao","label":"Đã giao"},
    {"value":"dahuy","label":"Đã hủy"},
  ]
  return (
    <div className="flex justify-between items-center my-3x px-2x py-1x rounded-sm shadow-sm bg-white">
        <h4 className="text-WarningColor font-bold">Đơn hàng</h4>
        <div className="flex gap-2">
            <input type="text" className="shadow-sm outline-none focus:shadow-md rounded-full w-[355px] pl-4x pr-2x py-1x" placeholder="Tìm kiếm ..."/>
            <button className="p-1x text-center rounded-full hover:shadow-md h-[45px] w-[45px] border border-Black10">
            <BsSearch size={30} />
          </button>
        </div>
        {/*select multivalues */}
       <div>
       <h6 className="font-bold">Sắp xếp theo: </h6>
        <select className="p-2 border border-Black25" name="sortby">
          {optionsFilter.map((item,index)=>(
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
       </div>
    </div>
  )
}

export default HeaderOrders