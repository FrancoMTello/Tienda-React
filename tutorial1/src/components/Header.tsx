// components/Header.tsx
import logo from "../assets/logo.png";
import Navbar from "./NavBar";


const Header = () => {
 return (
   <header className="bg-orange-400 text-gray-800 p-4 flex justify-between items-center">
     <div className="flex items-center">
       <img
         src={logo}
         alt="Logotipo de Mi Tienda Virtual"
         className="w-10 h-10 mr-3"
         aria-label="Logotipo de Mi Tienda Virtual"
       />
       <h1 className="text-gray-800 text-2xl font-bold">Mi Tienda Virtual</h1>
     </div>
     <nav className="flex-1 flex justify-center">
       <Navbar />
     </nav>
   </header>
 );
};


export default Header;