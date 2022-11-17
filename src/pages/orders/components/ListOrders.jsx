import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import { enPriceVnd, fomartDateDMY } from "../../../utils";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import OrderContainer from "./OrderContainer";

const ListOrders = ({ orders, typeShow }) => {
  const [ordersShow, setOrderShow] = useState(orders);
  
  useEffect(() => {
    let ordersTmp = [];

    if (typeShow === "default") {
      ordersTmp = orders;
    } else {
      ordersTmp = orders.filter((order) => order.orderStatusId === typeShow);
    }
    setOrderShow(ordersTmp);
  }, [typeShow, orders]);

  
  return (
    <div className="bg-white shadow-md p-1x">
      {ordersShow.map((item, index) => (
        <OrderContainer key={index} item={item}/>
      ))}
      {ordersShow.length === 0 ? <h5>Không có đơn hàng nào cả</h5> : ""}
    </div>
  );
};

export default ListOrders;
