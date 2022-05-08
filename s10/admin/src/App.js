/*
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardView from './views/DashboardView'
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

import "bootstrap/dist/css/bootstrap.min.css"
import DashboardView from './views/DashboardView'
import CrearCategoriaView from "./views/CrearCategoriaView"
import Navigation from "./components/Navigation"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LugaresView from "./views/LugaresView"
import CrearLugarView from "./views/CrearLugarView"

export default function App() {
  // <> = fragment
  return (
    <>
      <Router>
        <Navigation />
        <div className="container pt-4">
          <Routes>
            {/* <Route path="/ruta" element={<Componente/>} /> */}
            <Route path="/" element={<DashboardView />} />
            <Route path="/crearcategoria" element={<CrearCategoriaView />} />
            <Route path="/lugares" element={<LugaresView />} />
            <Route path="/crearlugar" element={<CrearLugarView />} />
          </Routes>
        </div>
      </Router>
      {/* eliminar componentes para que se vean en vistas independientes */}
      {/* <DashboardView />
      <CrearCategoriaView /> */}
    </>
  )
}

