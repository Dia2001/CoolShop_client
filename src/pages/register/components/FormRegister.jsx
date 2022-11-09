import React, { useState } from "react";
import { HiOutlineEyeOff as EyeOff, HiOutlineEye as Eye } from "react-icons/hi";
import ReCAPTCHA from "react-google-recaptcha";
import { isName, isVietnamesePhoneNumber } from '../../../utils/Validate'
import AuthService from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";
import config from "../../../config";

const FormRegister = () => {
  const navegate = useNavigate()
  const [isShowPass, setIsShowPass] = useState(false);
  const [verfied, setVerifed] = useState(false);
  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleRegister = async () => {
    if (!isName(fullName)) {
      alert('Nhập họ tên')
      return
    }

    if (userName === '') {
      alert('Nhập tên người dùng')
      return
    }

    if (!isVietnamesePhoneNumber(phoneNumber)) {
      alert('Số điện thoại không hợp lệ')
      return
    }

    if (password === '') {
      alert('Nhập mật khẩu')
      return
    }

    if (password !== passwordConfirm) {
      alert('Mật khẩu nhập lại không đúng')
      return
    }

    const result = await AuthService.register(fullName, userName, phoneNumber, password)

    if (result.success) {
      alert('Đăng ký thành công! Hãy đăng nhập để sử dụng dịch vụ.')
      navegate(config.routes.login)
    }
  }

  const changeVerfied = (value) => {
    setVerifed(!verfied);
  };

  return (
    <div className="py-2x px-3x min-h-[765px] w-[440px] bg-white shadow-md rounded-r-[12px]">
      <h4 className="text-DarkBlue font-semibold">Đăng ký</h4>
      {/*<div className="flex gap-2">*/}
      <div className="my-1x">
        <div>
          <h6>Họ tên</h6>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2x w-full rounded-md shadow-md"
            placeholder="Nhập tên ..."
          />
        </div>
        {/*
        <div>
          <h6>Họ</h6>
          <input
            type="text"
            className="p-2x w-full rounded-md shadow-md"
            placeholder="Nhập họ ..."
          />
        </div>*/}
      </div>
      <div className="my-1x">
        <h6>tên người dùng</h6>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-2x w-full rounded-md drop-shadow-md"
          placeholder="Nhập tên người dùng ..."
        />
      </div>
      <div className="my-1x">
        <h6>Số điện thoại</h6>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="p-2x w-full rounded-md drop-shadow-md"
          placeholder="Nhập số điện thoại ..."
        />
      </div>
      <div className="relative my-1x">
        <h6>Nhập mật khẩu</h6>
        <input
          type={`${isShowPass ? "text" : "password"}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2x w-full rounded-md drop-shadow-md"
          placeholder="Nhập mật khẩu ..."
        />
        {isShowPass ? (
          <EyeOff
            className="absolute right-2 bottom-2"
            onClick={() => setIsShowPass(!isShowPass)}
            size={35}
          />
        ) : (
          <Eye
            className="absolute right-2 bottom-2"
            onClick={() => setIsShowPass(!isShowPass)}
            size={35}
          />
        )}
      </div>
      <div className="my-1x">
        <h6>Nhập lại mật khẩu</h6>
        <input
          type={`${isShowPass ? "text" : "password"}`}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="p-2x w-full rounded-md drop-shadow-md"
          placeholder="Nhập lại mật khẩu ..."
        />
      </div>
      <div className="my-2x flex justify-center">
        {/*only test captcha */}
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={changeVerfied}
        />
      </div>
      <div className="my-1x">
        <label className="flex gap-2">
          <input type="checkbox" />
          <h6 className="font-semibold italic">Bạn có đồng ý điều khoản.</h6>
        </label>
      </div>
      <div className="my-1x flex items-end justify-between">
        <h6 className="underline underline-offset-1 text-DarkBlue italic">Điều khoản sử dụng</h6>
        <button
          onClick={handleRegister}
          className="text-white font-bold py-2x px-4x rounded-md bg-WarningColor hover:opacity-75 transition duration-300 disabled:bg-Black50" disabled={!verfied}>
          <h5>Đăng ký</h5>
        </button>
      </div>
    </div>
  );
};

export default FormRegister;
