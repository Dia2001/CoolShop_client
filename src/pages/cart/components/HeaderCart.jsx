import React from 'react'

const HeaderCart = (props) => {
  return (
    <div className="flex justify-between py-2x px-3x rounded-md shadow-md items-center bg-white">
        <h4 className="font-semibold text-ActiveColor">Giỏ hàng</h4>
        <h5 className="font-semibold text-ActiveColor">Sản phẩm ({props.length})</h5>
    </div>
  )
}

export default HeaderCart