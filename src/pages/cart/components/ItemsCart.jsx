import React, { useEffect, useState } from "react";
import {
  BsPencilSquare as Modify,
  BsFillCartDashFill as RemoveCart,
} from "react-icons/bs";
import SelectQuantity from "../../../components/Inputs/SelectQuantity";
//thu vien them tooltip
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import ProductService from "../../../services/ProductService";

const ItemsCart = ({ item, index, totalPrice, setTotalPrice }) => {
  const [quantitySelect, setQuantitySelect] = useState(0)
  const [max, setMax] = useState(item.quantity)
  const [selected, setSelected] = useState(totalPrice ? totalPrice.selected : false)

  useEffect(() => {
    setQuantitySelect(item.quantity)
    fetchApiGetProduct(item.productId)
  }, [])

  useEffect(() => {
    if (totalPrice) {
      setSelected(totalPrice.selected)
    }
  }, [totalPrice])

  useEffect(() => {
    setTotalPrice({
      selected: selected,
      price: quantitySelect * item.price
    })
  }, [quantitySelect, selected])


  const fetchApiGetProduct = async (productId) => {
    const resultQuantity = await ProductService.getQuantityProductById(productId)

    if (resultQuantity.success) {

      for (let quantity of resultQuantity.data) {
        if (quantity.colorId === item.colorId && quantity.sizeId === item.sizeId) {
          setMax(quantity.quantity)
        }
      }
    }
  }

  return (
    <div className="relative gap-2 flex shadow-md bg-white ">
      <input type="checkbox"
        className="w-6 h-6 my-auto mr-2 ml-6 cursor-pointer"
        checked={selected}
        onChange={(e) => setSelected(e.target.checked)} />
      <img
        src={item.img}
        className="object-cover h-[120px] w-[120px]"
        alt={item.name}
      />
      <div className="w-[70%]">
        <h6>{item.name}</h6>
        <br />
        <p>{item.description}</p>
      </div>
      <div className="absolute bottom-1 right-2 flex justify-center items-center text-center gap-2">
        <h6 className="font-bold">{item.price}</h6>
        <Tippy content={'Xóa sản phẩm'}>
          <button className="rounded-full hover:opacity-75 text-white bg-ErrorColor p-2">
            <RemoveCart size={20} />
          </button>
        </Tippy>
        <Tippy content={'Thay đổi sản phẩm'}>
          <button className="rounded-full hover:opacity-75  text-white bg-ActiveColor p-2">
            <Modify size={20} />
          </button>
        </Tippy>
      </div>
      <SelectQuantity
        quantity={quantitySelect}
        setQuantity={setQuantitySelect}
        isCanChange={true}
        max={max}
        min={0}
      ></SelectQuantity>
    </div>
  )
}

export default ItemsCart;
