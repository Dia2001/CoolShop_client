import React, { useContext, useEffect, useState } from "react";
import { ProductDetailContext } from '../../ProductDetailContext'
import { enPriceVnd } from '../../../../utils'

const PriceAndQuality = ({ quantity }) => {
  const { product } = useContext(ProductDetailContext)
  const [status, setStatus] = useState('Hết hàng')

  useEffect(() => {
    if (quantity > 0) {
      setStatus(quantity)
    } else {
      setStatus('Hết hàng')
    }
  }, [quantity])

  return (
    <div className="flex justify-between p-1x border items-center">
      <div>
        <div className="flex gap-4">
          <h5 className="line-through">{product ? enPriceVnd(Number.parseInt((product.price / 100 * 30)) + product.price) : ''} Đ</h5>
          <h6 className="p-1 h-fit w-fit rounded-md bg-LightBlue text-white">-30%</h6>
        </div>
        <h5>{product ? enPriceVnd(product.price) : ''}Đ</h5>
      </div>
      <div>
        <h6>
          Tình trạng: <span className="font-bold">Mới</span>
        </h6>
        <br />
        <h6>
          Số lượng: <span className="font-bold">{status}</span>
        </h6>
      </div>
    </div>
  );
};

export default PriceAndQuality;
