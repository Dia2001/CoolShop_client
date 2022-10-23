import { createContext } from 'react'

export const ProductDetailContext = createContext()

const ProductDetailContextProvider = ({ children, product }) => {
  return (
    <ProductDetailContext.Provider value={{
      product: product
    }}>
      {children}
    </ProductDetailContext.Provider>
  )
}

export default ProductDetailContextProvider
