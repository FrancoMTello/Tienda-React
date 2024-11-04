//import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";


// Definir el esquema Zod para validación del formulario
const schema = z.object({
 email: z.string().email("Debe ser un email válido"),
 password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});


type FormFields = z.infer<typeof schema>;


const Contacto = () => {
 //const { contactId } = useParams(); // Obtener el ID de contacto desde la URL


 // Configurar React Hook Form con Zod
    const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
} = useForm<FormFields>({
resolver: zodResolver(schema),
});


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulación de envío
     console.log(data); // Procesar el formulario enviado
    } catch (error) {
    setError("root", {
        message: "Este email ya está en uso",
    });
    }
};


 return (
   <div className="container mx-auto p-4">
     {/*<h1 className="text-2xl font-bold mb-4">Contacto ID: {contactId}</h1>*/}
     <p className="mb-6">
       {/* Esta es la información del contacto con ID: {contactId}*/}
     </p>


     {/* Formulario de contacto */}
     <form
       className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md space-y-4"
       onSubmit={handleSubmit(onSubmit)}
     >
       <div>
         <label className="block text-sm font-medium text-gray-700">
           Email
         </label>
         <input
           {...register("email")}
           type="text"
           placeholder="Ingrese su email"
           className={`mt-1 block w-full px-3 py-2 border ${
             errors.email ? "border-red-500" : "border-gray-300"
           } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
         />
         {errors.email && (
           <span className="text-red-500 text-sm">
             {errors.email?.message}
           </span>
         )}
       </div>


       <div>
         <label className="block text-sm font-medium text-gray-700">
           Contraseña
         </label>
         <input
           {...register("password")}
           type="password"
           placeholder="Ingrese su contraseña"
           className={`mt-1 block w-full px-3 py-2 border ${
             errors.password ? "border-red-500" : "border-gray-300"
           } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
         />
         {errors.password && (
           <span className="text-red-500 text-sm">
             {errors.password?.message}
           </span>
         )}
       </div>


       <div>
         <button
           disabled={isSubmitting}
           type="submit"
           className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:bg-orange-400 focus:ring-offset-2"
         >
           {isSubmitting ? "Enviando..." : "Enviar"}
         </button>
       </div>


       {errors.root && (
         <div className="text-red-500 text-sm">{errors.root?.message}</div>
       )}
     </form>
   </div>
 );
};


export default Contacto;


