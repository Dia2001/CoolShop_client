import config from '../config'
import { getHeaders } from '../utils'

/**
* Call api getAll cart
*/
async function getAll() {
  try {
    const response = await fetch(`${config.BASE_API}/carts`, {
      method: 'GET',
      headers: getHeaders()
    })

    const result = await response.json()

    if (response.status === 200) {
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: []
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: []
    }
  }
}

async function addProductToCart(productId, sizeId, colorId, quantity) {
  try {
    const response = await fetch(`${config.BASE_API}/carts`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({
        productId,
        sizeId,
        colorId,
        quantity
      })
    })

    if (response.status === 201) {
      const result = await response.json()
      return {
        success: true,
        data: result
      }
    } else {
      return {
        success: false,
        data: []
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: []
    }
  }
}

const CartService = {
  getAll,
  addProductToCart
}

export default CartService
