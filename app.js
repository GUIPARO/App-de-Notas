let {archivoTareas, guardarTarea,escribirJSON,filtrarPorEstado} = require('./tareas');

let accion = process.argv[2];

switch (accion) {
    case 'listar':
        console.log('Listado de tareas');
        let listarTareas = archivoTareas.leer()
        listarTareas.forEach((element, indice) => {
            return console.log((indice + 1) + ". " + element.titulo + "-" + element.estado)
        })
        break;
    case 'crear':
        let objeto = {
            titulo: process.argv[3],
            estado: "pendiente"
        }
        guardarTarea(objeto)
        break;
    case 'filtrar':
        let estado = process.argv[3]
        let filtrar = filtrarPorEstado(estado)
        console.log("Las siguientes tareas se encuentran: " + estado)
        console.log(filtrar)
        break;
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar,crear y filtrar');
        break;
}
