import { createContext } from 'react'

export const ProductContext = createContext()

const ProductContextProvider = ({ children, product }) => {
  return (
    <ProductContext.Provider value={{
      product: product
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
