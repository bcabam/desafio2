export default ({setBusqueda}) => {
    return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" onChange={(e) => setBusqueda(e.target.value)}/>
      </form>
      </div>
    </div>
    </nav>
    );
}
