import { useState } from "react";

function FormtTarea({guardar}){
  const [texto, setTexto ] = useState ("");
  const [categoria, setCategoria] = useState("Colegio");

  function crearTarea() {
    if (texto.trim() === "") return;

    const nueva = {
        id: Date.now(),
        titulo:texto,
        categoriaa: categoria,
        estado: false
    };
    guardar (nueva)
    setTexto ("");
  }
  return (
    <div>
        <input
          type= "text"
          placeholder="Escribir tarea"
          value={texto}
          onChange={(e)=> setTexto(e.target.value)}
        />
        <select onChange={(e) => setCategoria(e.target.value)}>
           <option value="Colegio">Colegio</option>
           <option value="Trabajo">Trabajo</option>
           <option value="Personal">Personal</option>
        </select>
        <button onClick={crearTarea}>Agregar</button>
    </div>
  )
}
export default FormtTarea;