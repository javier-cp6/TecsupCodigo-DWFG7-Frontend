// import React from 'react'
// ya no es necesario import react

import {useState} from "react"

export default function App() {
  // const [estado, funcSetEstado] = useState(estadoInicial)
  const [tareas, setTareas] = useState(["Lavar ropa", "Ir de compras"])

  const [nuevaTarea, setNuevaTarea] = useState("mi tarea")

  // Componentes controlados: todo value de un input debe estar amarrado a un estado

  return (
    <div>
      <h1>ToDo App</h1>
      <ul>
        {/* renderizado de listas con map */}
        {/* cuando se hace renderizado de listas, es necesaio añadir a cada elemento un key (por lo general, se usa el index o posición de cada elemento que se obtiene con map)*/}
        {tareas.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <input 
        type="text"
        placeholder="Lavar ropa"
        value={nuevaTarea}
        onChange={(e) => {setNuevaTarea(e.target.value)}}  
      />
    </div>
  )
}
