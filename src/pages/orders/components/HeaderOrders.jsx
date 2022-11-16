import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { orderStatus } from '../../../common/Contants'

const HeaderOrders = ({ typeShow, setTypeShow }) => {
  const optionDefault = { "value": "default", "label": "Tất cả các đơn" }
  const [optionsFilter, setOptionsFileter] = useState([
    optionDefault
  ])

  useEffect(() => {
    let options = []
    options.push(optionDefault)
    for (let key in orderStatus) {
      options.push({
        value: key,
        label: orderStatus[key]
      })
    }
    setOptionsFileter(options)
  }, [])

  return (
    <div className="flex gap-4 justify-between items-center my-3x px-2x py-1x rounded-sm shadow-sm bg-white">
      <h4 className="text-WarningColor font-bold">Đơn hàng</h4>
      <div className="flex gap-2">
        <input type="text" className="shadow-sm outline-none focus:shadow-md rounded-full w-[355px] pl-4x pr-2x py-1x" placeholder="Tìm kiếm ..." />
        <button className="p-1x text-center rounded-full hover:shadow-md h-[45px] w-[45px] border border-Black10">
          <BsSearch size={30} />
        </button>
      </div>
      {/*select multivalues */}
      <div>
        <h6 className="mb-1 font-bold">Sắp xếp theo: </h6>
        <select
          value={typeShow}
          className="p-2 border border-Black25"
          onChange={(e) => setTypeShow(e.target.value)}
          name="sortby">
          {optionsFilter.map((item, index) => (
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default HeaderOrders
