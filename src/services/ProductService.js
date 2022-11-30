import config from '../config'
const getHeaders = () => {
  return {
    'ContentType': 'application/json'
  }
}

async function getFilter(filter) {
  let queryParams = '?'

  for (let param in filter) {
    queryParams += `${param}=${filter[param]}&`
  }

  try {
    const response = await fetch(`${config.BASE_API}/products/filter${queryParams}`, {
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function getById(id) {
  try {
    const response = await fetch(`${config.BASE_API}/products/${id}`, {
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function getQuantityProductById(productId) {
  try {
    const response = await fetch(`${config.BASE_API}/products/quantity/${productId}`, {
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function listofcategoriesandfeaturedproducts() {
  try {
    const response = await fetch(`${config.BASE_API}/products/listofcategoriesandfeaturedproducts`, {
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}

async function getProductofcategory() {
  try {
    const response = await fetch(`${config.BASE_API}/products/productofcategory`, {
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
        data: result
      }
    }

  } catch (e) {
    console.log(e)
    return {
      success: false,
      data: ''
    }
  }
}


const ProductService = {
  getFilter,
  getById,
  getQuantityProductById,
  listofcategoriesandfeaturedproducts,
  getProductofcategory,
}

export default ProductService
