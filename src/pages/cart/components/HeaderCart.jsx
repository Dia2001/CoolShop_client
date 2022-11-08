import React from 'react'

const HeaderCart = ({ quantity, checkAll, setCheckAll }) => {

  return (
    <div className="flex justify-between py-2x px-3x rounded-md shadow-md items-center bg-white">
      <div className='flex'>
        <input type="checkbox"
          className="w-6 h-6 my-auto mr-5 cursor-pointer"
          checked={checkAll.c}
          onChange={(e) => setCheckAll({ s: 1, c: e.target.checked })} />
        <span>Chọn tất cả</span>
      </div>
      <h4 className="font-semibold text-ActiveColor">Giỏ hàng</h4>
      <h5 className="font-semibold text-ActiveColor">Sản phẩm ({quantity})</h5>
    </div>
  )
}

export default HeaderCart
