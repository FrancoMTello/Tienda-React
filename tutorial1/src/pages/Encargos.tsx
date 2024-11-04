

const Encargos = () => {
    const listaDeEncargos: string[] = ["televisor", "celular", "computadora"];
    
    return (
        <div className="text-4xl font-bold">
            <h1 className="text-center">Lista de encargos</h1>
            <ul>
                {listaDeEncargos.map((encargo, index) => (
                    <li key={index}>{encargo}</li>
                ))}
            </ul>
        </div>
    );
}
export default Encargos