import { useState } from "react";

export default ({ setColaboradores, colaboradores }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const nuevoColaborador = {
        id: Date.now(),
        nombre: nombre,
        correo: correo
    }
        setColaboradores([...colaboradores, nuevoColaborador])
        setNombre("")
        setCorreo("")
    }

    return (
    <form>
    <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
    </div>
    <div className="mb-3">
        <label htmlFor="correo" className="form-label">Email</label>
        <input type="email" className="form-control" id="correo" onChange={(e) => setCorreo(e.target.value)} value={correo} />
    </div>
    {
        nombre.length && correo.length >= 4
        ? <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Agregar</button>
        : <div>Llena los campos para que aparezca el botón.</div>
    }
    
    </form>
    );
}