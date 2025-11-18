// router/index.js
import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../home/Home";
import AllProducts from "../components/products/AllProducts";
import OrderNow from "../pages/OrderNow";
import Checkout from "../pages/Checkout";
import OrderAnimation from "../pages/OrderAnimation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
     {
        path: "product-details/:id",
        element: <OrderNow />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-animation",
        element: <OrderAnimation />,
      }
    ],
  },
]);
