/*
import DashboardView from './views/DashboardView'

export default function App() {
  // <> = fragment
  return (
    <>
      <DashboardView />
    </>
  )
}
*/

/*
// modificar JSX
import DashboardView from './views/DashboardView'

import "bootstrap/dist/css/bootstrap.min.css"

import Navigation from "./components/Navigation"

export default function App() {
  // <> = fragment
  return (
    <>
      <Navigation />
      <DashboardView />
    </>
  )
}
*/

// importar CrearCategoriaView
// ordenar los import
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardView from './views/DashboardView'
import CrearCategoriaView from "./views/CrearCategoriaView"
import Navigation from "./components/Navigation"

export default function App() {
  // <> = fragment
  return (
    <>
      <Navigation />
      <DashboardView />
      <CrearCategoriaView />
    </>
  )
}

