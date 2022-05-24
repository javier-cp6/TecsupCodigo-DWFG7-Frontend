import { useState, useRef } from "react"
import { crearCategoria } from "../services/categoriasService"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import {subirArchivo} from "../config/fireStorage"
import Cargando from "../components/Cargando"

let miArchivo = null

export default function CrearCategoriaView() {
    const [input, setInput] = useState({
        cat_nom:"",
        cat_desc:""
    })

    const [loading, setLoading ] = useState(false)


    //   similar a un new Navigate()
    const navigate = useNavigate()

    const inputFile = useRef()
    const manejarFile = (e) => {
        // console.log("manejarFile", e)
        miArchivo = e.target.files[0]
    }

    const manejarInput = (e) => {
        // console.log("NAME", e.target.name, "VALUE", e.target.value)
        setInput({
            // spread operator para modificar propiedades del objeto input
            ...input,
            // [e.target.name]:e.target.value es un truco para trabajar con varios estados (input)
            // p. ej. e.target.name = "cat_nom" modifica el valor de "cat_nom"
            [e.target.name]:e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)

            const archivoSubido = await subirArchivo(miArchivo)
            // console.log({archivoSubido}) // url de Firebase

            await crearCategoria({...input, cat_img:archivoSubido})
            // reemplazar alert por sweetalert
            // alert("Categoria creada")

            setLoading(false)

            Swal.fire({
                icon:"success",
                title:"Category added!"
            })
            // setInput (para borrar propiedades del estado). Ya no es necesario al incluir el navigate
            // setInput({
            //     cat_nom:"",
            //     cat_desc:""
            // })
            // navegar al home
            navigate('/')
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    if(loading){
        // en caso el estado loading sea true, en vez de retornar el componente con el form, retornará el componente Cargando
        return <Cargando />
    }

    return (
        <>
            <h1>Add new category</h1>
            <form onSubmit={(e) => {manejarSubmit(e)}}>
                <div className="mb-3">
                    <label className="form-label">
                        Category name
                    </label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="E.g. Cafés"
                        name="cat_nom"
                        value={input.cat_nom}
                        onChange={(e)=> {manejarInput(e)}}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Category description
                    </label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Type a description for the category"
                        name="cat_desc"
                        value={input.cat_desc}
                        onChange={(e)=> {manejarInput(e)}}
                    />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">
                        Choose image
                    </label>
                    <input 
                        type="file" className="form-control"
                        ref={inputFile}
                        onChange={(e) => {manejarFile(e)} } />
                </div>

                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </>
    )
}