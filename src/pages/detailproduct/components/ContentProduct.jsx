import React, { useContext, useEffect, useState } from "react";
import IntroProduct from "./subcomponents/IntroProduct";
import OptionBuyProduct from "./subcomponents/OptionBuyProduct";
import OptionsProduct from "./subcomponents/OptionsProduct";
import PriceAndQuality from "./subcomponents/PriceAndQuality";
import { ProductDetailContext } from '../ProductDetailContext'
import CartService from '../../../services/CartService'
import useCarts from '../../../hooks/useCarts'
import { ProductContext } from "../../../Providers/ProductContext";

const ContentProduct = () => {
  const { product, quantities, getQuantityByColorIdAndSizeId } = useContext(ProductDetailContext)
  const { setIsChange } = useContext(ProductContext)
  const [colorIdSelected, setColorIdSelected] = useState()
  const [sizeIdSelected, setSizeIdSelected] = useState()
  const [quantity, setQuantity] = useState(0)

  useCarts()

  useEffect(() => {
    if (product) {
      if (sizeIdSelected && colorIdSelected) {
        setQuantity(getQuantityByColorIdAndSizeId(colorIdSelected, sizeIdSelected))
      } else {
        setQuantity(product.totalQuantity)
      }
    }
  }, [sizeIdSelected, colorIdSelected, product, quantities])

  const handleAddToCart = async (quantityOrder) => {
    const result = await CartService.addProductToCart(product.productId, sizeIdSelected, colorIdSelected, quantityOrder)
    if (result.success) {
      setIsChange(prev => prev + 1)
      alert("Thêm sản phẩm vào giỏ hảng thành công")
    }
  }

  return (
    <div className="grow p-2x mt-1 border-l">
      <IntroProduct />
      <PriceAndQuality quantity={quantity} />
      <OptionsProduct
        colorIdSelected={colorIdSelected}
        setColorIdSelected={setColorIdSelected}
        sizeIdSelected={sizeIdSelected}
        setSizeIdSelected={setSizeIdSelected} />
      <OptionBuyProduct
        quantity={quantity}
        colorIdSelected={colorIdSelected}
        sizeIdSelected={sizeIdSelected}
        handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default ContentProduct;
