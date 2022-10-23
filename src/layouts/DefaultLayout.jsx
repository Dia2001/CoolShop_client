import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ProductContextProvider } from '../Providers/ProductContext'

const DefaultLayout = ({ children }) => {

  return (
    <ProductContextProvider>

      <Header />
      <div>{children}</div>
      <Footer />

    </ProductContextProvider>
  )
}

export default DefaultLayout
