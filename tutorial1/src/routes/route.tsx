// routes/route.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Producto";
import DetalleProducto from "../pages/DetalleProducto";
import Contacto from "../pages/Contacto";
import TablePage from "../pages/TablePage";
import Encargos from "../pages/Encargos";



const router = createBrowserRouter([
 {
   path: "/",
   element: <Layout />, // Layout que incluye el Navbar y Outlet
   errorElement: <ErrorPage />,
   children: [
     {
       path: "/",
       element: <Inicio />, // <-- Corregido: ahora usa el componente Inicio
     },
     {
       path: "/productos",
       element: <Productos />,
     },
     {
       path: "/productos/:id",
       element: <DetalleProducto />,
     },
     {
       path: "/contacto",
       element: <Contacto />,
     },
     {
       path: "/tabla",
       element: <TablePage />,
     },
     {
      path:"/encargos",
      element: <Encargos/>,
     }
   ],
 },
]);


export default router;
