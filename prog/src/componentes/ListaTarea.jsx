function ListaTarea ({ tareas, eliminar, cambiar}){
    return(
        <div>
            {tareas.map((t)=>(
                 <div key ={t.id} style={{border: " 1px solid #aaa", margin: "10px", padding: "10px"}}> 
                       <h4>{t.titulo}</h4>
                       <p>Categoría: {t.categoria}</p>
                       <p>Estado:{t.estado ? "Cpmpletada" : "Pendiente"}</p>
                       <button onClick={() => cambiar(t.id)}>Cambiar estado</button>
                       <button onClick={() => eliminar(t.id)}>Eliminar</button>
                 </div>

            ))}
        </div>
    );
}
export default ListaTarea;