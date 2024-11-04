// components/Layout.tsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
 return (
   <div className="flex flex-col min-h-screen">
     <Header />
     {/* Header se renderiza una sola vez */}
     <div className="p-4">
       <Outlet /> {/* Aquí se mostrará el contenido de cada página */}
     </div>
     <Footer /> {/* Footer se renderiza una sola vez */}
   </div>
 );
};


export default Layout;