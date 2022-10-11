import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
const MenuTabLayout = ({ children }) => {

  const [isChoose,SetIsChoose] = useState([false,false,false,false]);
  const setChooseOnly=(n)=>{
      const tmp=isChoose
      if(n!=null)
      for(let i=0;i<tmp.length;i++){
        if(n!==i){
          tmp[i]=false;
        }
        else
          tmp[i]=true;
      }
      SetIsChoose(tmp);
  }

  //Toi muon dung mau thoi de tai sung dung nhung cach thiet lap rieng biet opacity khong duoc sai!
  const colorsBg = [
    "bg-ActiveColor/20",
    "bg-ErrorColor/20",
    "bg-LightBlue/20",
    "bg-WarningColor/20",
  ];

  const [colorBg, setColorBg] = useState(colorsBg[0]);
  const updateColorHandler = (e) => {
    let id = e.target.id;
    switch (id) {
      case "gh":
        setColorBg(colorsBg[0]);
        setChooseOnly(0);
        break;
      case "yt":
        setColorBg(colorsBg[1]);
        setChooseOnly(1);
        break;
      case "tt":
        setColorBg(colorsBg[2]);
        setChooseOnly(2);
        break;
      case "dh":
        setColorBg(colorsBg[3]);
        setChooseOnly(3);
        break;
      default:
        setColorBg(colorsBg[0]);
        setChooseOnly(0);
    }
  };
  return (
    <DefaultLayout>
      <div className={`w-full ${colorBg}`}>
        <div className="max-w-[878px] mx-auto p-2x">
          <div className="my-3x p-2 flex gap-6 bg-white rounded-md shadow-sm">
            <NavLink to="/gio-hang">
            <h6
              onClick={updateColorHandler}
              className={`${isChoose[0]&&'scale-110 underline underline-offset-2 text-ActiveColor'} transition font-bold cursor-pointer hover:underline hover:underline-offset-2 hover:text-ActiveColor`}
              id="gh"
            >
              Giỏ hàng
            </h6>
            </NavLink>
          <NavLink to="/yeu-thich">
            <h6
              onClick={updateColorHandler}
              className={`${isChoose[1]&&'scale-110 underline underline-offset-2 text-ErrorColor'} transition font-bold cursor-pointer hover:underline hover:underline-offset-2 hover:text-ErrorColor`}
              id="yt"
            >
              Sản phẩm yêu thích
            </h6>
          </NavLink>
          <NavLink to="/thong-tin-ca-nhan">
            <h6
              onClick={updateColorHandler}
              className={`${isChoose[2]&&'scale-110 underline underline-offset-2 text-LightBlue'} transition font-bold cursor-pointer hover:underline hover:underline-offset-2 hover:text-LightBlue`}
              id="tt"
            >
              Thông tin cá nhân
            </h6>
          </NavLink>
            <h6
              onClick={updateColorHandler}
              className={`${isChoose[3]&&'scale-110 underline underline-offset-2 text-WarningColor'} transition font-bold cursor-pointer hover:underline hover:underline-offset-2 hover:text-WarningColor`}
              id="dh"
            >
              Đơn hàng
            </h6>
          </div>
          {children}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MenuTabLayout;
