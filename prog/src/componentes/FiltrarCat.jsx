function FiltrarCat({ seleccionar }) {
  return (
    <div className="filtro">
      <select onChange={(e) => seleccionar(e.target.value)}>
        <option value="Todas">Todas</option>
        <option value="Colegio">Colegio</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
}

export default FiltrarCat;
