import React from 'react'
import imgProductv2 from '../../../assets/product-o2.png'

const DescriptionProduct = ({ product }) => {
  return (
    <div className="min-h-[70vh] border p-1x mt-3x border-Black10 bg-white">
      <h4 className="font-bold mt-2x mb-4x">Mô tả sản phẩm</h4>
      <div className="text-[16px] text-Black75">
        {product ? product.description : ''}
      </div>
    </div>
  )
}

export default DescriptionProduct
