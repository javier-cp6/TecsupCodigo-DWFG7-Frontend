// rfc para crear proyecto con extensión ES7

import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"

/*1.
export default function DashboardView() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        obtenerCategorias()
    })

  return (
    <div>DashboardView</div>
  )
}
*/

/*2.
export default function DashboardView() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        obtenerCategorias()
        .then((data) => {
            setCategorias(data)
        })
        // si le damos como argumento al useEffect un array vacío [], solamente se ejecutará una vez en el montaje. De lo contrario, se generaría un bucle infinito
    }, [])

  return (
    <div>DashboardView</div>
  )
}
*/

// 3. modificar el JSX
export default function DashboardView() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        obtenerCategorias()
        .then((data) => {
            setCategorias(data)
        })
        // si le damos como argumento al useEffect un array vacío [], solamente se ejecutará una vez en el montaje. De lo contrario, se generaría un bucle infinito
    }, [])

  return (
    <>
        <h1>Dashboard</h1>
        <div className="card mt-3">
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Descripción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* renderizado de listas */}
                        {categorias.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    {item.cat_nom}
                                </td>
                                <td>
                                    {item.cat_desc}
                                </td>
                            </tr>
                            
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}
