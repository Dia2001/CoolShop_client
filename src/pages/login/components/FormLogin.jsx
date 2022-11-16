import React, { useState, useContext, useEffect } from "react";
import imgLogo from "../../../assets/logo.png";
import AuthService from "../../../services/AuthService";
import { AppContext } from '../../../Providers/AppContext'
import { Link, useNavigate } from "react-router-dom";

import { HiOutlineEyeOff as EyeOff, HiOutlineEye as Eye } from "react-icons/hi";
import config from "../../../config";

const FormLogin = () => {
  const { setToken } = useContext(AppContext)
  const navigate = useNavigate()
  const [isShowPass, setIsShowPass] = useState(false);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    if (userName === '') {
      alert('Hãy nhập tài khoản');
      return
    }

    if (password === '') {
      alert('Hãy nhập password');
      return
    }

    const result = await AuthService.login({ username: userName, password })

    if (result.success) {
      localStorage.setItem("token", result.data)
      setToken(result.data)
      navigate("/")
    } else {
      alert('Tên tài khoản hoặc mật khẩu không chính xác!')
    }
  }
  //detect key enter
  useEffect(() => {
    const keyDownHandler = event => {
      // console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        // 👇️ your logic here
        handleLogin();
       
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [userName,password]);

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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="relative w-full py-2">
          <h6>Mật khẩu</h6>
          <input
            type={`${isShowPass ? 'text' : 'password'}`}
            className="p-2x w-full rounded-md shadow-md"
            placeholder="Nhập mật khẩu ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isShowPass ? (
            <EyeOff className="absolute right-2 bottom-4" onClick={() => setIsShowPass(!isShowPass)} size={35} />
          ) : (
            <Eye className="absolute right-2 bottom-4" onClick={() => setIsShowPass(!isShowPass)} size={35} />
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
        <button className="px-4x py-2x bg-DarkBlue hover:opacity-75 text-white font-bold rounded-md "
          onClick={handleLogin} >
          <h5>Đăng nhập</h5>
        </button>
      </div>
      <Link to={config.routes.register}
        className="w-[80%] block mx-auto mt-3x mb-5x">
        <h6 className="underline underline-offset-1 text-DarkBlue italic">Đăng ký tài khoản mới</h6>
      </Link>
    </div>
  );
};

export default FormLogin;
