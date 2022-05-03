// reglas de componentes
// 1.1 comienzan con mayúscula, tanto el nombre del archivo como del componente

// por facilidad, se recomienda usar el mismo nombre del archivo para la varible (List)
const List = (props) => {
    // console.log(props)

    // return, será el JSX que se dibujará en el navegador y se suele utilizar con ()

    return (
        <div>
            <h4>Lista</h4>
            <h6>{props.subtitulo}</h6>
        </div>
    )

}

export default List