import React from "react";
import { Link } from "react-router-dom";
import config from "../../../config";

const FooterOrders = () => {
  return (
    <div className="flex justify-center mt-3x mb-5x px-4 py-2 bg-white shadow-sm border-2 border-DarkBlue items-center">
      <Link
        to={config.routes.home}
        className="px-2x py-1x text-white rounded-md font-semibold italic bg-LightBlue hover:opacity-75 transtion">
        <h5>Trở về trang chủ!</h5>
      </Link>
    </div>
  );
};

export default FooterOrders;
