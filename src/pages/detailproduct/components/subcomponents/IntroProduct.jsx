import React, { useContext, useEffect, useState } from 'react'
import { MdFavoriteBorder as Heart, MdOutlineRemoveRedEye as Eye, MdStar as Star, MdStarHalf, MdStarOutline } from 'react-icons/md'
import { ProductDetailContext } from '../../ProductDetailContext'

const IntroProduct = () => {
  const { product } = useContext(ProductDetailContext)
  const [rate, setRate] = useState('')
  const [stars, setStars] = useState([])

  useEffect(() => {
    if ((product && (product.rate !== 0 || product.rate !== ''))) {
      const starsTmp = []
      for (let i = 1; i <= Number.parseInt(product.rate); i++) {
        starsTmp.push(1)
      }
      const overfflow = 5 - starsTmp.length

      if (Number.parseInt((rate - Number.parseInt(rate)) * 10) >= 5) {
        starsTmp.push(-1)
      } else {
        starsTmp.push(0)
      }

      for (let i = 1; i < overfflow; i++) {
        starsTmp.push(0)
      }

      setStars(starsTmp)
      setRate(product.rate)
    }
  }, [product])

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
                {stars.map((item, index) => {
                  if (item === 1) {
                    return <Star key={index} />
                  } else if (item === 0) {
                    return <MdStarOutline key={index} />
                  } else {
                    return <MdStarHalf key={index} />
                  }
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
