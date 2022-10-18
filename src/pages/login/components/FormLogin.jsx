import React, { useState } from "react";
import imgLogo from "../../../assets/logo.png";

import { HiOutlineEyeOff as EyeOff, HiOutlineEye as Eye } from "react-icons/hi";
const FormLogin = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  return (
    <div className="min-h-[545px] w-[425px] bg-white rounded-b-[12px] z-20">
      <div className="w-full h-[20px] bg-BlackCool"></div>
      <div className="w-full h-[10px] bg-BlackCool my-1"></div>
      <img src={imgLogo} className="h-[55px] mx-auto" alt="logo" />
      <div className="w-[80%] mx-auto p-2">
        <div className="w-full py-2">
          <h6>Tên người dùng</h6>
          <input
            type="text"
            className="p-2x w-full rounded-md shadow-md"
            placeholder="Nhập tên ..."
          />
        </div>
        <div className="relative w-full py-2">
          <h6>Mật khẩu</h6>
          <input
            type={`${isShowPass?'text':'password'}`}
            className="p-2x w-full rounded-md shadow-md"
            placeholder="Nhập mật khẩu ..."
          />
          {isShowPass ? (
            <EyeOff className="absolute right-2 bottom-4" onClick={()=>setIsShowPass(!isShowPass)} size={35} />
          ) : (
            <Eye className="absolute right-2 bottom-4" onClick={()=>setIsShowPass(!isShowPass)} size={35} />
          )}
        </div>
      </div>
      <div className="w-[80%] mx-auto flex justify-between my-2x">
            <label className="flex gap-1">
              <input type="checkbox" />
              <h6>Lưu mật khẩu</h6>
            </label>
            <h6 className="underline underline-offset-1 text-DarkBlue">Bạn quên mật khẩu?</h6>
      </div>
      <div className="flex justify-center">
      <button className="px-4x py-2x bg-DarkBlue hover:opacity-75 text-white font-bold rounded-md ">
        <h5>Đăng nhập</h5>
      </button>
      </div>
     <div class="w-[80%] mx-auto mt-3x mb-5x">
     <h6 className="underline underline-offset-1 text-DarkBlue italic">Đăng ký tài khoản mới</h6>
     </div>
    </div>
  );
};

export default FormLogin;
