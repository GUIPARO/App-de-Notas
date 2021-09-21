const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

}
let escribirJSON = function(array) {
    JSON.stringify(fs.writeFileSync('./tareas.json',array))
}

let guardarTarea = function(objeto){
    let leerJson = archivoTareas.leer()
    leerJson.push(objeto)
    const tareaJson = JSON.stringify(leerJson,null,4)
    escribirJSON(tareaJson)
}

let filtrarPorEstado = function(busqueda){
    let filtrarJson = archivoTareas.leer()
    return filtrarJson.filter((elemento) => elemento.estado == busqueda)
}


module.exports = {archivoTareas, escribirJSON, guardarTarea,filtrarPorEstado}

