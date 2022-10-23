import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ProductService from "../../services/ProductService";
import ContentProduct from "./components/ContentProduct";
import DescriptionProduct from "./components/DescriptionProduct";
import HeaderDetailProduct from "./components/HeaderDetailProduct";
import ImageProduct from "./components/ImageProduct";
import ReviewProduct from "./components/ReviewProduct";
import ProductDetailContext from './ProductDetailContext'

const DetailProduct = () => {

  const params = useParams()
  const productSlug = params.slug
  const [product, setProduct] = useState()

  useEffect(() => {
    fetchApiGetProduct(productSlug)
  })

  const fetchApiGetProduct = async (productId) => {
    const result = await ProductService.getById(productId)

    if (result.success) {
      setProduct(result.data)
      document.title = result.data.name
    }
  }

  return (
    <ProductDetailContext product={product}>
      <div className="bg-LightBlue/5">
        <div className="w-[1240px] mx-auto py-4x">
          <HeaderDetailProduct />
          <div className="flex gap-4 rounded-sm bg-white shadow-sm py-2x">
            <ImageProduct />
            <ContentProduct />
          </div>
          <DescriptionProduct />
          <ReviewProduct />
        </div>
      </div>
    </ProductDetailContext>
  );
};

export default DetailProduct;
