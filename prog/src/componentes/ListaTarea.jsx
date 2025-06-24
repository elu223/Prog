import TarjetaTarea from "./TarjetaTarea";

function ListaTarea({ tareas, eliminar, cambiar }) {
  return (
    <div id="listaTareas">
      <ul>
        {tareas.map((t) => (
          <TarjetaTarea key={t.id} tarea={t} eliminar={eliminar} cambiar={cambiar} />
        ))}
      </ul>
    </div>
  );
}

export default ListaTarea;