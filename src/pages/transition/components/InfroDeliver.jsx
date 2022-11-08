import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import imgTruck from '../../../assets/truck.svg'
import imgMoMo from '../../../assets/methodpay/momo.jpg'
import imgPay from '../../../assets/methodpay/pay.png'
import imgPayMoney from '../../../assets/methodpay/paymoney.jpg'
import { enPriceVnd } from '../../../utils'

const InfroDeliver = ({ checkoutInfo, setCheckoutInfo }) => {

  const payMethod = [
    {
      "name": "Dùng ví MOMO",
      "img": imgMoMo,
      "value": "momo",
      "price": 15000
    },
    {
      "name": "Dùng Smart Banking",
      "img": imgPay,
      "value": "pay",
      "price": 20000
    },
    {
      "name": "Thanh toán khi nhận hàng",
      "img": imgPayMoney,
      "value": "paymoney",
      "price": 30000
    },
  ];

  return (
    <div className="flex shadow-md hover:shadow-lg">
      <div className="bg-white text-center w-[300px] min-h-[525px] border-r border-Black5">
        <h5 className="p-2 font-bold">Thông tin đăng nhập</h5>
        <NavLink className="text-left p-2"><p className="text-DarkBlue underline underline-offset-2 ml-4">Đăng nhập để lấy thông tin ...</p></NavLink>
        <input
          type="text"
          value={checkoutInfo.nameShip}
          onChange={(e) => setCheckoutInfo(prev => ({ ...prev, nameShip: e.target.value }))}
          className="border-2 border-Black10 p-1 shadow mx-auto focus:shadow-md my-1x outline-0 w-[270px] rounded-md"
          placeholder="Họ và tên ..." />
        <input
          type="text"
          value={checkoutInfo.phoneShip}
          onChange={(e) => setCheckoutInfo(prev => ({ ...prev, phoneShip: e.target.value }))}
          className="border-2 border-Black10 p-1 shadow mx-auto focus:shadow-md my-1x outline-0 w-[270px] rounded-md"
          placeholder="Số điện thoại ..." />
        <textarea
          value={checkoutInfo.addressShip}
          onChange={(e) => setCheckoutInfo(prev => ({ ...prev, addressShip: e.target.value }))}
          className="border-2 border-Black10 p-1 shadow mx-auto focus:shadow-md my-1x outline-0 w-[270px] min-h-[90px] rounded-md"
          placeholder="Địa chỉ ..." />
        <textarea
          value={checkoutInfo.note}
          onChange={(e) => setCheckoutInfo(prev => ({ ...prev, note: e.target.value }))}
          className="border-2 border-Black10 p-1 shadow mx-auto focus:shadow-md my-1x outline-0 w-[270px] rounded-md min-h-[90px]"
          placeholder="Ghi chú">
        </textarea>
        <NavLink className="text-right"><p className="text-DarkBlue underline underline-offset-2 mr-4">Điều khoản sử dụng</p></NavLink>
      </div>
      <div className="w-[300px] bg-white text-center">
        <h5 className="p-2 font-bold text-left">Vận chuyển</h5>
        <div className="flex py-2 gap-2 rounded-md shadow-md items-center w-[270px] mx-auto">
          <img src={imgTruck} className="h-[30px] w-[30px] ml-2" alt="Xe tải" />
          <h6 className="font-bold ">Phí vận chuyển</h6>
          <p className="font-bold line-through">{enPriceVnd(checkoutInfo.priceShip)}Đ</p>
        </div>
        <div className="border-b-2 h-[15px] w-[270px] mx-auto">
        </div>
        <h5 className="p-2 font-bold">Phương thức thanh toán</h5>
        {payMethod.map((item, index) => (
          <div key={index} className="flex justify-between m-2 w-[270px] mx-auto min-h-[45px] items-center border-2 border-Black50">
            <div className="pl-1x">
              <input id={item.value}
                type="radio" checked={checkoutInfo.paymentType === item.value}
                name="method_pay" onChange={(e) => {
                  if (e.target.value) {
                    setCheckoutInfo(prev => ({
                      ...prev,
                      paymentType: item.value,
                      paymentTypeName: item.name,
                      priceShip: item.price
                    }))
                  }
                }} value={item.value} />
              <label htmlFor={item.value}>{item.name}</label>
            </div>
            <img src={item.img} className="h-[45px] w-[45px] object-cover" alt={item.value} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfroDeliver
