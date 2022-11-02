import { useState, useEffect } from "react"

function SelectQuantity({ quantity, setQuantity, isCanChange, max, min }) {

  const [quantityTmp, setQuantityTmp] = useState(0)

  const handleChangeQuantity = (number) => {
    const regexQuantity = /^\d+$/
    if (regexQuantity.test(number)) {
      let num = Number.parseInt(number)
      if (num < 0) {
        setQuantityTmp(0)
      } else if (num > max) {
        setQuantityTmp(max)
      } else {
        setQuantityTmp(num)
      }
    } else {
      setQuantityTmp('')
    }
  }

  useEffect(() => {
    setQuantityTmp(quantity)
  }, [quantity])

  useEffect(() => {
    if (quantityTmp === '') {
      setQuantity(0)
    } else {
      setQuantity(quantityTmp)
    }
  }, [quantityTmp])

  return (
    <div className="custom-number-input h-10 w-32 ">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className={`bg-white border border-Black10 text-gray-600 h-full w-20 rounded-l outline-none ${isCanChange ? ' hover:text-gray-700 hover:bg-gray-400' : 'opacity-75'}`}
          disabled={!isCanChange || quantity === 0}
          onClick={() => handleChangeQuantity(quantity - 1)}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          min={min}
          type="text"
          max={max}
          readOnly={!isCanChange}
          className="focus:outline-none text-center w-full bg-white border border-Black10 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
          value={quantityTmp}
          onChange={(e) => handleChangeQuantity(e.target.value)}
        ></input>
        <button
          data-action="increment"
          className={`bg-white border border-Black10 text-gray-600 h-full w-20 rounded-l outline-none ${isCanChange ? ' hover:text-gray-700 hover:bg-gray-400' : 'opacity-75'}`}
          disabled={!isCanChange || quantity === max}
          onClick={() => handleChangeQuantity(quantity + 1)}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  )
}

export default SelectQuantity
