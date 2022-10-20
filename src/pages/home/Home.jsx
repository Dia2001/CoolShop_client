import React, { useState } from "react";

import heroImg from "../../assets/hero-img.png";
import galleryImg1 from '../../assets/galleryimg/gallery-1.jpg';
import galleryImg2 from '../../assets/galleryimg/gallery-2.jpg';
import galleryImg3 from '../../assets/galleryimg/gallery-3.jpg';
import galleryImg4 from '../../assets/galleryimg/gallery-4.png';
import galleryImg5 from '../../assets/galleryimg/gallery-5.jpg';
import galleryImg6 from '../../assets/galleryimg/gallery-6.jpg';
import fashionImg from '../../assets/fashion.png';
import fashionMenImg from '../../assets/fashion-main.jpg';
import vestSvg from '../../assets/vest-svgrepo-com.svg';
import staffImg from '../../assets/assistant-staff.jpg';
import SlideImgs from "./components/SlideImgs";


const Home = () => {
  const [mainImg,setMainImg]=useState(galleryImg1);
  const getValueHandler =(event)=>{
    const newImg=event.target.src;
      setMainImg(newImg);
  };
  
  return (
    <div className="min-h-[100vh]">
      <div className="relative">
      <img
        className=" h-[653px] w-full object-cover object-top"
        src={heroImg}
        alt="Ảnh trang chủ"
      />
      <div className="sologan-brand absolute bottom-0 left-0 w-full h-[280px] text-right pr-52">
        <h1 className="font-bold text-white ">Thời trang nam</h1>
        <h5 className="font-bold text-white ">
          Nam tính - Sang trọng - Lịch lãm
        </h5>
      </div>
      </div>
      <div className="max-w-[768px] mx-auto text-center mt-3x mb-4x">
        <h3 className="font-bold">Lời giới thiệu</h3>
        <h6 className="text-Black50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          fuga maiores quod labore harum expedita et culpa dignissimos, vitae
          distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reiciendis ea, sequi minima molestias facere dolore veritatis
          accusamus officia consequatur obcaecati.
        </h6>
      </div>
      <hr className="max-w-[1240px] mx-auto" />
      <div className="mt-3x text-center">
        <h3 className="font-bold mt-2x mb-4x">Sản phẩm nổi bật &amp;</h3>
        <SlideImgs/>
        <div className="flex justify-center w-[1240px] h-[600px] mx-auto gap-4 m-1x">
              <div className="basis-2/5">
              <img src={mainImg} className="object-cover object-top w-full h-full transition" alt="Ảnh lớn"/>

              </div>
              <div className="flex gap-2 basis-3/5 p-1x">
                  <div className="flex flex-col flex-1 gap-2">
                    <div className="basis-2/5 overflow-hidden rounded-md">
                      <img className="gallery-img  w-full h-full object-cover object-top transition hover:scale-105 hover:opacity-75" onMouseEnter={getValueHandler} src={galleryImg1} alt="Ảnh 1"/>
                    </div>
                    <div className="basis-3/5 overflow-hidden rounded-md">
                    <img className="gallery-img  w-full h-full object-cover object-top  transition hover:scale-105 hover:opacity-75" onMouseEnter={getValueHandler} src={galleryImg2} alt="Ảnh 1"/>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <div className="basis-3/5 overflow-hidden rounded-md">
                    <img className="gallery-img  w-full h-full object-cover object-top  transition hover:scale-105 hover:opacity-75" onMouseEnter={getValueHandler} src={galleryImg3} alt="Ảnh 1"/>
                    </div>
                    <div className="basis-2/5 overflow-hidden rounded-md">
                    <img className="gallery-img  w-full h-full object-cover object-top transition hover:scale-105 hover:opacity-75" onMouseEnter={getValueHandler} src={galleryImg4} alt="Ảnh 1"/>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <div className="basis-2/5  overflow-hidden rounded-md">
                    <img className="gallery-img  w-full h-full object-cover object-top transition hover:scale-105 hover:opacity-75 " onMouseEnter={getValueHandler} src={galleryImg5} alt="Ảnh 1"/>
                    </div>
                    <div className="basis-3/5  overflow-hidden rounded-md">
                    <img className="gallery-img  w-full h-full object-cover object-top transition hover:scale-105 hover:opacity-75" onMouseEnter={getValueHandler} src={galleryImg6} alt="Ảnh 1"/>
                    </div>
                  </div>
              </div>
        </div>
        <div className="w-[1240px] mx-auto my-2x">
            <h6 className="font-bold italic">Lịch sự - Tinh tế - Chuẩn mực </h6>
        </div>
        <div className="w-[1240px] mx-auto flex h-[230px] py-1x">
          <img src={fashionImg} className="basis-3/4" alt="fashion"/>
          <img src={fashionMenImg} className="basis-1/4" alt="fashionmen"/>
        </div>
        <div className="w-full h-[500px] bg-BlackCool flex justify-center">
          <div className="flex w-[1000px] h-[320px] mx-auto my-20 gap-2">
              <div className="relative basis-2/3 bg-white">
                <div className="p-1x text-left w-[70%]">
                  <h5 className="font-bold">Chúng tôi luôn lắng nghe khách hàng!</h5>
                  <h6 className="text-Black75">Với mong muốn đem tới những trải nghiệm mua sắm
                  tốt nhất, CoolShop rất mong nhận được những góp ý
                  từ phái quý khách hàng để có thể nâng cao trải
                  nghiệm dịch vụ và sản phẩm tốt hơn nữa.
                  </h6>
                  <button className="my-3x py-2x pl-1x pr-4x bg-BlackCool hover:bg-Black75 hover:opacity-90"><h6 className="font-semibold text-white">Để lại đóng góp của bạn</h6></button>
                </div>
                <img src={vestSvg} alt="" className="absolute bottom-2 right-2 h-[180px] w-[180px] rotate-45 opacity-75" />
              </div>
              <div className="basis-1/3 bg-white">
                <img className="object-cover w-full h-full" src={staffImg} alt="nhanvien"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
