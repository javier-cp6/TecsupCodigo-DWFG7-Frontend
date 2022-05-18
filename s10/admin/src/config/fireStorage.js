import { storage } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid"


// función que devuelva una Promise, dado que subir un archivo es una tarea asíncrona
const subirArchivo = (archivo) => {
    // se complica utilizar async/await porque está manejado con callbacks
    return new Promise ((resolve, reject) => {
        const extension = archivo.type.split("/")[1]
        console.log({extension})
        const nombreUUID = v4()

        // referencia de dirección y nombre del archivo a guardar
        // const referenciaStorage = ref(storage, `fotos/miFoto.jpg`)
        const referenciaStorage = ref(storage, `fotos/${nombreUUID}.${extension}`)
        // crear una referencia a la tarea de subida del archivo que se ejcuta con
        // uploadBytesResumable(refStorage, archivo_a_subir)
        const tareaSubida = uploadBytesResumable(referenciaStorage, archivo)
        // .on es como un Listener que escucha el evento 'state_changed' con 3 callbacks: para supervisar la subida (1),  detectar algún error (2), y el fin de la subida con la url (3). 
        tareaSubida.on('state_changed',
            // 1. supervisar subida del archivo
            () => {},
            // 2. en caso de error al subir
            (error) => { reject(error)},
            // 3. cuando finaliza la subida del archivo
            () => {
                getDownloadURL(referenciaStorage)
                .then((url) => {
                    console.log({url})
                    resolve(url)
                })
            }    
        )
    })
}

export {
    subirArchivo
}
