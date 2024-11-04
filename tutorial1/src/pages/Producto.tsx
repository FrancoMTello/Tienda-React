import { Link } from "react-router-dom";


const productos = [
 { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1" },
 { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2" },
 { id: 3, nombre: "Producto 3", descripcion: "Descripción del producto 3" },
];


const Productos = () => {
 return (
   <div className="text-center">
     <h1 className="text-4xl font-bold">Nuestros Productos</h1>
     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {productos.map((producto) => (
         <div key={producto.id} className="bg-white p-4 rounded-lg shadow-lg">
           <h2 className="text-xl font-semibold">{producto.nombre}</h2>
           <p className="text-gray-600 mt-2">{producto.descripcion}</p>
           <Link
             to={`/productos/${producto.id}`}
             className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
           >
             Ver Detalles
           </Link>
         </div>
       ))}
     </div>
     <div className="mt-8">
       <Link
         to="/"
         className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
       >
         Ir a Inicio
       </Link>
     </div>
   </div>
 );
};


export default Productos;
