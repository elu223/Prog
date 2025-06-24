import React, { useState } from "react";
import FormTarea from "./componentes/FormTarea";
import ListaTarea from "./componentes/ListaTarea";
import FiltrarCat from "./componentes/FiltrarCat";
import "./index.css";

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
    setTareas(tareas.map(t => {
      if (t.id === id) {
        let nuevoEstado;
        if (t.estado === "Pendiente") nuevoEstado = "En proceso";
        else if (t.estado === "En proceso") nuevoEstado = "Completada";
        else nuevoEstado = "Pendiente";
        return { ...t, estado: nuevoEstado };
      }
      return t;
    }));
  }

  const prioridadValor = { Alta: 1, Media: 2, Baja: 3 };

  const tareasFiltradas = (categoria === "Todas"
    ? tareas
    : tareas.filter(t => t.categoria === categoria)
  ).sort((a, b) => prioridadValor[a.prioridad] - prioridadValor[b.prioridad]);

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
