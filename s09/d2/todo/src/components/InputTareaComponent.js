
export default function InputTareaComponent({nuevaTarea, setNuevaTarea, agregarTarea}) {
    const manejarInput = (e) => {
        setNuevaTarea(e.target.value)
    }

    const manejarInputEnter = (e) => {
        console.log(e.key)
        if(e.key === "Enter"){
            agregarTarea()
        }
    }
    
  return (
    <div>
        <input 
            type="text"
            placeholder="Ingresa nueva tarea"
            value={nuevaTarea}
            onChange={(e) => {manejarInput(e)}}
            onKeyUp={(e) => {manejarInputEnter(e)}}
        />
        <button
            onClick={agregarTarea}
            >Agregar!
        </button>
    </div>
  )
}
