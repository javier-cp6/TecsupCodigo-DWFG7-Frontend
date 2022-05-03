// reglas de los componentes:

// 1. los nombres de los componentes tienen que comenzar con Mayúscula (p. ej. const App)
// 2. todos los archivos a utilizar tienen que estar en dentro de src
// 3. todo componente debe tener un return
// 3.1 dentro de return va JSX. React utiliza  el símbolo de paréntesis() para los return que contengan JSX
// 4. return sólo puede retornar un elemento de HTML (una sola etiqueta padre). Por defecto, se puede envolver con <> </>
//5. cuando deseemos incluir código de JS dentro de JSX tenemos que utilizar {}. Incluso los comentarios
// 6. todo componente de react debe ser exportado por defecto

// importar hook useState from react
import {useState} from "react"

const App = () => {
  console.log("log dentro de App")

  // los estados de un componente son inmutables, es decir, no se pueden modificar
  // let [estado, funcionQueActualizaEstado] = useState(estadoInicial)
  let [contador, setContador] = useState(0)

  let miTexto = "Hola desde JavaScript!"

  const saludar = () => {
    return "Hola desde función"
  }

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
      </div>

      {/* en react no se requiere addEventListener, directamente onClick */}
      {/* no es posible modificar un estado directamente, sino a través de la función del useState (setContador) */}
      {/* <button onClick={() => {contador ++}}>
        Aumentar
      </button> */}
      <button onClick={() => {setContador(contador++)}}>
        Aumentar!
      </button>
      {/* Ojo! en react se requiere cerrar todas las etiquetas con /> */}
    </>
  )

}

export default App


/*
// import {useState} from "react"
// se agregó useEffect el 29.04
import {useState, useEffect} from "react"

// se agregó el 29.04
// en React, no es necesario agregar la extensión .js
import List from "./components/List"

// reglas de los componentes:

// 1. los nombres de los componentes tienen que comenzar con Mayúscula
const App = () => {
  // 2. todos los archivos a utilizar tienen que estar en dentro de src
  // 3. todo componente debe tener un return
  // 3.1 dentro de return va JSX. React utiliza  el símbolo de paréntesis() para los return que contengan JSX
  // 4. return sólo puede retornar un elemento de HTML (una sola etiqueta padre). Por defecto, se puede envolver con <> </>

  // los estados de un componente son inmutables, es decir, no se pueden modificar
  // let [estado, funcionQueActualizaEstado] = useState
  let [contador, setContador] = useState(0)

  // agregado el 29.04
  // los estados en react se agregan con useState
  let [nombre, setNombre] = useState("Saul")

  console.log("log dentro de App")

  let miTexto = "Hola desde JavaScript!!!"
  //5. cuando deseemos incluir código de JS dentro de JSX tenemos que utilizar {}


  
  const saludar = () => {
    return "Hola desde función"
  }
  
  let subtitulo = "Lista subtitulo"


  // se ejecuta cuando suceda un cambio de estado en el componente (en este caso en el contador del button)
  // el useEffect se escucha desde el montaje
  // por defecto useEffect escucha todos los cambios de estado
  // useEffect(() => {
  //   console.log("Cambió el estado")
  // })
  // se puede filtrar
  useEffect(() => {
    console.log("Cambió el estado")
    // desmontaje
    return () => {
      // función a ejecutar al desmontar componente
    }
  }, [nombre])

  // se pude tener varios useEffect pero no es recomendado (revisar)
  // useEffect(() => {
  //   console.log("cambio estado de contador", contador)
  // }, [contador])

  return (
    <>
      <div>
        {console.log("log dentro de return JSX")}
        <p>Hola Mundo!</p>
      </div>
      <div>
        <p>{miTexto}</p>
        <p>{10 + 20}</p>
        <p>{saludar()}</p>
        <p>Adiós!</p>
        <p>Contador: {contador}</p>
        <p>Nombre: {nombre}</p>
      </div>
      {en react no se requiere addEventListener, directamente onClick}
      <button onClick={() => {setContador(contador ++)}}>
        Aumentar!
      </button>
      <button onClick={() => setNombre("Saul Goodman")}>
        Cambiar nombre
      </button>
      <hr/>
      <List subtitulo={subtitulo}/>
      <List subtitulo="subtitulo2"/>
      <List subtitulo="subtitulo3"/>
      <List subtitulo={6}/>
    </>
  )

}
// 1.1 todo componente de react debe ser exportado por defecto
export default App
*/