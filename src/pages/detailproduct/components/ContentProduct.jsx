import React from "react";
import IntroProduct from "./subcomponents/IntroProduct";
import OptionBuyProduct from "./subcomponents/OptionBuyProduct";
import OptionsProduct from "./subcomponents/OptionsProduct";
import PriceAndQuality from "./subcomponents/PriceAndQuality";

const ContentProduct = () => {
 
  return (
    <div className="grow p-2x mt-1 border-l">
      <IntroProduct/>
      <PriceAndQuality/>
      <OptionsProduct/>
      <OptionBuyProduct/>
    </div>
  );
};

export default ContentProduct;
