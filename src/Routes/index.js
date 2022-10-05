import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/home/Home";
import Product from "../pages/products/Product";


const publicRoutes=[
    {path:'/',component:Home,layout: DefaultLayout},
    {path:'/san-pham',component:Product,layout:DefaultLayout}
   
];

export {publicRoutes};