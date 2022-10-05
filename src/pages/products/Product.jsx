import React from "react";
import OutStandingProduct from "./components/OutStandingProduct";
import ListProduct from "./components/ListProduct";
import MenuCategories from "./components/MenuCategories";
import WatchedProduct from "../../components/WatchedProduct";
import FilterProduct from "./components/FilterProduct";
const Product = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <OutStandingProduct />
      <MenuCategories />
      <div className="grid grid-cols-12 gap-4 w-[1240px] mx-auto">
        <FilterProduct />
        <ListProduct/>
      </div>
        {/* đặt 1 thanh phân trang ở đây */}
        <WatchedProduct/>
    </div>
  );
};

export default Product;
