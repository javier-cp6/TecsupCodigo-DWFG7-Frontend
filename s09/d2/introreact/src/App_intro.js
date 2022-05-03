// reglas de los componentes:

// 1. los nombres de los componentes tienen que comenzar con Mayúscula (p. ej. const App)
// 2. todos los archivos a utilizar tienen que estar en dentro de src
// 3. todo componente debe tener un return
// 3.1 dentro de return va JSX. React utiliza  el símbolo de paréntesis() para los return que contengan JSX
// 4. return sólo puede retornar un elemento de HTML (una sola etiqueta padre). Por defecto, se puede envolver con <> </>
//5. cuando deseemos incluir código de JS dentro de JSX tenemos que utilizar {}. Incluso los comentarios
// 6. todo componente de react debe ser exportado por defecto

const App = () => {

  console.log("log dentro de App")
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
      </div>
      {/* Ojo! en react se requiere cerrar todas las etiquetas con /> */}
    </>
  )

}

export default App
