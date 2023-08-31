import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import Product from "./routes/Product.jsx";
import Info from "./routes/Info.jsx";
import Search from "./routes/Search.jsx";

// neste array de objetos definimos os componentes que servirão de páginas e os paths
// que são os endereços que cada componente terá
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // é o suficiente para criar páginas de erro em todo o site
    // 3 - componente base
    // por meio do componente Outlet já contido no react-dom é possível manter uma estrutura base
    // e reaproveitar elementos, mudando apenas o que está em outlet, importado e declarado no
    // componente base, neste caso, o App.jsx
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - rota dinâmica
      {
        path: "products/:id/:name",
        element: <Product />,
      },
      // 8 - nested route
      {
        path: "products/:id/:name/info",
        element: <Info />,
      },
      // 9 - search params
      {
        path: "search",
        element: <Search />,
      },
      // 10 - redirecionamento
      {
        path: "teste",
        element: <Navigate to="/" />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* como único elemento temos o RouterProvider com a props router definida com a variável
    criada acima. Já é o suficiente para quando chamarmos as páginas (componentes) 
    elas sejam buscadas no array de objetos contido dentro da variável. */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
