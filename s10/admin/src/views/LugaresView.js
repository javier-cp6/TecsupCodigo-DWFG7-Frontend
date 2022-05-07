import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"
import { Link } from "react-router-dom"

export default function LugaresView() {
  const [lugares, setLugares] = useState([])

  useEffect(() => {
    const getCategorias = async () => {
        try {
            const categorias = await obtenerCategorias()
            console.log(categorias)
            // filtrar categorías que tengan al menos 1 lugar
            const catFiltradas = categorias.filter((cat) => cat.lugares.length > 0)
            console.log("filtrado", catFiltradas)
            // con map obtener solamente la propiedad lugares de las categorías y con flat unir los arrays [] en uno solo
            const arrLugares = catFiltradas.map((cat) => cat.lugares).flat()
            setLugares(arrLugares)
        } catch (error) {
            console.log(error)
        }
    }
    getCategorias()
  }, [])

  return (
    <div>
      <h1 className="mb-3">
        Lugares
      </h1>
      {/* cambiar button por Link */}
      <Link className="btn btn-success mb-2" to="/crearlugar">
        Crear nuevo lugar
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lugares.map(({lug_nom, lug_desc, lug_dir}, i) => (
            <tr key={i}>
              <td>{lug_nom}</td>
              <td>{lug_desc}</td>
              <td>{lug_dir}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
