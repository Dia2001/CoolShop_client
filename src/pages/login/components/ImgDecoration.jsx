import React from 'react'
import imgVest1 from '../../../assets/vest-1.jpg'
import imgVest2 from '../../../assets/vest-2.jpg'
import imgVest3 from '../../../assets/vest-3.png'
const ImgDecoration = () => {
  return (
    <div className='relative h-[545px] w-[425px]'>
        <img src={imgVest1} alt="Đồ nam" className="absolute top-0 left-0 z-10 object-cover object-center w-[260px] h-[275px] border-double border-4  border-white shadow-sm"/>
        <img src={imgVest2} alt="Đồ nữ" className="absolute top-[30%] right-0 z-20 object-cover object-center w-[215px] h-[239px]  border-double border-4 border-white shadow-sm"/>
        <img src={imgVest3} alt="Quý ông" className="absolute bottom-0 left-0 z-30 object-cover object-top w-[200px] h-[210px] border-double border-4  border-white shadow-sm"/>
    </div>
  )
}

export default ImgDecoration