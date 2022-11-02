import React from 'react'
import { enPriceVnd } from '../../../utils'

const FooterTransition = ({ totalPrice }) => {
  return (
    <div className="flex justify-between px-4 py-2 bg-white shadow-sm border-2 border-DarkBlue items-center

    ">
      <button className="font-semibold italic px-8 py-4 bg-LightBlue text-white rounded-sm hover:bg-Primary"><h5>Thanh toán</h5></button>
      <h5 className="font-semibold">Tạm tính: {enPriceVnd(totalPrice)}Đ</h5>
    </div>
  )
}

export default FooterTransition
