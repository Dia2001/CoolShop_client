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

  const getQuantityByColorId = (colorId) => {
    let quantity = 0
    for (let q of quantities) {
      if (q.colorId === colorId) {
        quantity += q.quantity
      }
    }
    return quantity
  }

  const getQuantityBySizeId = (sizeId) => {
    let quantity = 0
    for (let q of quantities) {
      if (q.sizeId === sizeId) {
        quantity += q.quantity
      }
    }
    return quantity
  }

  return (
    <ProductDetailContext.Provider value={{
      product: product,
      quantities: quantities,
      getQuantityByColorIdAndSizeId,
      getQuantityByColorId,
      getQuantityBySizeId
    }}>
      {children}
    </ProductDetailContext.Provider>
  )
}

export default ProductDetailContextProvider
