import { useContext, useEffect } from 'react'
import config from '../config'
import { AppContext } from '../Providers/AppContext'
import { ProductContext } from '../Providers/ProductContext'
import CartService from '../services/CartService'
import ProductService from '../services/ProductService'

function useCarts() {
  const { token, setCarts } = useContext(AppContext)
  const { isChange, findColorById, findSizeById } = useContext(ProductContext)

  useEffect(() => {
    fetchApiGetCarts()
  }, [isChange])

  const fetchApiGetCarts = async () => {
    if (token !== '') {
      const result = await CartService.getAll()
      if (result.success) {
        let productCarts = []

        for (let item of result.data) {

          let size = findSizeById(item.sizeId)
          let color = findColorById(item.colorId)
          let description = `Màu: ${color ? color.name : ''} , Size: ${size ? size.name : ''}`
          let max = item.quantity

          const resultQuantity = await ProductService.getQuantityProductById(item.productId)

          if (resultQuantity.success) {

            for (let quantity of resultQuantity.data) {
              if (quantity.colorId === item.colorId && quantity.sizeId === item.sizeId) {
                max = quantity.quantity
              }
            }
          }

          productCarts.push({
            ...item,
            max: max,
            name: item.productName,
            description: description,
            amount: item.quantity,
            img: config.urlImageProduct + item.productImage,
          })
        }
        setCarts(productCarts)
      }
    }
  }
}

export default useCarts
