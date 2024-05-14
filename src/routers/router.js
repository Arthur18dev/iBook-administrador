import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import DadosEmpresa from "../pages/DadosEmpresa"
import Usuarios from "../pages/Usuarios"
import Livros from "../pages/Livros"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dados-empresa",
    element: <DadosEmpresa />,
  },
  {
    path: "/users",
    element: <Usuarios />,
  },
  {
    path: "/livros",
    element: <Livros/>,
  },
]);


export default router