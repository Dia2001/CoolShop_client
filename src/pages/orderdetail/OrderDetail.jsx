import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import config from '../../config'
import OrderService from '../../services/OrderService'
import HeaderInfoAndProgress from './component/HeaderInfoAndProgress'
import TableOrderDetail from './component/TableOrderDetail'
import { ProductContext } from '../../Providers/ProductContext'
import { orderStatus } from '../../common/Contants'

const OrderDetail = () => {
  const { isChange, findColorById, findSizeById } = useContext(ProductContext)
  const navigate = useNavigate()
  const params = useParams()
  const orderId = params.orderId
  const [order, setOrder] = useState({})

  useEffect(() => {
    fetchApiOrder()
    document.title = 'Chi tiết đơn - CoolShop'
  }, [isChange])

  const fetchApiOrder = async () => {
    if (orderId) {
      const result = await OrderService.getOrderById(orderId)

      if (result.success) {
        let totalPrice = 0

        let orderData = result.data
        const orderTmp = {
          ...orderData,
          status: orderStatus[orderData.orderStatusId],
          date: orderData.createDate,
          orderDetail: orderData.orderDetail.map((item) => {
            let size = findSizeById(item.sizeId)
            let color = findColorById(item.colorId)
            let description = `Màu: ${color ? color.name : ''} , Size: ${size ? size.name : ''}`
            totalPrice += item.price * item.quantity

            return {
              ...item,
              name: item.productName,
              description: description,
              amount: item.quantity,
              img: config.urlImageProduct + item.productImage,
            }
          })
        }
        orderTmp.totalPrice = totalPrice
        setOrder(orderTmp)
        return
      }
    }
    navigate(config.routes.other)
  }

  return (
    <div className="pt-3x pb-5x bg-LightBlue/20">
      <div className="w-[1240px] mx-auto">
        <HeaderInfoAndProgress order={order} />
        <TableOrderDetail order={order} />
      </div>
    </div>
  )
}

export default OrderDetail
