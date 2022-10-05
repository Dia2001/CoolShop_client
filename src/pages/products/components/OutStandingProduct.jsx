import React from 'react'
import imgNewProduct from '../../../assets/newproduct.png'
import imgSaleProduct from '../../../assets/saleproduct.png'
import imgGoodProduct from '../../../assets/goodsellproduct.jpg'

const OutStandingProduct = () => {
  return (
   <div className='w-full h-[555px] bg-LightBlue'>
        <div className='w-[1240px] mx-auto text-center h-full'>
            <h5 className='font-bold text-white p-2x'>Sản phẩm nổi bật</h5>
            <div className='flex gap-4 justify-center h-[420px]'>
                <div className="relative bg-white w-[320px] h-[400px] self-end shadow-md hover:scale-105 transition">
                <h5 className="absolute left-0 bottom-0 px-5x py-1x bg-BlackCool/75 text-white font-bold italic">Hàng mới</h5>
                  <img src={imgNewProduct} className="object-cover w-full h-full" alt="Sản phẩm thương hiệu"/>  
                </div>
                <div className="relative bg-white w-[320px] h-[400px] self-start shadow-md hover:scale-105 transition">
                <h5 className="absolute left-0 px-5x py-1x bg-BlackCool/75 text-white font-bold italic">Bán chạy</h5>
                  <img src={imgSaleProduct} className="object-cover w-full h-full" alt="Sản phẩm thương hiệu"/>  
                </div>
                <div className="relative bg-white w-[320px] h-[400px] self-end shadow-md hover:scale-105 transition">
                <h5 className="absolute right-0 bottom-0 px-5x py-1x bg-BlackCool/75 text-white font-bold italic">Giảm sốc</h5>
                  <img src={imgGoodProduct} className="object-cover w-full h-full" alt="Sản phẩm thương hiệu"/>  
                </div>
            </div>
        </div>
   </div>
  )
}

export default OutStandingProduct