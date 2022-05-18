import {useEffect, useState, useRef} from 'react'
import { obtenerCategorias } from '../services/categoriasService';
import { editarLugar, obtenerLugarPorId } from '../services/lugaresService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MapContainer, TileLayer, Marker, useMapEvents, Popup } from "react-leaflet"
import {subirArchivo} from "../config/fireStorage"
import Cargando from "../components/Cargando"
import {useParams} from "react-router-dom"

let miArchivo = null

export default function EditarLugarView() {
    const [inputs, setInputs] = useState({
        lug_nom:"",
        lug_desc:"",
        lug_dir:"",
        categoriaId:1,
        lug_coords: [-12.018, -77.005]
    })

    const [categorias, setCategorias] = useState([])

    const [loading, setLoading ] = useState(false)

    // estado para marcador de mapa [lat, long]
    // const [marcador, setMarcador] = useState([-12, -77])

    // agregado el 11.05
    const inputFile = useRef()
    const manejarFile = (e) => {
        console.log("manejarFile", e.target.files)
        miArchivo = e.target.files[0]
    }

    const navigate = useNavigate()

    // useParams permite obtener los parámetros que se tengan en la URL
    // const params = useParams()
    // console.log({params})
    const { idCat, idLugar } = useParams()
    // console.log({ idCat, idLugar })

    const manejarInputs = (e) => {
        // console.log(e.target.name, e.target.value)
        setInputs({
            // spread operator para modificar propiedades del objeto inputs
            // según el name recibido del evento, se le asigna un valor
            // en <select> name="categoriaId" <option value={cat_id}>
            ...inputs, [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            // aregado el 11.05
            const archivoSubido = await subirArchivo(miArchivo)
            console.log({archivoSubido})
            // await crearLugar(inputs)
            // 12.05
            await editarLugar(idCat, idLugar, {...inputs, lug_img:archivoSubido})

            setLoading(false)
            
            Swal.fire({
                icon:"success",
                title:"Lugar modificadao!"
            })
            navigate("/lugares")
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const existeErrorInputs = () => {
        if(inputs.lug_nom.trim() === "" || 
        inputs.lug_desc.trim() === "" || 
        inputs.lug_dir.trim() === ""){
        // si es true (inputs vacíos), retorna true
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
                const {lat, lng} = e.latlng;
                setInputs({
                    ...inputs,
                    lug_coords:[lat, lng]
                })
                // setMarcador([lat, lng])
            }
        })
    }

    useEffect(() => {
        const getCategorias = async () => {
            try {
                // 1. se obtienen las categorías
                const categoriasObtenidas = await obtenerCategorias()
                // console.log({categoriasObtenidas}) // array de objetos (categorías)
                // solamente se requiere id y nom
                // map itera y devuelve cada objeto del array sólo con las propiedades id y nom
                const infoCategorias = categoriasObtenidas.map(({cat_id, cat_nom}) => {
                    return {cat_nom:cat_nom, cat_id:cat_id}
                })
                // console.log({infoCategorias}) // array de objetos
                setCategorias(infoCategorias)

                // 2. se obtiene el lugar a editar
                const lugarAEditar = await obtenerLugarPorId(idCat, idLugar)
                console.log({lugarAEditar})
                setInputs(lugarAEditar)
            } catch (error) {
                console.log(error)
            }
        }
        getCategorias()
    }, [])

    // 12.5
    // renderizado condicional
    // if(loading) debe ir después del useEffect
    if(loading){
        // en caso el estado loading sea true, en vezde retornar el componente..., retornará el componente Carngando
        return <Cargando />
    }

    return (
        <div>
            <h1 className="mb-3">
                Editar Lugar
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

                {/* agregado el 11.05 */}
                <div className="mb-3">
                    <label className="form-label">
                        Seleccione imagen
                    </label>
                    <input 
                        type="file" className="form-control"
                        ref={inputFile}
                        onChange={(e) => {manejarFile(e)} } />
                </div>

                <MapContainer
                    center={inputs.lug_coords}
                    zoom={15}
                    style={{height:"400px"}}
                >
                    {/* Tileyaer es el proveedor de datos para el mapa */}
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <AddMarker />
                    <Marker position={inputs.lug_coords}>
                        <Popup>
                            Información del Lugar {inputs.lug_nom}
                        </Popup>
                    </Marker>
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
