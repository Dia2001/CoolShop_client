import { useState, createContext, useEffect } from 'react';
import React from 'react'

const AppContext = createContext();

// Context global cho ca ung dung
const ApplicationContext = ({ children }) => {

  // Khai bao cac state global
  const token = localStorage.getItem('token')
  const [userToken, setUserToken] = useState(token || ''); // Token khi user dang nhap 
  const [userLogin, setUserLogin] = useState(undefined) // Thong tin user dang dang nhap
  const [carts, setCarts] = useState([])
  const [cartsSelected, setCartsSelected] = useState([])

  const logout = () => {
    setUserLogin(undefined)
    setUserToken('')
  }

  const getCartPayment = () => {
    return carts.filter((cart) => {
      for (let id of cartsSelected) {
        if (cart.id === id) {
          return true
        }
      }
      return false
    })
  }

  useEffect(() => {
    localStorage.setItem("token", userToken)
  }, [userToken])

  return (
    <AppContext.Provider value={{
      token: userToken,
      setToken: setUserToken,
      userLogin,
      setUserLogin,
      logout,
      carts,
      setCarts,
      getCartPayment,
      cartsSelected,
      setCartsSelected
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ApplicationContext }

