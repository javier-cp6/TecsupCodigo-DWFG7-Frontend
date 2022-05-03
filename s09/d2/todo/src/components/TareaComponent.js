import React from 'react'

export default function TareaComponent({tarea, eliminarTarea, indice}) {
    return (
        <li>
            <span>{tarea}</span>
            <button
                onClick={() => {eliminarTarea(indice)}}
            >
                Eliminar
            </button>
        </li>
    )
}
