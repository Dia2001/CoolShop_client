import React from 'react'
import dollar from '../../../assets/dollar.svg'
import truck from '../../../assets/truck-2.svg'
import shield from '../../../assets/shield.svg'
import service24 from '../../../assets/service-24-hours.svg'
import logo from '../../../assets/logo-2.png'
import CardPolicy from './CardPolicy'
const Statement = () => {
    const policies=[
        {
            logo:dollar,
            title:"Hoàn tiền 150% nếu phát hiện hàng giả"
        },
        {
            logo:truck,
            title:"Miễn phí các hóa đơn có giá trị trên 200k"
        },
        {
            logo:service24,
            title:"Tổ tư vấn 24/7"
        },
        {
            logo:shield,
            title:"Luôn bảo vệ khách hàng"
        },
    ]
  return (
    <div className="mx-auto w-[1240px] py-4x">
        <div className="flex justify-center">
        <CardPolicy data={policies[3]}/>
        </div>
        <div className="flex justify-between items-center my-4x">
        <CardPolicy data={policies[0]}/>
        <div className="flex flex-col justify-center items-center shadow-lg shadow-Primary w-[300px] h-[300px] rounded-full ">
            <img src={logo} alt="logo" className="w-[80px] h-[80px] object-cover object-center"/>
            <h4 className="font-bold">Cam kết</h4>
        </div>
        <CardPolicy data={policies[2]}/>
        </div>
        <div className="flex justify-center">
        <CardPolicy data={policies[1]}/>
        </div>
    </div>
  )
}

export default Statement