import config from '../config'
import { getHeaders } from '../utils'

/**
* Call api getAll cart
*/
async function getAll() {
  try {
    const response = await fetch(`${config.BASE_API}/carts/products`, {
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

    const result = await response.json()
    if (response.status === 201 || response.status === 200) {
      return {
        success: true,
        code: response.status,
        data: result.message
      }
    } else {
      return {
        success: false,
        code: response.status,
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

async function removeProductToCart(cart) {
  try {
    const response = await fetch(`${config.BASE_API}/carts/products`, {
      method: 'DELETE',
      headers: getHeaders(),
      body: JSON.stringify(cart)
    })

    const result = await response.json()
    if (response.status === 200) {
      return {
        success: true,
        code: response.status,
        data: result.message
      }
    } else {
      return {
        success: false,
        code: response.status,
        data: result.message
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: e.message
    }
  }
}

const CartService = {
  getAll,
  addProductToCart,
  removeProductToCart
}

export default CartService
