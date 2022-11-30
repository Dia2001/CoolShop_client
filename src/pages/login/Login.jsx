import React from "react";
import FormLogin from "./components/FormLogin";
import ImgDecoration from "./components/ImgDecoration";
import imgClothes from "../../assets/clothes.jpg";
const Login = () => {

  document.title = 'Đăng nhập - CoolShop'

  return (
    <div
      style={{ backgroundImage: `url(${imgClothes})` }}
      className={`relative flex justify-center gap-4 items-center w-full h-[100vh] bg-no-repeat bg-cover bg-center`}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-BlackCool/30 z-10"></div>
      <FormLogin />
      <ImgDecoration />
    </div>
  );
};

export default Login;
