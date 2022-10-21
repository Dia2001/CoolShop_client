import DefaultLayout from "../layouts/DefaultLayout";
import MenuTabLayout from "../layouts/MenuTabLayout";
import Cart from "../pages/cart/Cart";
import DetailProduct from "../pages/detailproduct/DetailProduct";
import Favorite from "../pages/favorite/Favorite";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Orders from "../pages/orders/Orders";
import Product from "../pages/products/Product";
import Profile from "../pages/profile/Profile";
import Register from "../pages/register/Register";
import Transition from "../pages/transition/Transition";


const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/san-pham', component: Product, layout: DefaultLayout },
  { path: '/thanh-toan', component: Transition, layout: DefaultLayout },
  { path: '/gio-hang', component: Cart, layout: MenuTabLayout },
  { path: '/yeu-thich', component: Favorite, layout: MenuTabLayout },
  { path: '/thong-tin-ca-nhan', component: Profile, layout: MenuTabLayout },
  { path: '/lich-su-mua-hang', component: Orders, layout: MenuTabLayout },
  { path: '/san-pham/:slug', component: DetailProduct, layout: DefaultLayout },
  {path:'/dang-nhap',component:Login,layout: DefaultLayout},
  {path:'/dang-ky',component:Register,layout: DefaultLayout},

];

export { publicRoutes };
