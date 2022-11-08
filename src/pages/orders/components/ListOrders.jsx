import React, { useEffect, useState } from "react";
import { enPriceVnd } from '../../../utils'

const ListOrders = ({ orders, typeShow }) => {

  const [ordersShow, setOrderShow] = useState(orders)

  useEffect(() => {
    let ordersTmp = []

    if (typeShow === 'default') {
      ordersTmp = orders
    } else {
      ordersTmp = orders.filter(order => order.orderStatusId === typeShow)
    }

    console.log(orders, typeShow, ordersTmp)
    setOrderShow(ordersTmp)
  }, [typeShow, orders])

  return (
    <div className="bg-white shadow-md p-1x">
      {ordersShow.map((item, index) => (
        <div key={index} className="rounded-[12px] my-2x border border-Black75">
          <div className=" ml-1x py-1x pr-3x w-fit mb-2x border-b border-BlackCool font-semibold">
            <h6>{item.status}</h6>
          </div>
          {item.orderDetail.map((product, index) => (
            <div key={index} className="my-1x mx-1 shadow-sm flex gap-2">
              <div className="basis-1/4">
                <img
                  src={product.img}
                  className="h-[170px] w-[170px] object-cover object-bottom"
                  alt={product.name}
                />
              </div>
              <div className="basis-3/4">
                <h5 className="font-semibold">{product.name}</h5>
                <h6>{product.description}</h6>
                <div className="flex">
                  <h6 className="mr-4 w-fit border-2 border-Primary text-Primary rounded-[3px] px-1">
                    {product.price}Đ
                  </h6>
                  <h6 className="w-fit border-2 border-DarkBlue text-DarkBlue rounded-[3px] px-1">
                    x{product.amount}
                  </h6>
                </div>
              </div>
            </div>
          ))}
          <div className="flex p-1x mt-3x mb-2x justify-between">
            <button className="w-fit font-bold h-fit p-1x rounded-[6px] border border-DarkBlue text-DarkBlue hover:bg-DarkBlue hover:text-white transition">
              <h6>Xem chi tiết</h6>
            </button>
            <h5>Tổng cộng: {enPriceVnd(item.totalPrice)}Đ</h5>
          </div>
        </div>
      ))}
      {ordersShow.length === 0 ? <h5>Không có đơn hàng nào cả</h5> : ''}
    </div>
  );
};

export default ListOrders;
