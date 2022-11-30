import React, { useContext, useEffect, useState } from 'react'
import glassesImg from '../../../assets/sunglasses.svg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { ProductContext } from '../../../Providers/ProductContext'

const MenuCategories = ({ optionFilter, handleFilter }) => {
  const { categories, findCategoryById } = useContext(ProductContext)
  const [title, setTitle] = useState('Tất cả')

  useEffect(() => {
    let titleTmp = "Tất cả"
    if (optionFilter.categoriesId !== '') {
      let category = findCategoryById(Number.parseInt(optionFilter.categoriesId))
      if (category) {
        titleTmp = category.name
      }
    }
    document.title = titleTmp + ' - CoolShop'
    setTitle(titleTmp)
  }, [optionFilter])

  const handleChoseCategory = (categoryId) => {
    handleFilter({
      ...optionFilter,
      categoriesId: categoryId
    })
  }

  return (
    <div className="w-[1240px] mx-auto text-center">
      <h3 className="font-bold text-DarkBlue">{title}</h3>
      <h4 className="font-bold text-LightBlue">Danh mục</h4>
      <div className="flex gap-2 overflow-x-hidden mb-10 justify-center">
        <Tippy content="Tất cả">
          <p onClick={() => handleChoseCategory('')}
            className={`w-[80px] h-[40px] rounded-xl border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue ${'' === Number.parseInt(optionFilter.categoriesId) ? ' bg-gray-100' : ''}`}>
            Tất cả</p>
        </Tippy>
        {categories.map((item, index) => (
          <Tippy key={index} content={item.name}>
            <p onClick={() => handleChoseCategory(item.categoryId)}
              className={`w-[80px] h-[40px] rounded-xl border border-Black50 cursor-pointer hover:shadow-md hover:border-LightBlue ${item.categoryId === Number.parseInt(optionFilter.categoriesId) ? ' bg-gray-100' : ''}`}>
              {item.name}
            </p>
          </Tippy>
        ))}
      </div>
    </div >
  )
}
// Nam: dãy màu xanh 
// Nữ: màu vàng
// Quý ông: BlackCool
//set thêm opacity nếu cần thiết, cố gắng sử dụng màu trong hệ thống.
export default MenuCategories
