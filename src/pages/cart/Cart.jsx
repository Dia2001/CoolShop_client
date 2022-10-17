import React from 'react'
import FooterTransition from './components/FooterTransition'
import img from "../../assets/product-o1.png";
import ItemsCart from './components/ItemsCart';
import HeaderCart from './components/HeaderCart';

const Cart = () => {
  const listProduct = [
    //test code
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
    {
      name: "Quần jeans nam Ống suông co giãn thoáng mát",
      description: "Xanh, size: XS",
      amount: "2",
      price: "400000Đ",
      img: img,
    },
  ];
  return (
    <div className="m-1 flex flex-col gap-2">
      <HeaderCart length={listProduct.length}/>
      {listProduct.map((item,index)=>(
        <ItemsCart key={index} item={item}/>
      ))}
      <FooterTransition/>
    </div>
  )
}

export default Cart