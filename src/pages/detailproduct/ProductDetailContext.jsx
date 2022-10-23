import { createContext } from 'react'

export const ProductDetailContext = createContext()

const ProductDetailContextProvider = ({ children, product, quantities }) => {

  const getQuantityByColorIdAndSizeId = (colorId, sizeId) => {

    for (let quantity of quantities) {
      if (quantity.colorId === colorId && quantity.sizeId === sizeId) {
        return quantity.quantity
      }
    }
    return 0
  }

  return (
    <ProductDetailContext.Provider value={{
      product: product,
      quantities: quantities,
      getQuantityByColorIdAndSizeId,
    }}>
      {children}
    </ProductDetailContext.Provider>
  )
}

export default ProductDetailContextProvider
