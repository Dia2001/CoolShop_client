import { useEffect, useState, useContext } from 'react'
import OrderService from '../../services/OrderService'
import FooterOrders from './components/FooterOrders'
import HeaderOrders from './components/HeaderOrders'
import ListOrders from './components/ListOrders'
import { orderStatus } from '../../common/Contants'
import config from '../../config'
import { ProductContext } from '../../Providers/ProductContext'

function Orders() {
  const { isChange, findColorById, findSizeById } = useContext(ProductContext)
  const [orders, setOrders] = useState([])
  const [typeShow, setTypeShow] = useState('default')

  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = async () => {
    const result = await OrderService.getAll()

    if (result.success) {
      setOrders(result.data.map(order => {
        let totalPrice = 0
        const orderTmp = {
          ...order,
          status: orderStatus[order.orderStatusId],
          date: order.createDate,
          orderDetail: order.orderDetail.map((item) => {
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
        return orderTmp
      }))
    }
  }

  return (
    <div>
      <HeaderOrders typeShow={typeShow} setTypeShow={setTypeShow} />
      <ListOrders orders={orders} typeShow={typeShow} />
      <FooterOrders />
    </div>
  )
}

export default Orders
