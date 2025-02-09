import { createBrowserRouter } from "react-router-dom";

import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import LandingPage from "../screens/LandingPage/LandingPage";

import App from "../App";

const basename =
  process.env.NODE_ENV === "production" ? "/desarrollo-frontend-react" : "/";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
      ],
    },
  ],
  {
    basename: basename,
  }
);

export default routes;
