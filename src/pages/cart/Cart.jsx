import React, { useContext, useEffect, useState } from 'react'
import FooterTransition from './components/FooterTransition'
import ItemsCart from './components/ItemsCart';
import HeaderCart from './components/HeaderCart';
import { AppContext } from '../../Providers/AppContext'
import config from '../../config';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const { carts, setCartsSelected } = useContext(AppContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalPrices, setTotalPrices] = useState([])
  const [checkAll, setCheckAll] = useState({ s: 0, c: false })

  document.title = 'Giỏ hàng - CoolShop'

  const handleCheckout = () => {
    let ids = []
    for (let index in totalPrices) {
      if (totalPrices[index].selected) {
        ids.push(carts[index].id)
      }
    }
    setCartsSelected(ids)
    navigate(config.routes.checkout)
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

    if (carts.length > 0 && checked === carts.length) {
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
      <HeaderCart quantity={carts.length} totalPrices={totalPrices}
        checkAll={checkAll} setCheckAll={setCheckAll} />
      {carts.map((item, index) => (
        <ItemsCart key={index} index={index} item={item} totalPrice={totalPrices[index]}
          setTotalPrice={(price) => setPrice(index, price)} />
      ))}
      {carts.length === 0 ? <h5>Không có sản phẩm nào cả</h5> : ''}
      <FooterTransition handleCheckout={handleCheckout} totalPrice={totalPrice} />
    </div>
  )
}

export default Cart
