import { createBrowserRouter } from "react-router-dom";

import Home from "./home/index";
import Product from "./products/index";
import Index from "./index";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Index,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/product",
        Component: Product,
      },
    ],
  },
]);

export default router;
