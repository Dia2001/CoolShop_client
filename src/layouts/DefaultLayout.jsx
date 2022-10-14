import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const DefaultLayout = ({children}) => {
 
  return (
    <div>
     
        <Header/>
        <div>{children}</div>
        <Footer/>
        
    </div>
  )
}

export default DefaultLayout