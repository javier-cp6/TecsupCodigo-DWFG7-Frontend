import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { eliminarLugar } from "../services/lugaresService"

export default function LugaresView() {
  const [lugares, setLugares] = useState([])

  const deleteLugar = async (idCat, idLugar) => {
    try {
      const resultado = await Swal.fire({
        title: '¿Desea eliminar lugar?',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: `No, cancelar`,
      })
      if(resultado.isConfirmed){
        await eliminarLugar(idCat, idLugar)
        Swal.fire({
          title:"Lugar eliminado",
          icon:"success"
        })
        getCategorias()
      }
    } catch (error) {
      console.log(error)
    }
  }

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

  useEffect(() => {
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
          {lugares.map(({lug_nom, lug_desc, lug_dir, lug_id, categoriaId}, i) => (
            <tr key={i}>
              <td>{lug_nom}</td>
              <td>{lug_desc}</td>
              <td>{lug_dir}</td>
              {/* la URL que lleva a la vista de editar se forma al concatenar "editarlugar/" con el id de la categoría y el id del lugar */}
              <td>
                <Link className="btn btn-warning btn-sm" to={`/editarlugar/idCat=${categoriaId}/idLugar=${lug_id}`}>
                  <i className="fa-solid fa-file-pen" />
                </Link>

                <button 
                  className="btn btn-danger btn-sm ms-2" 
                  onClick={() => {deleteLugar(categoriaId, lug_id)}}
                >
                  <i className="fa-solid fa-trash" />
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
