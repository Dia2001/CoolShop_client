import React from "react";
import logo from "../assets/logo.png";
import faIcon from '../assets/fa-icon.png';
import ytbIcon from '../assets/youtubeicon.png';
import insIcon from '../assets/Instagram-Icon.png'; 
import gmailIcon from '../assets/gmail-icon.png';
import phoneIcon from '../assets/phone-icon.png';
const Footer = () => {
  return (
    <div className="w-[1240px] mx-auto">
      <div className="flex mt-4x">
        <div className="flex-1 text-center border border-Black25">
          <h4 className="uppercase my-4x">Giới thiệu</h4>
          <h6>Về CoolShop</h6>
          <h6>Liên hệ</h6>
          <h6>Tuyển dụng</h6>
          <h6>Tin tức</h6>
          <h6>Hệ thống cửa hàng</h6>
        </div>
        <div className="flex-1 text-center border border-Black25">
          <h4 className="uppercase my-4x">Tư vấn</h4>
          <h6>Tổ tư vấn</h6>
          <h6>Tư vấn chọn size</h6>
          <h6>Hỏi đáp</h6>
          <h6>Đăng ký nhận tin</h6>
        </div>
        <div className="flex-1 text-center border border-Black25">
          <h4 className="uppercase my-4x">Chính sách</h4>
          <h6>Chính sách ship hàng</h6>
          <h6>Chính sách thanh toán</h6>
          <h6>Hướng dẫn mua hàng</h6>
          <h6>Chính sách đổi sản phẩm</h6>
          <h6>Bảo mật thông tin cá nhân</h6>
        </div>
        <div className="flex-1 text-center border border-Black25">
          <h4 className="uppercase">mạng xã hội</h4>
          <div className="flex gap-4 justify-center">
            <img src={faIcon} alt="Facebook" className="w-[45px] h-[45px] rounded-full hover:shadow-md" />
            <img src={insIcon} alt="Instagram" className="w-[45px] h-[45px] rounded-full hover:shadow-md" />
            <img src={ytbIcon} alt="Youtube" className="w-[45px] h-[45px] rounded-full hover:shadow-md" />
          </div>
          <div className="ml-2x mb-4x">
            <h6 className="font-bold uppercase text-left p-2">Liên hệ:</h6>
            <img className="h-[60px] w-[60px] float-left rounded-full" src={phoneIcon} alt="Điện thoại"/>
            <h6 className="text-ActiveColor p-1x">098666777-028555666</h6>
          </div>
          <div className="ml-2x mb-4x">
          <h6 className="font-bold uppercase text-left p-2">email:</h6>
          <img className="h-[60px] w-[60px] float-left" src={gmailIcon} alt="Gmail"/>
           <h6 className="text-ErrorColor p-1x">info@coolshop.com.vn</h6>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-center h-[240px] mt-3x">
          <img src={logo} className=" h-[90px] mx-auto" alt="logo" />
        </div>
        <div className="border-t-2 border-Black10 text-center pt-1x pb-2x">
          <h6><span className="font-bold">Copyright: </span>2022 sdsdsdsdsdsđsdsdsd</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
