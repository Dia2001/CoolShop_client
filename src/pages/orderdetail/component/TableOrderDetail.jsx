import React, { useEffect } from "react";
import imgProduct from "../../../assets/product-o1.png";
import logo from '../../../assets/logo-2.png'
import config from "../../../config";
import { enPriceVnd } from "../../../utils";
import { Link } from "react-router-dom";

const statusCancelOrder = [
  'created',
]

const FooterInfo = ({ order }) => {

  return (
    <div className="min-h-[120px] flex justify-between bg-white">
      <div className="flex justify-between p-2x w-[445px] min-h-[160px] m-2x border border-Black50 rounded-[3px] shadow-md">
        <div>
          <h6 className="font-semibold mb-1x">Ngày đặt hàng: {order.createDate}</h6>
          <h6 className="font-semibold mb-1x">Mã đơn hàng: {order.orderId}</h6>
          <h6 className="font-semibold mb-1x">Hình thức thanh toán: </h6>
        </div>
        <img src={logo} alt="logo" className="w-[100px] h-[100px] rounded-full shadow-md object-cover" />
      </div>
      <div className="flex justify-between m-2x ">
        <div className="text-right">
          {/* 
          <h6 className="my-1x">Tạm tính</h6>
          <h6 className="my-1x">Phí vận chuyển</h6>*/}
          <h6 className="my-1x font-bold">Tổng tiền</h6>
        </div>
        <div className="text-right">
          {/*
          <h6 className="my-1x">800.000đ</h6>
          <h6 className="my-1x">22.000đ</h6>*/}
          <h6 className="my-1x font-bold">{enPriceVnd(order.totalPrice)}đ</h6>
          <button className="w-fit py-1x px-2x bg-LightBlue rounded-[3px] hover:opacity-70 shadow-md text-white">
            Xuất đơn hàng
          </button>
          <br />
          {statusCancelOrder.includes(order.orderStatusId) ?
            <button className="w-fit py-1x px-2x bg-ErrorColor mt-4 rounded-[3px] hover:opacity-70 shadow-md text-white">
              Hủy đơn hàng
            </button> : ''}
        </div>
      </div>
    </div>
  );
}
const TableOrderDetail = ({ order }) => {

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2x inline-block min-w-full sm:px-6 lg:px-8 shadow-md">
          <div className="overflow-hidden rounded-[6px] ">
            <table className="min-w-full">
              <thead className="bg-white border-b border-Black25">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6>Sản phẩm</h6>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6>Loại</h6>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6> Số lượng</h6>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
                  >
                    <h6>Tạm tính</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(order.orderDetail) ?
                  order.orderDetail.map((item, index) => (
                    <tr key={index} className="bg-white h-[110px] border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="flex gap-4  text-sm font-medium text-gray-900">
                        <img
                          src={config.urlImageProduct + item.productImage}
                          alt="ảnh sản phẩm"
                          className="object-cover w-[110px] h-[110px]"
                        />
                        <div className="flex flex-col justify-between max-w-[295px]">
                          <h6 className="break-down min-w-0">{item.productName}</h6>
                          <Link to={config.routes.product + '/' + item.productId}
                            className="w-fit mx-3x my-1x px-3x py-1x rounded-[12px] bg-MainBlue text-DarkBlue hover:opacity-75 transition shadow-md">
                            Mua lại
                          </Link>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <h6>{item.description}</h6>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <h5 className="font-semibold">{item.quantity}</h5>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <h6>{enPriceVnd(item.price * item.quantity)}đ</h6>
                      </td>
                    </tr>
                  )) : ''}
              </tbody>
            </table>
          </div>
          <FooterInfo order={order} />
        </div>
      </div>
    </div>
  );
};

export default TableOrderDetail;
