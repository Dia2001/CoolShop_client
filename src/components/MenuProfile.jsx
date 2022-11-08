import React, { useContext } from "react";
import imgAvatar from "../assets/avatar.jpg";
import { AiOutlineDoubleRight as Arrow } from "react-icons/ai";
import { BsUpload as Upload } from "react-icons/bs";
import { AppContext } from "../Providers/AppContext";
import { Link } from "react-router-dom";
import config from "../config";

const MenuProfile = ({ isShowProfile, setIsShowProfile }) => {

  const { logout, userLogin } = useContext(AppContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      {userLogin ?
        <div>
          <div onClick={setIsShowProfile} className={`${isShowProfile && 'hidden'} fixed top-0 left-0 w-full h-full bg-BlackCool/25 z-50`}></div>
          <div className={`${isShowProfile && 'translate-x-[100%]'} transition fixed right-0 top-0  backdrop-blur-md bg-white/90 rounded-l-[27px] h-[100vh] w-[450px] shadow-md z-50 `}>
            <button onClick={setIsShowProfile}>
              <Arrow
                size={40}
                className="absolute cursor-pointer top-2 left-2 p-1x shadow-md rounded-full hover:shadow-sm hover:bg-Black5 transition"
              />
            </button>
            <div className="relative  flex  justify-center my-4x">
              <img
                src={imgAvatar}
                className="h-[144px] w-[144px] rounded-full shadow-md"
                alt="Avatar"
              />
              <button className="absolute bottom-0 p-2 right-[35%] text-center rounded-full shadow-sm bg-GradientO1 text-white">
                <Upload size={20} />
              </button>
            </div>
            <h5 className="font-bold py-1x px-2x rounded-tl-[12px] w-fit mx-auto rounded-br-[6px] shadow-md">
              {userLogin.fullName}
            </h5>
            <div className="text-center font-semibold my-4x">
              <h6>{userLogin.email}</h6>
              <h6>{userLogin.phoneNumber}</h6>
            </div>
            <div className="flex flex-col w-[50%] mx-auto gap-8 items-center">
              <Link
                to={config.routes.profile}
                className="flex justify-center w-full px-4x py-2x hover:opacity-75 bg-Primary text-white font-semibold shadow-sm">
                <h6>Chỉnh sửa thông tin</h6>
              </Link>
              <Link
                to={config.routes.history}
                className="flex justify-center w-full px-4x py-2x hover:opacity-75 bg-WarningColor text-white font-semibold shadow-sm">
                <h6>Lịch sử đơn hàng</h6>
              </Link>
              <Link onClick={handleLogout}
                to={config.routes.login}
                className="flex justify-center w-full px-4x py-2x hover:opacity-75 bg-ErrorColor text-white font-semibold shadow-sm">
                Đăng xuất
              </Link>
            </div>
          </div>
        </div>
        : ''}
    </>);
};

export default MenuProfile;
