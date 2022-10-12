import React, { useContext } from 'react'
import { MdFavoriteBorder as Heart, MdOutlineRemoveRedEye as Eye, MdStar as Star } from 'react-icons/md'
import { ProductContext } from '../../ProductContext'

const IntroProduct = () => {
  const { product } = useContext(ProductContext)
  const listStar = [1, 1, 1, 1, 1];

  return (
    <div>
      <h5 className="w-[80%] font-bold">
        {product ? product.name : ''}
      </h5>
      <div className="flex justify-between items-center my-2x py-1 border-b ">
        <div className="flex gap-2 text-ErrorColor items-center">
          <h6>Yêu thích: 222</h6>
          <Heart size={20} />
        </div>
        <div className="flex gap-2 items-center text-ActiveColor">
          <h6>Lượt xem: 67.897</h6>
          <Eye size={20} />
        </div>
        <div className="flex gap-1 item-center text-WarningColor">
          {listStar.map((item, index) => (
            <Star size={20} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default IntroProduct
