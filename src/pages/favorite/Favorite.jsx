import React from 'react'
import HeaderFavorite from './components/HeaderFavorite'
import img from "../../assets/product-o1.png";
import ItemFavorite from './components/ItemFavorite';
import FooterFavorite from './components/FooterFavorite';
const Favorite = () => {

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

  document.title = 'Yêu thích - CoolShop'

  return (
    <div className="m-1 flex flex-col gap-2">
      <HeaderFavorite length={listProduct.length} />
      {listProduct.map((item, index) => (
        <ItemFavorite key={index} item={item} />
      ))}
      <FooterFavorite />
    </div>
  )
}

export default Favorite
