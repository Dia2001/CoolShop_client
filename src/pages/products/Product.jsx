import React, { useEffect, useState } from "react";
import OutStandingProduct from "./components/OutStandingProduct";
import ListProduct from "./components/ListProduct";
import MenuCategories from "./components/MenuCategories";
import WatchedProduct from "../../components/WatchedProduct";
import FilterProduct from "./components/FilterProduct";
import Paginate from '../../components/Paginate'
import ProductService from '../../services/ProductService'
import { useLocation, useNavigate } from "react-router-dom";

const pageSize = 10

const Product = () => {
  const navigate = useNavigate()
  const location = useLocation()
  let query = new URLSearchParams(location.search)
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [totalRecord, setTotalRecord] = useState(0)
  const [optionFilter, setOptionFilter] = useState({
    pageSize,
    pageNumber: 1,
    keyword: query.get('q') || '',
    brandId: query.get('b') || '',
    categoriesId: query.get('c') || '',
    sizeId: query.get('si') || '',
    colorId: query.get('cl') || '',
    price: query.get('p') || '',
    sort: query.get('s') || '',
  })

  useEffect(() => {
    fetchApiGetAllProduct(optionFilter)
  }, [])

  useEffect(() => {
    fetchApiGetAllProduct(optionFilter)
  }, [optionFilter])

  useEffect(() => {
    let query = new URLSearchParams(location.search)
    let options = {
      pageSize,
      pageNumber: 1,
      keyword: query.get('q') || '',
      brandId: query.get('b') || '',
      categoriesId: query.get('c') || '',
      sizeId: query.get('si') || '',
      colorId: query.get('cl') || '',
      price: query.get('p') || '',
      sort: query.get('s') || '',
    }
    setOptionFilter(options)
  }, [location.search])

  const fetchApiGetAllProduct = async (options) => {
    const result = await ProductService.getFilter(options)
    if (result.success) {
      setProducts(result.data.products)
      setTotalPage(result.data.totalPage)
      setCurrentPage(result.data.currentPage)
      setTotalRecord(result.data.totalRecord)
    }
  }

  const handlePaging = (page) => {
    setOptionFilter({ ...optionFilter, pageNumber: page })
  }

  const handleFilter = (options) => {
    setOptionFilter(options)
  }

  return (
    <div className="w-full min-h-[100vh]">
      <OutStandingProduct />
      <MenuCategories optionFilter={optionFilter} handleFilter={handleFilter} />
      <div className="grid grid-cols-12 gap-4 w-[1240px] mx-auto">
        <FilterProduct optionFilter={optionFilter} handleFilter={handleFilter} />
        <ListProduct products={products} optionFilter={optionFilter} handleFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-12 gap-4 w-[1240px] mx-auto">
        <div className=" col-span-2">
        </div>
        {/* <div className="col-span-10 ml-1"> */}
        <div className="flex justify-center">
          <Paginate totalPage={totalPage} currentPage={currentPage} callback={handlePaging} />
        </div>
      </div>
      {/*<WatchedProduct />*/}
    </div>
  );
};

export default Product;
