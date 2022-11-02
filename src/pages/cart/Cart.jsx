import React, { useContext, useEffect, useState } from 'react'
import FooterTransition from './components/FooterTransition'
import img from "../../assets/product-o1.png";
import ItemsCart from './components/ItemsCart';
import HeaderCart from './components/HeaderCart';
import { AppContext } from '../../Providers/AppContext'
import { ProductContext } from '../../Providers/ProductContext'
import CartService from '../../services/CartService';
import ProductService from '../../services/ProductService';
import config from '../../config';

const Cart = () => {
  const { carts, setCarts } = useContext(AppContext)
  const { isChange, findColorById, findSizeById } = useContext(ProductContext)
  const [listProduct, setListProduct] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalPrices, setTotalPrices] = useState([])
  const [checkAll, setCheckAll] = useState({ s: 0, c: false })

  useEffect(() => {
    fetchApiCart()
  }, [isChange])

  const fetchApiCart = async () => {
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

      setListProduct(productCarts)
      setCarts(productCarts)
    }
  }

  useEffect(() => {
    let checked = 0
    setTotalPrice(totalPrices.reduce((curr, item) => {
      if (item.selected) {
        curr += item.price
        checked++
      }
      return curr
    }, 0))

    if (listProduct.length > 0 && checked === listProduct.length) {
      setCheckAll({ s: 0, c: true })
    } else {
      setCheckAll({ s: 0, c: false })
    }
  }, [totalPrices])

  useEffect(() => {
    if (checkAll.s === 1) {
      setTotalPrices(prev => prev.map((item) => ({ ...item, selected: checkAll.c })))
    }
  }, [checkAll])

  const setPrice = (index, price) => {
    setTotalPrices(prev => {
      let prices = [...prev]
      prices[index] = price
      return prices
    })
  }

  return (
    <div className="m-1 flex flex-col gap-2">
      <HeaderCart quantity={listProduct.length} totalPrices={totalPrices}
        checkAll={checkAll} setCheckAll={setCheckAll} />
      {listProduct.map((item, index) => (
        <ItemsCart key={index} index={index} item={item} totalPrice={totalPrices[index]}
          setTotalPrice={(price) => setPrice(index, price)} />
      ))}
      <FooterTransition totalPrice={totalPrice} />
    </div>
  )
}

export default Cart
