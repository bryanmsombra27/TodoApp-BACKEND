//importacion de las dependencias
const express = require('express');
const cors = require('cors');
//importacion de la conexion a la base de datos
const {conexionBD} = require("./config/db")
//importacion de las funciones del controlador
const {obtenerTareas, enviarTarea, actualizarTarea, obtenerTareasPendientes, obtenerTareasExito,eliminarTarea       } = require("./controller/todocontroller");

//puerto de conexion del servidor
const port  = 3000;

//inicializacion del servidor
const app = express();

//middleware para configurar el servidor
app.use(express.json());
app.use(cors());

//funcion que ejecuta la conexion a la base de datos    
conexionBD()

//rutas del servidor y sus respectivas funciones de controlador
app.get("/",obtenerTareas);
app.get("/pendientes",obtenerTareasPendientes);
app.get("/exito",obtenerTareasExito);
app.post("/",enviarTarea);
app.put("/:id",actualizarTarea);
app.delete("/:id",eliminarTarea);


//funcion que permite iniciar el servidor en el puerto especificado
    app.listen(port, () => {
        console.log('escuchando peticiones por el puerto: ' + port);
    });
    
