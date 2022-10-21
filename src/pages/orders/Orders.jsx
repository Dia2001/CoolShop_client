import React from 'react'
import FooterOrders from './components/FooterOrders'
import HeaderOrders from './components/HeaderOrders'
import ListOrders from './components/ListOrders'
import img from "../../assets/product-o1.png";
const Orders = () => {
  const testOrders=[
    {
      "status":"Giao thành công",
      "products":[
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
      ]
    },
    {
      "status":"Đang giao hàng",
      "products":[
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
      ]
    }
  ];
  return (
    <div>
      <HeaderOrders/>
      <ListOrders orders={testOrders}/>
      <FooterOrders/>
    </div>
  )
}

export default Orders