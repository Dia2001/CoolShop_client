import React from 'react'
import HeaderInfoAndProgress from './component/HeaderInfoAndProgress'
import TableOrderDetail from './component/TableOrderDetail'

const OrderDetail = () => {
  return (
    <div className="pt-3x pb-5x bg-LightBlue/20">
        <div className="w-[1240px] mx-auto">
            <HeaderInfoAndProgress/>
            <TableOrderDetail/>
        </div>
    </div>
  )
}

export default OrderDetail