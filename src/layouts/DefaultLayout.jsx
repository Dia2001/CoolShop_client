import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import useProfile from '../hooks/useProfile'
import { ProductContextProvider } from '../Providers/ProductContext'

const DefaultLayout = ({ children }) => {

  useProfile()

  return (
    <ProductContextProvider>

      <Header />
      <div>{children}</div>
      <Footer />

    </ProductContextProvider>
  )
}

export default DefaultLayout
