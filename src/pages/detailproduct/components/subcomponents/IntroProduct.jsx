import React, { useContext, useEffect, useState } from 'react'
import { MdFavoriteBorder as Heart, MdOutlineRemoveRedEye as Eye, MdStar as Star } from 'react-icons/md'
import { ProductDetailContext } from '../../ProductDetailContext'

const IntroProduct = () => {
  const { product } = useContext(ProductDetailContext)
  const [rate, setRate] = useState('')
  const [starts, setStatrt] = useState([])

  useEffect(() => {
    if ((product && (product.rate !== 0 || product.rate !== ''))) {
      const startsTmp = []
      for (let i = 1; i <= Number.parseInt(product.rate); i++) {
        startsTmp.push(i)
      }
      setStatrt(startsTmp)
      setRate(product.rate)
    }
  }, [])

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
          {(product && !(product.rate === 0 || product.rate === '')) ?
            <>
              <h4 className="font-bold mr-2">{rate}</h4>
              <div className="flex items-center">
                {starts.map((item, index) => {
                  return <Star key={index} />
                })}
              </div>
            </>
            : 'Chưa có đánh giá'}
        </div>
      </div>
    </div>
  )
}

export default IntroProduct
