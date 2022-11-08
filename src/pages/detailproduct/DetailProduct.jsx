import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import config from "../../config";
import GalleryService from "../../services/GalleryService";
import ProductService from "../../services/ProductService";
import ContentProduct from "./components/ContentProduct";
import DescriptionProduct from "./components/DescriptionProduct";
import HeaderDetailProduct from "./components/HeaderDetailProduct";
import ImageProduct from "./components/ImageProduct";

import ReviewProduct from "./components/ReviewProduct";
import PopupFormReview from "./components/subcomponents/PopupFormReview";
import ProductDetailContext from './ProductDetailContext'

const DetailProduct = () => {
  const [popUp, setPopUp] = useState(false);
  const params = useParams()
  const productSlug = params.slug
  const [product, setProduct] = useState()
  const [quantities, setQuanttities] = useState([])
  const [imagesProduct, setImagesProduct] = useState([])

  useEffect(() => {
    fetchApiGetProduct(productSlug)
  }, [])

  const fetchApiGetProduct = async (productId) => {
    const result = await ProductService.getById(productId)

    if (result.success) {
      setProduct(result.data)
      document.title = result.data.name
      const resultQuantity = await ProductService.getQuantityProductById(result.data.productId)
      const resultGallery = await GalleryService.getAllGalleryInProductById(result.data.productId)

      const images = []
      images.push(config.urlImageProduct + result.data.image)

      if (resultQuantity.success) {
        setQuanttities(resultQuantity.data)
      }

      if (resultGallery.success) {
        resultGallery.data.forEach(gallery => {
          images.push(config.urlImageProduct + gallery.thumbnail)
        })
      }

      console.log(images)
      setImagesProduct(images)
    }
  }

  return (
    <ProductDetailContext product={product} quantities={quantities}>
      {/* Nên bỏ popup vào useContext */}
      <PopupFormReview popUp={popUp} setPopUp={() => setPopUp(false)} />
      <div className="bg-LightBlue/5">
        <div className="w-[1240px] mx-auto py-4x">
          <HeaderDetailProduct />
          <div className="flex gap-4 rounded-sm bg-white shadow-sm py-2x">
            <ImageProduct imagesProduct={imagesProduct} />
            <ContentProduct />
          </div>
          <DescriptionProduct product={product} />
          <ReviewProduct />
        </div>
      </div>
    </ProductDetailContext>
  );
};

export default DetailProduct;
