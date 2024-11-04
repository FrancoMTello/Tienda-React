// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-orange-500 text-gray-800 p-4 text-center fixed bottom-0 w-full">
        <p>
          &copy; {new Date().getFullYear()} Mi Tienda Virtual. Todos los derechos
          reservados.
        </p>
      </footer>
    );
   };
   
   
   export default Footer;