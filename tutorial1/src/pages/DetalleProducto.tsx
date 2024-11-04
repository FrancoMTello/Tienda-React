import { Link, useParams } from "react-router-dom";


const productos = [
 { id: 1, nombre: "Producto 1", descripcion: "Descripción del producto 1" },
 { id: 2, nombre: "Producto 2", descripcion: "Descripción del producto 2" },
 { id: 3, nombre: "Producto 3", descripcion: "Descripción del producto 3" },
];


const DetalleProducto = () => {
 const { id } = useParams<{ id: string }>();
 const producto = productos.find((p) => p.id === Number(id));


 if (!producto) {
   return <div>Producto no encontrado</div>;
 }


 return (
   <div className="text-center">
     <h1 className="text-4xl font-bold">{producto.nombre}</h1>
     <p className="text-lg mt-4">{producto.descripcion}</p>
     <div className="mt-8">
       <Link
         to="/"
         className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
       >
         Ir a Inicio
       </Link>
     </div>
   </div>
 );
};


export default DetalleProducto;


