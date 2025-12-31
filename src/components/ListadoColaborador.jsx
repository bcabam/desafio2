export default ({ colaboradores }) => {
  return (
    <div className="col-12">
      <h3 className="mb-4">Listado de Colaboradores</h3>
      {colaboradores.map((colaborador) => (
        <div className="card mb-3" key={colaborador.id}>
          <div className="card-body">
            <h5 className="card-title">Nombre: {colaborador.nombre}</h5>
            <p className="card-text">Correo: {colaborador.correo}</p>
          </div>
        </div>
      ))}
    </div>
  )
}