import config from "../config";
import DefaultLayout from "../layouts/DefaultLayout";
import MenuTabLayout from "../layouts/MenuTabLayout";
import Cart from "../pages/cart/Cart";
import DetailProduct from "../pages/detailproduct/DetailProduct";
import Error from "../pages/error/Error";
import Favorite from "../pages/favorite/Favorite";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Orders from "../pages/orders/Orders";
import SuccessOrder from "../pages/orders/SuccessOrder";
import Product from "../pages/products/Product";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Transition from "../pages/transition/Transition";
import OrderDetail from "../pages/orderdetail/OrderDetail";

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes.product, component: Product, layout: DefaultLayout },
  { path: config.routes.checkout, component: Transition, layout: DefaultLayout },
  { path: config.routes.cart, component: Cart, layout: MenuTabLayout },
  { path: config.routes.favorite, component: Favorite, layout: MenuTabLayout },
  { path: config.routes.history, component: Orders, layout: MenuTabLayout },
  { path: config.routes.product + '/:slug', component: DetailProduct, layout: DefaultLayout },
  { path: config.routes.login, component: Login, layout: DefaultLayout },
  { path: config.routes.register, component: Register, layout: DefaultLayout },
  { path: config.routes.other, component: Error, layout: DefaultLayout },
  { path: config.routes.checkoutComplete, component: SuccessOrder, layout: DefaultLayout },
  {path: config.routes.orderDetail,component:OrderDetail,layout:DefaultLayout}
  
];

const privateRoutes = [
  { path: config.routes.profile, component: Profile, layout: MenuTabLayout },
]

export { publicRoutes, privateRoutes };
