import AboutUs from "./Pages/AboutUs/AboutUs";
import Customers from "./Pages/Customers/Customers";
import Index from "./Pages/Index";
import Products from "./Pages/Products/Products";
import Why from "./Pages/Why/Why";
import Agents from "./Pages/Agents/Agents";
import Payment from "./Pages/Payment/Payment";
import Rules from "./Pages/Rules/Rules";
import ComingSoon from "./Pages/ComingSoon/ComingSoon"

const routes = [
    { path: "/", element: <Index /> },
    { path: "/products", element: <Products /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/customers", element: <Customers /> },
    { path: "/faq", element: <ComingSoon /> },
    { path: "/why-us", element: <Why /> },
    { path: "/gallary", element: <ComingSoon /> },
    { path: "/agents-form", element: <Agents /> },
    { path: "/payment", element: <Payment /> },
    { path: "/rules", element: <Rules /> },
    { path: "/coming-soon", element: <ComingSoon /> },
]

export default routes;