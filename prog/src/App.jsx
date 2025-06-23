import { useState } from 'react'
import FormTarea from './FormTarea';
import FormTarea from './ListaTarea';

function App() {
  const [tareas, setTareas] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todas");

  const guardarTarea = (tarea) => {
    const nueva = {
      ...tarea,
      id: Date.now(),
      estado: "Pendiente"
    };
    setTareas([...tareas, nueva]);
  };
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };
  const cambiarEstado = (id) => {
    setTareas(
      tareas.map((t) =>
       t.id === id
         ? { ...t, estado:  t.estado === "Pendiente" ? "Completada" : "Pendiente"}
         :t
      )
    );
  };
  const tareasFiltradas =
    categoriaSeleccionada === "todas"
    ? tareas
    : tareas.filter((t)=> t.categoria ===categoriaSeleccionada);
  return (
    <div>
      <FormTarea guardarTarea={guardarTarea}/>
      <FiltrarCategoria setCategoriaSeleccionada={setCategoriaSeleccionada}/>
      <ListaTarea
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        cambiarEstado={cambiarEstado}
      />
    </div>
  );
}
export default App;
