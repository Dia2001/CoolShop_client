import React, { useContext, useEffect, useState } from 'react'
import FooterTransition from './components/FooterTransition'
import img from "../../assets/product-o1.png";
import ItemsCart from './components/ItemsCart';
import HeaderCart from './components/HeaderCart';
import { AppContext } from '../../Providers/AppContext'
import { ProductContext } from '../../Providers/ProductContext'
import CartService from '../../services/CartService';
import config from '../../config';

const Cart = () => {
  const { carts, setCarts } = useContext(AppContext)
  const { isChange, findColorById, findSizeById } = useContext(ProductContext)
  const [listProduct, setListProduct] = useState([])

  useEffect(() => {
    fetchApiCart()
  }, [isChange])

  const fetchApiCart = async () => {
    const result = await CartService.getAll()

    if (result.success) {
      let productCarts = result.data.map((item) => {
        console.log(item)
        let size = findSizeById(item.sizeId)
        let color = findColorById(item.colorId)
        let description = `Màu: ${color ? color.name : ''} , Size: ${size ? size.name : ''}`

        return {
          name: item.productName,
          description: description,
          amount: item.quantity,
          price: item.price,
          img: config.urlImageProduct + item.productImage,
          quantity: item.quanity
        }
      })
      setListProduct(productCarts)
      setCarts(productCarts)
    }
  }
  return (
    <div className="m-1 flex flex-col gap-2">
      <HeaderCart length={listProduct.length} />
      {listProduct.map((item, index) => (
        <ItemsCart key={index} item={item} />
      ))}
      <FooterTransition />
    </div>
  )
}

export default Cart
