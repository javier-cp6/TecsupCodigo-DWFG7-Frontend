import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeView from "./views/HomeView"
import DetalleLugarView from "./views/DetalleLugarView"
import BarNavigation from "./components/BarNavigation"
import FavoritosContextProvider from "./context/favoritosContext"
import FavoritosView from "./views/FavoritosView"
import { AuthContextProvider } from "./context/authContext"
import LoginView from "./views/LoginView"
import ProtectedRoute from "./components/protectedRoute"

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <FavoritosContextProvider >
          <BarNavigation />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/detallelugar/:catId/:lugId" element={<DetalleLugarView />} />
              <Route path="/favoritos" element={<ProtectedRoute><FavoritosView /></ProtectedRoute>} />
              <Route path="/login" element={<LoginView />} />
            </Routes>
          </div>
        </FavoritosContextProvider>
      </AuthContextProvider>
    </Router>
  )
}
