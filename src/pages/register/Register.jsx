import React from 'react'
import FormRegister from './components/FormRegister'
import FormSubmitEmail from './components/FormSubmitEmail'

const Register = () => {
  document.title = 'Tạo tài khoản - CoolShop'
  return (
    <div className="min-h-[100vh] flex justify-center items-center gap-4 bg-LightBlue/90">
      <FormRegister />
      <FormSubmitEmail />
    </div>
  )
}

export default Register
