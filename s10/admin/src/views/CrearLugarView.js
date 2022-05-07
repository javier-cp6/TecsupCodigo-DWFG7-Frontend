import {useEffect, useState} from 'react'
import { obtenerCategorias } from '../services/categoriasService';
import { crearLugar } from '../services/lugaresService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"

export default function CrearLugarView() {
  const [inputs, setInputs] = useState({
      lug_nom:"",
      lug_desc:"",
      lug_dir:"",
      categoriaId:1
  })

  const [categorias, setCategorias] = useState([])
  // lat, long
  const [marcador, setMarcador] = useState([-12, -77])

  const navigate = useNavigate()

  const manejarInputs = (e) => {
      console.log(e.target.name)
      setInputs({
        //   spread operator de las propiedades de input
        // según el name recibido del evento, se le asigna un valor
        ...inputs, [e.target.name]:e.target.value
      })
  }

  const manejarSubmit = async (e) => {
      e.preventDefault()
      try {
        await crearLugar(inputs)
        Swal.fire({
            icon:"success",
            title:"Lugar creado!"
        })
        navigate("/lugares")
      } catch (error) {
          console.log(error)
      }
  }


  const existeErrorInputs = () => {
    if(inputs.lug_nom.trim() === "" || 
    inputs.lug_desc.trim() === "" || 
    inputs.lug_dir.trim() === ""){
      // si es true, retorna true
        // se se ejecuta un return, finaliza la función
      return true
    }
    return false
  }
  
  // seguir la documentación
  
  const AddMarker = () => {
      const map = useMapEvents({
          click: (e) => {
            // revisar el objeto que trae lat y lng
            console.log(e)
            const {lat, lng} = e.latlng
            setMarcador([lat, lng])
          }
      })
  }

  useEffect(() => {
      const getCategorias = async () => {
          try {
            const categoriasObtenidas = await obtenerCategorias()
            // console.log({categoriasObtenidas})
            // solamente se requiere id y nom
            const infoCategorias = categoriasObtenidas.map(({cat_id, cat_nom}) => {
                return {cat_nom:cat_nom, cat_id:cat_id}
            })
            // console.log({infoCategorias})
            setCategorias(infoCategorias)
          } catch (error) {
              console.log(error)
          }
      }
      getCategorias()
  }, [])

  return (
    <div>
        <h1 className="mb-3">
            Crear Lugar
        </h1>
        <form onSubmit={(e) => {manejarSubmit(e)}}>
            <div className="mb-3">
                <label  className="form-label">
                    Nombre del lugar
                </label>
                <input 
                    type="text"
                    placeholder='Ej. Cevichería Perú'
                    className="form-control"
                    name="lug_nom"
                    value={inputs.lug_nom}
                    onChange={(e) => {manejarInputs(e)}}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">
                    Descripción
                </label>
                <input 
                    type="text"
                    placeholder="Ingrese descripción"
                    className="form-control"
                    name="lug_desc"
                    value={inputs.lug_desc}
                    onChange={(e) => {manejarInputs(e)}}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Dirección
                </label>
                <input 
                    type="text"
                    placeholder="Ingrese dirección"
                    className="form-control"
                    name="lug_dir"
                    value={inputs.lug_dir}
                    onChange={(e) => {manejarInputs(e)}}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Seleccione categoría
                </label>
                <select 
                    className="form-select"
                    name="categoriaId"
                    value={inputs.categoriaId}
                    onChange={(e) => manejarInputs(e)}
                >
                    {categorias.map(({cat_id, cat_nom}, i) => (
                        <option value={cat_id} key={i}>
                            {cat_nom}
                        </option>
                    ))}
                </select>
            </div>

            <MapContainer
                center={[-12, -77]}
                zoom={15}
                style={{height:"400px"}}
            >
                {/* Tileyaer es el proveedor de datos para el mapa */}
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <AddMarker />
                <Marker position={marcador} />
            </MapContainer>

            <button 
                className="btn btn-primary" type="submit" 
                disabled={existeErrorInputs()}
            >
                Guardar
            </button>
        </form>
    </div>
  )
}
