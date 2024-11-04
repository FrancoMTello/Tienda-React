import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);


 return (
   <nav className="relative">
     {/* Icono "Hamburguesa" para pantallas pequeñas */}
     <div className="md:hidden flex items-center justify-end">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="text-gray-800 focus:outline-none"
       >
         <svg
           className="w-8 h-8"
           fill="none"
           stroke="currentColor"
           viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth={2}
             d="M4 6h16M4 12h16M4 18h16"
           />
         </svg>
       </button>
     </div>


     {/* Menú para pantallas grandes y pequeñas */}
     <div
       className={`${
         isOpen ? "block" : "hidden"
       } md:flex md:space-x-6 fixed md:static top-0 left-0 w-full md:w-auto bg-orange-400 md:bg-transparent text-lg text-gray-800 z-10 p-4 md:p-0`}
     >
       <NavLink
         to="/"
         className={({ isActive }) =>
           `block md:inline hover:underline px-4 py-2 ${
             isActive ? "underline" : ""
           }`
         }
         onClick={() => setIsOpen(false)}
       >
         Inicio
       </NavLink>
       <NavLink
         to="/productos"
         className={({ isActive }) =>
           `block md:inline hover:underline px-4 py-2 ${
             isActive ? "underline" : ""
           }`
         }
         onClick={() => setIsOpen(false)}
       >
         Productos
       </NavLink>
       <NavLink
         to="/contacto"
         className={({ isActive }) =>
           `block md:inline hover:underline px-4 py-2 ${
             isActive ? "underline" : ""
           }`
         }
         onClick={() => setIsOpen(false)}
       >
         Contacto
       </NavLink>
       <NavLink
         to="/tabla"
         className={({ isActive }) =>
           `block md:inline hover:underline px-4 py-2 ${
             isActive ? "underline" : ""
           }`
         }
         onClick={() => setIsOpen(false)}
       >
         Tabla
       </NavLink>
       <NavLink
         to="/encargos"
         className={({ isActive }) =>
           `block md:inline hover:underline px-4 py-2 ${
             isActive ? "underline" : ""
           }`
         }
         onClick={() => setIsOpen(false)}
       >
         Encargos
       </NavLink>
     </div>
   </nav>
 );
};


export default Navbar;
