import React, { useEffect, useState } from "react";
import OutStandingProduct from "./components/OutStandingProduct";
import ListProduct from "./components/ListProduct";
import MenuCategories from "./components/MenuCategories";
import WatchedProduct from "../../components/WatchedProduct";
import FilterProduct from "./components/FilterProduct";
import Paginate from '../../components/Paginate'
import ProductService from '../../services/ProductService'

const pageSize = 6

const Product = () => {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [totalRecord, setTotalRecord] = useState(0)

  useEffect(() => {
    fetchApiGetAllProduct()
  }, [])

  const fetchApiGetAllProduct = async (page) => {
    const result = await ProductService.getFilter({
      pageSize: pageSize,
      pageNumber: page || currentPage,
    })
    if (result.success) {
      setProducts(result.data.products)
      setTotalPage(result.data.totalPage)
      setCurrentPage(result.data.currentPage)
      setTotalRecord(result.data.totalRecord)
    }
  }

  const handlePaging = (page) => {
    fetchApiGetAllProduct(page)
  }

  return (
    <div className="w-full min-h-[100vh]">
      <OutStandingProduct />
      <MenuCategories />
      <div className="grid grid-cols-12 gap-4 w-[1240px] mx-auto">
        <FilterProduct />
        <ListProduct products={products} />
      </div>
      <div className="grid grid-cols-12 gap-4 w-[1240px] mx-auto">
        <div className=" col-span-2">
        </div>
        <div className="col-span-10 ml-1">
          <Paginate totalPage={totalPage} currentPage={currentPage} callback={handlePaging} />
        </div>
      </div>
      <WatchedProduct />
    </div>
  );
};

export default Product;
