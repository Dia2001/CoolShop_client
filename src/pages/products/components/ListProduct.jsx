import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import CardProductV1 from '../../../components/CardProductV1';
import config from '../../../config';

const ListProduct = ({ products, optionFilter, handleFilter }) => {
  const [sort, setSort] = useState('default')

  useEffect(() => {
    if (optionFilter.sort !== '') {
      setSort(optionFilter.sort)
    }
  })

  const handleSelectOption = (s) => {
    setSort(s)
    handleFilter({
      ...optionFilter,
      sort: s
    })
  }

  return (
    <div className="col-span-10 ">
      <div className="flex justify-end m-2x mt-0 gap-2 items-center">
        <h6 className="font-bold">Sắp xếp theo: </h6>
        <select className="p-2 border border-Black25"
          value={sort}
          onChange={(e) => handleSelectOption(e.target.value)}
          name="sortby">
          <option value="default">Theo mặc định</option>
          <option value="az">Từ A-Z</option>
          <option value="za">Từ Z-A</option>
          <option value="cheap">Rẻ nhất</option>
          <option value="decrease">Giá giảm dần</option>
          <option value="newer">Mới nhất</option>
        </select>
      </div>
      {products.length > 0 ?
        <div className="grid grid-cols-10 grid-rows-2 gap-3 m-2x min-h-[585px]">
          {products.map((product, index) => (
            <div key={index} className="col-span-2 shadow-sm hover:shadow-md">
              <NavLink to={`${config.routes.product}/${product.slug}`}>
                <CardProductV1 product={product} />
              </NavLink>
            </div>
          ))}
        </div>
        : <h5 className='ml-10'>Không có sản phẩn nào để hiển thị!</h5>}
    </div>
  )
}

export default ListProduct
