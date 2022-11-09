import React from 'react'
import { Link } from 'react-router-dom'
import imgadvert from '../../../assets/register-img.jpg'
import config from '../../../config'

const FormSubmitEmail = () => {
  return (
    <div
      style={{ backgroundImage: `url(${imgadvert})` }}
      className="relative flex justify-center items-center w-[655px] h-[765px] bg-cover bg-no-repeat bg-left-bottom shadow-md">
      <div className="w-[90%] flex flex-col gap-4 items-center">
        <h4 className="font-bold text-white px-2x py-4x bg-BlackCool/75">Cảm ơn bạn đã ghé thăm CoolShop</h4>
        <Link to={config.routes.login}
          className='text-white font-semibold py-2x px-4x bg-DarkBlue border-2 hover:bg-LightBlue transition border-white'>
          <h6>Đăng nhập</h6>
        </Link>
      </div>
      <div className="absolute flex justify-center items-center bottom-0 left-0 bg-white/95 h-[150px] w-full">
        <div className="">
          <h6 className="font-semibold">Bạn hãy nhập thông tin gmail để được nhận thông báo từ hệ thống!</h6>
          <div className="flex gap-8 w-full my-1x">
            <input type="text" placeholder="Nhập email vào đây ..." className="grow p-1x border border-Black50" />
            <button className="py-2x px-3x text-white bg-ErrorColor hover:opacity-75 font-semibold">
              <h6>Nhập email</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSubmitEmail
