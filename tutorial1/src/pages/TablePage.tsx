import React from "react";
import { useTable, Column } from "react-table";


// Definir el tipo de los datos
interface PersonData {
 col1: string;
 col2: string;
 age: number;
}


const TablePage: React.FC = () => {
 const data: PersonData[] = React.useMemo(
   () => [
     { col1: "Juan", col2: "Perez", age: 25 },
     { col1: "Ana", col2: "Gomez", age: 30 },
     { col1: "Pedro", col2: "Rodriguez", age: 45 },
   ],
   []
 );


 const columns: Column<PersonData>[] = React.useMemo(
   () => [
     {
       Header: "Nombre",
       accessor: "col1",
     },
     {
       Header: "Apellido",
       accessor: "col2",
     },
     {
       Header: "Edad",
       accessor: "age",
     },
   ],
   []
 );


 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
   useTable<PersonData>({ columns, data });


 return (
   <div className="p-4">
     <h2 className="text-xl font-bold mb-4">
       Tabla de Ejemplo con React Table
     </h2>
     <table
       {...getTableProps()}
       className="min-w-full bg-white border border-gray-300"
     >
       <thead>
         {headerGroups.map((headerGroup) => (
           <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
             {headerGroup.headers.map((column) => (
               <th
                 {...column.getHeaderProps()}
                 className="border-b p-2 text-left bg-gray-200"
                 key={column.id}
               >
                 {column.render("Header")}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map((row) => {
           prepareRow(row);
           return (
             <tr
               {...row.getRowProps()}
               key={row.id}
               className="hover:bg-gray-100"
             >
               {row.cells.map((cell) => (
                 <td
                   {...cell.getCellProps()}
                   className="border-b p-2"
                   key={cell.column.id}
                 >
                   {cell.render("Cell")}
                 </td>
               ))}
             </tr>
           );
         })}
       </tbody>
     </table>
   </div>
 );
};


export default TablePage;
