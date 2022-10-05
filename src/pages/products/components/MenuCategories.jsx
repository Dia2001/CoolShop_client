import React from 'react'
import glassesImg from '../../../assets/sunglasses.svg'
import ReactTooltip from 'react-tooltip';
const MenuCategories = () => {
  return (
    <div className="w-[1240px] mx-auto text-center">
      <h3 className="font-bold text-MainBlue">Quần Jean Nam</h3>
      <h4 className="font-bold text-DarkBlue">Danh mục</h4>
      <div className="flex gap-2 justify-center">
        {/* tooltips has failed */}
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      <img src={glassesImg} alt="Loại đồ" className="w-[60px] h-[60px] rounded-full border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue" />
      
      
      </div>
    </div>
  )
}
// Nam: dãy màu xanh 
// Nữ: màu vàng
// Quý ông: BlackCool
//set thêm opacity nếu cần thiết, cố gắng sử dụng màu trong hệ thống.
export default MenuCategories