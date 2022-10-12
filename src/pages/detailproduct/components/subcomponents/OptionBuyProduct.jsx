import React from 'react'
import {MdFavoriteBorder as Heart} from 'react-icons/md' 
import {BsShieldFillCheck as Shield,BsArrowLeftRight as Return} from 'react-icons/bs'
import {GiCardboardBoxClosed as Box} from 'react-icons/gi'
const OptionBuyProduct = () => {
  return (
    <div>
        <div className="flex justify-evenly py-1x items-start">
            <button className="px-5x py-2x bg-ActiveColor hover:opacity-75 text-white font-bold">
                <h6>Thêm vào giỏ hàng</h6>
            </button>
            <button className="p-1x text-white bg-ErrorColor hover:opacity-75">
                <Heart size={30}/>
            </button>
             {/* input number */}
      <div class="custom-number-input h-10 w-32 ">
        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            class=" bg-white border border-Black10 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span class="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            class="outline-none focus:outline-none text-center w-full bg-white border border-Black10 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value="1"
          ></input>
          <button
            data-action="increment"
            class="bg-white border border-Black10 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span class="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
        </div>
        <div className="flex justify-center">
        <button className="bg-DarkBlue uppercase text-white hover:opacity-75 py-2x w-[70%] mx-auto text-center">
            thanh toán
        </button>
        </div>
        <div className="flex justify-between items-center p-1x my-1x border">
            <div className="flex flex-col items-center text-Primary">
                <Shield size={60}/>
                <h6 className="text-BlackCool">Hoàn tiền</h6>
                <h6 className="text-BlackCool">200% nếu hàng giả</h6>
            </div>
            <div className="flex flex-col items-center text-Primary">
                <Box size={60}/>
                <h6 className="text-BlackCool">Mở hợp kiểm</h6>
                <h6 className="text-BlackCool">tra hàng</h6>
            </div>
            <div className="flex flex-col items-center text-Primary">
                <Return size={60}/>
                <h6 className="text-BlackCool">Đổi trả</h6>
                <h6 className="text-BlackCool">trong 7 ngày</h6>
            </div>
        </div>
    </div>
  )
}

export default OptionBuyProduct