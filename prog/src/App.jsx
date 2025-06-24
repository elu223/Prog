import React, { useState } from "react";
import FormTarea from "./componentes/FormTarea";
import ListaTarea from "./componentes/ListaTarea";
import FiltrarCat from "./componentes/FiltrarCat";

function App() {
  const [tareas, setTareas] = useState([]);
  const [categoria, setCategoria] = useState("Todas");

  function agregarTarea(nueva) {
    setTareas([...tareas, nueva]);
  }

  function borrarTarea(id) {
    setTareas(tareas.filter(t => t.id !== id));
  }

  function cambiarEstado(id) {
    setTareas(tareas.map(t => t.id === id ? { ...t, estado: !t.estado } : t));
  }

  const tareasFiltradas = categoria === "Todas"
    ? tareas
    : tareas.filter(t => t.categoria === categoria);

  return (
    <>
      <FormTarea guardar={agregarTarea} />
      <FiltrarCat seleccionar={setCategoria} />
      <ListaTarea 
        tareas={tareasFiltradas} 
        eliminar={borrarTarea} 
        cambiar={cambiarEstado} 
      />
    </>
  );
}

export default App;
