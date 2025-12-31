import BuscarColab from "./components/BuscarColab"
import Colab from "./components/Colab"
import ListadoColaborador from "./components/ListadoColaborador"
import { BaseColaboradores } from "./data/colaboradores"
import { useState } from "react"

export default function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const[ busqueda, setBusqueda ] = useState("");

  let resultados = [];

  if(!busqueda){
    resultados = colaboradores
  } else {
    resultados = colaboradores.filter((colaborador) => {
      return colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
    })
  }

  return (
  <>
      <BuscarColab setBusqueda={setBusqueda} />
      <div className="container my-5">
        <div className="row">
          <div className="col-5">
            <Colab setColaboradores={setColaboradores} colaboradores={colaboradores} />
          </div>
          <div className="col-7">
            <ListadoColaborador colaboradores={resultados}/>
          </div>
        </div>
      </div>
  </>  
  )
}