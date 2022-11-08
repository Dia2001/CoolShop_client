const config = {
  BASE_API: process.env.REACT_APP_BASE_URL_API,
  urlImageProduct: process.env.REACT_APP_BASE_URL_IMAGE + '/product/',
  routes: {
    home: '/',
    product: '/san-pham',
    checkout: '/thanh-toan',
    cart: '/gio-hang',
    favorite: '/yeu-thich',
    history: '/lich-su-mua-hang',
    login: '/dang-nhap',
    register: '/dang-ky',
    other: '*',
    checkoutComplete: '/thanh-cong/thanh-cong',
    profile: '/thong-tin-ca-nhan'
  }
}

export default config
