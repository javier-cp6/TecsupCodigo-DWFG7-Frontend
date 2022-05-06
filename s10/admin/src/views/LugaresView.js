import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"

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
        } catch (error) {
            console.log(error)
        }
    }
    getCategorias()
  }, [])

  return (
    <div>LugaresView</div>
  )
}
