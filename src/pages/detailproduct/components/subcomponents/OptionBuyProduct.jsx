import React, { useEffect, useState } from 'react'
import { MdFavoriteBorder as Heart } from 'react-icons/md'
import { BsShieldFillCheck as Shield, BsArrowLeftRight as Return } from 'react-icons/bs'
import { GiCardboardBoxClosed as Box } from 'react-icons/gi'
import SelectQuantity from '../../../../components/Inputs/SelectQuantity'

const OptionBuyProduct = ({ quantity, colorIdSelected, sizeIdSelected, handleAddToCart, handleOrder }) => {
  const [isCanChange, setIsCanChange] = useState(false)
  const [isCanAddAndOrder, setIsCanAddAndOrder] = useState(false)
  const [quantitySelect, setQuantitySelect] = useState(0)

  useEffect(() => {
    if (colorIdSelected && sizeIdSelected) {
      setIsCanChange(true)
      setQuantitySelect(1)
      setIsCanAddAndOrder(false)
    } else {
      setQuantitySelect(0)
      setIsCanChange(false)
      setIsCanAddAndOrder(true)
    }
  }, [quantity, colorIdSelected, sizeIdSelected])

  useEffect(() => {
    if (quantitySelect > 0) {
      setIsCanAddAndOrder(true)
    }
  }, [quantitySelect, quantity, colorIdSelected, sizeIdSelected])

  const checkAddAndOrder = () => !isCanAddAndOrder || quantitySelect > quantity || quantitySelect === 0

  return (
    <div>
      <div className="flex justify-evenly py-1x items-start">
        <button
          disabled={checkAddAndOrder()}
          onClick={() => handleAddToCart(quantitySelect)}
          className={`px-5x py-2x bg-ActiveColor ${checkAddAndOrder() ? 'opacity-75' : 'hover:opacity-75'} text-white font-bold`}>
          <h6>Thêm vào giỏ hàng</h6>
        </button>
        <button className="p-1x text-white bg-ErrorColor hover:opacity-75">
          <Heart size={30} />
        </button>
        <SelectQuantity
          quantity={quantitySelect}
          setQuantity={setQuantitySelect}
          isCanChange={isCanChange}
          max={quantity}
          min={0}
        ></SelectQuantity>
      </div>
      <div className="flex justify-center">
        <button
          disabled={checkAddAndOrder()}
          onClick={() => handleOrder(quantitySelect)}
          className={`bg-DarkBlue uppercase text-white ${checkAddAndOrder() ? 'opacity-75' : 'hover:opacity-75'} py-2x w-[70%] mx-auto text-center`}>
          Thanh toán ngay
        </button>
      </div>
      <div className="flex justify-between items-center p-1x my-1x border">
        <div className="flex flex-col items-center text-Primary">
          <Shield size={60} />
          <h6 className="text-BlackCool">Hoàn tiền</h6>
          <h6 className="text-BlackCool">200% nếu hàng giả</h6>
        </div>
        <div className="flex flex-col items-center text-Primary">
          <Box size={60} />
          <h6 className="text-BlackCool">Mở hợp kiểm</h6>
          <h6 className="text-BlackCool">tra hàng</h6>
        </div>
        <div className="flex flex-col items-center text-Primary">
          <Return size={60} />
          <h6 className="text-BlackCool">Đổi trả</h6>
          <h6 className="text-BlackCool">trong 7 ngày</h6>
        </div>
      </div>
    </div>
  )
}

export default OptionBuyProduct
