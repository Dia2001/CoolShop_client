import React from 'react'
import imgShoes from '../../../assets/demo-shoes.jpg'
import SlideShowItems from './SlideShowItems';
const OtherItems = () => {
    const shoes=[
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
        {
            "name":"Giày da nam cao cấp, sang trọng, thương hiệu CoolShop",
            "img":imgShoes,
        },
    ]; 
  return (
    <div className="mx-auto max-w-[1240px] py-4x">
        <h4 className="font-bold mb-3x text-left">Phụ kiện khác: </h4>
        <SlideShowItems listItem={shoes} category="Giày"/>
        <SlideShowItems listItem={shoes} category="Giày"/>
        <SlideShowItems listItem={shoes} category="Giày"/>
        <SlideShowItems listItem={shoes} category="Giày"/>
        <SlideShowItems listItem={shoes} category="Giày"/>
    </div>
  )
}

export default OtherItems