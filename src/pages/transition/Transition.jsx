import { useContext, useEffect, useRef, useState } from "react";
import InfroDeliver from "./components/InfroDeliver";
import PayProduct from "./components/PayProduct";
import { AppContext } from '../../Providers/AppContext'
import { isVietnamesePhoneNumber, isName } from '../../utils/Validate'
import OrderService from "../../services/OrderService";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const Transition = () => {
  document.title = 'Thanh toán - CoolShop'
  const navigate = useNavigate()
  const { userLogin, getCartPayment } = useContext(AppContext)
  const [listProduct, setListProduct] = useState([])
  const [isPay, setIsPay] = useState(false)
  const [checkoutInfo, setCheckoutInfo] = useState({
    nameShip: userLogin && userLogin.fullName ? userLogin.fullName : '',
    phoneShip: userLogin && userLogin.phoneNumber ? userLogin.phoneNumber : '',
    addressShip: userLogin && userLogin.address ? userLogin.address : '',
    note: '',
    priceShip: 0,
    paymentType: '',
    paymentTypeName: ''
  })
  const ref = useRef(false)

  useEffect(() => {
    let cartsPayment = getCartPayment()
    if (cartsPayment && cartsPayment.length > 0) {
      setListProduct(cartsPayment)
    } else {
      if (!ref.current) {
        ref.current = true
        alert('Hiện chưa có sản phẩm nào!')
      }
      navigate(config.routes.product)
    }
  }, [])

  useEffect(() => {
    setIsPay(validateCheckoutInfo())
  }, [checkoutInfo, listProduct])

  const validateCheckoutInfo = () => {
    if (!isName(checkoutInfo.nameShip)) {
      return false
    }

    if (!isVietnamesePhoneNumber(checkoutInfo.phoneShip)) {
      return false
    }

    if (checkoutInfo.addressShip === '') {
      return false
    }

    if (checkoutInfo.paymentType === '') {
      return false
    }

    if (listProduct.length === 0) {
      return false
    }

    return true
  }

  const handleCheckout = async () => {
    if (isPay) {
      const order = {
        ...checkoutInfo,
        orderDetail: [
          ...listProduct
        ]
      }
      const result = await OrderService.order(order)

      if (result.success) {
        let total = listProduct.reduce((curr, item) => curr + item.price * item.amount, 0)
          + checkoutInfo.priceShip
        localStorage.setItem('priceOrder', total)
        localStorage.setItem('orderId', result.data.data)
        navigate(config.routes.checkoutComplete)
      } else {
        alert("Có lỗi!")
      }
    }
  }

  return (
    <div className="bg-LightBlue min-h-[100vh]">
      <div className="w-[1240px] mx-auto flex justify-center gap-8 pt-2x pb-4x">
        <InfroDeliver checkoutInfo={checkoutInfo} setCheckoutInfo={setCheckoutInfo} />
        <PayProduct isPay={isPay} checkoutInfo={checkoutInfo} listProduct={listProduct} handleCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default Transition;
