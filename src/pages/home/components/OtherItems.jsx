import React, { useEffect, useRef, useState } from 'react'
import imgShoes from '../../../assets/demo-shoes.jpg'
import ProductService from '../../../services/ProductService';
import SlideShowItems from './SlideShowItems';

const OtherItems = () => {
  const [productOfCategories, setProductOfCategories] = useState([])
  const [isFull, setIsFull] = useState(false)
  const isFetch = useRef(false)

  useEffect(() => {
    if (!isFetch.current) {
      fetchApiGetProducOfCatetories()
    }
  }, [])

  const fetchApiGetProducOfCatetories = async () => {
    isFetch.current = true
    const result = await ProductService.getProductofcategory()
    if (result.success) {
      setProductOfCategories(result.data)
    }
    isFetch.current = false
  }

  return (
    <div className={`${isFull ? '' : 'h-[935px]'} relative overflow-y-hidden mx-auto max-w-[1240px] py-4x`}>
      <h4 className="font-bold mb-3x text-left">Danh mục sản phẩm khác: </h4>
      {productOfCategories.map((data, index) =>
        <SlideShowItems listItem={data.product} key={index} category={data.name} />
      )}
      <div className="h-16"></div>
      <div className='bg-white h-20 bottom-0 left-0 right-0 absolute'>
        {isFull ?
          <button onClick={() => setIsFull(!isFull)}
            className="font-semibold italic px-8 py-4 bg-WarningColor hover:opacity-75 text-white rounded-sm">
            Ẩn bớt
          </button>
          :
          <button onClick={() => setIsFull(!isFull)}
            className="font-semibold italic px-8 py-4 bg-LightBlue hover:opacity-75 text-white rounded-sm">
            Hiện thêm
          </button>
        }
      </div>
    </div>
  )
}

export default OtherItems
