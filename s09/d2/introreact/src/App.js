// reglas de los componentes:

// 1. los nombres de los componentes tienen que comenzar con Mayúscula (p. ej. const App)
// 2. todos los archivos a utilizar tienen que estar en dentro de src
// 3. todo componente debe tener un return
// 3.1 dentro de return va JSX. React utiliza  el símbolo de paréntesis() para los return que contengan JSX
// 4. return sólo puede retornar un elemento de HTML (una sola etiqueta padre). Por defecto, se puede envolver con <> </>
//5. cuando deseemos incluir código de JS dentro de JSX tenemos que utilizar {}. Incluso los comentarios
// 6. todo componente de react debe ser exportado por defecto

// importar hooks from react
import {useState, useEffect} from "react"
import List from "./components/List";

const App = () => {
  console.log("log dentro de App")

  // useState
  // los estados de un componente son inmutables, es decir, no se pueden modificar
  // let [estado, funcionQueActualizaEstado] = useState(estadoInicial)
  let [contador, setContador] = useState(0)
  let [nombre, setNombre] = useState("Saul")

  let miTexto = "Hola desde JavaScript!"

  const saludar = () => {
    return "Hola desde función"
  }

  let subtitle = "List subtítulo con props"

  // useEffect 
  // se ejecuta cuando ocurra un cambio de estado en el componente (en este caso en el contador al hacer click en el button)
  // se ejecuta desde el montaje

  // por defecto, "escucha" todos los cambios de estado (y también los props)
  // useEffect(() => {
  //   console.log("Cambió el estado")
  // })

  // permite filtrar el estado que se desea "escuchar"
  useEffect(() => {
    console.log("Cambió el estado de nombre")
    // desmontaje
    return () => {
      // función a ejecutar al desmontar componente
    }
  }, [nombre])
  
  // se pude tener varios useEffect pero no es recomendado, normalmente, máximo 3

  return (
    <>
      <div>
        {console.log("log dentro de return JSX")}
        <p>Hola Mundo!</p>
      </div>
      <div>
        <p>{miTexto}</p>
        <p>10 + 20 = {10 + 20}</p>
        <p>{saludar()}</p>
        <p>Adiós!</p>
        <p>Contador useState: {contador}</p>
        <p>Nombre: {nombre}</p>
      </div>
      <button onClick={() => {setContador(contador + 1)}}>
        Aumentar!
      </button>
      <button onClick={() => {setNombre("Saul Goodman")}}>
        Cambiar nombre
      </button>
      <hr />

      <List />
      <List subtitulo={subtitle}/>
      <List subtitulo="subtitulo 2"/>
      <List subtitulo="subtitulo 3"/>
      <List subtitulo={6}/>
      {/* Ojo! en react se requiere cerrar todas las etiquetas con /> */}
    </>
  )
}
export default App


