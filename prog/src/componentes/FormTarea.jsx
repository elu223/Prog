import { useState } from "react";

function FormTarea({ guardar }) {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("Colegio");
  const [prioridad, setPrioridad] = useState("Alta");
  function crearTarea() {
    if (texto.trim() === "") return;

    const nueva = {
      id: Date.now(),
      titulo: texto,
      prioridad: prioridad,
      categoria: categoria,
      estado: "Pendiente"
    };

    guardar(nueva);
    setTexto("");
  }

  return (
    <div id="formTarea">
      <div className="formulario">
        <input
          type="text"
          placeholder="Escribir tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <p>Categoría:</p>
        <select onChange={(e) => setCategoria(e.target.value)}>
          <option value="Colegio">Colegio</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Personal">Personal</option>
        </select>
        <select onChange={(e) => setPrioridad(e.target.value)}>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>
      <button onClick={crearTarea}>Agregar</button>
    </div>
  );
}

export default FormTarea;
