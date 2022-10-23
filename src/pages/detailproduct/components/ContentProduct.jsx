import React, { useContext, useEffect, useState } from "react";
import IntroProduct from "./subcomponents/IntroProduct";
import OptionBuyProduct from "./subcomponents/OptionBuyProduct";
import OptionsProduct from "./subcomponents/OptionsProduct";
import PriceAndQuality from "./subcomponents/PriceAndQuality";
import { ProductDetailContext } from '../ProductDetailContext'

const ContentProduct = () => {
  const { product, quantities, getQuantityByColorIdAndSizeId } = useContext(ProductDetailContext)

  const [colorIdSelected, setColorIdSelected] = useState()
  const [sizeIdSelected, setSizeIdSelected] = useState()
  const [quantity, setQuantity] = useState(0)
  const [isCanPayment, setIsCanPayment] = useState(false)

  useEffect(() => {
    if (product) {
      if (sizeIdSelected && colorIdSelected) {
        setQuantity(getQuantityByColorIdAndSizeId(colorIdSelected, sizeIdSelected))
      } else {
        setQuantity(product.totalQuantity)
      }
    }
  }, [sizeIdSelected, colorIdSelected, product, quantities])

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
        sizeIdSelected={sizeIdSelected} />
    </div>
  );
};

export default ContentProduct;
