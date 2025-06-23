import { useState } from "react";

function FormtTrea({guardar}){
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
    </div>
  )
}