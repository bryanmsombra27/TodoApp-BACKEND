//importacion del modelo de base de datoss
const {Todo} = require("../models/Todo");

//obtener todos los registros de la base de datos
async function obtenerTareas (req,res){

    try {
        const tareas = await Todo.findAll();

        if(tareas){
            return res.status(200).json({
                status:"exito",
                tareas,
                cantidad:tareas.length
            })
        }

        
    } catch (error) {
        console.log(error)
        return res.json({
            status:500,
            message:"error en el servidor"
        })
    }
}

//obtener todos los registros que coincidan con la condicion en este caso que el estado tenga un valor false(0)
async function obtenerTareasPendientes (req,res){

    try {
        const tareas = await Todo.findAll({
            where:{estado:false}
        });

        if(tareas){
            return res.status(200).json({
                status:"exito",
                tareas,
                cantidad:tareas.length
            })
        }

        
    } catch (error) {
        console.log(error)
        return res.json({
            status:500,
            message:"error en el servidor"
        })
    }
}
//obtener todos los registros que coincidan con la condicion en este caso que el estado tenga un valor true(1)
async function obtenerTareasExito (req,res){

    try {
        const tareas = await Todo.findAll({
            where:{estado:true}
        });

        if(tareas){
            return res.status(200).json({
                status:"exito",
                tareas,
                cantidad:tareas.length
            })
        }

        
    } catch (error) {
        console.log(error)
        return res.json({
            status:500,
            message:"error en el servidor"
        })
    }
}

//funcion que permite crear un nuevo registro en la base de datos
async function enviarTarea(req,res){
    try {
        //se obtiene el contenido de la peticion
        const tarea = req.body.nombre;

        //funcion del modelo que permite crear un nuevo registro en la base de datos debe seguir el formato del modelo para crearlo apropiadamente

        const nuevaTarea= await  Todo.create({
            nombre:tarea,
        })

        //en caso de que se creo el registro se retorna un mensaje de exito
        return res.json({
            status:201,
            message:"tarea creada con exito"
        })
    } catch (error) {
        //en caso de existir un error en el servidor se imprime en consola y retorna una respuesta de error
        console.log(error)
        return res.json({
            status:500,
            message:"error en el servidor"
        })
    }
}


//funcion que permite actualizar un registro en la base de datos
async function actualizarTarea(req,res){
    try {
        //se obtiene el registro a ser actualizado por el id que se envia en la peticion
        const id = req.params.id;
        
        //metodo del modelo que permite actualizar un registro en la base de datos por medio del id
        const tareaActualizada = await Todo.update({
            estado:true
        },{
            where:{id}
        })
         //en caso de que se creo el registro se retorna un mensaje de exito
        return res.json({
            status:200,
            message:"tarea actualizada con exito"       
        })
        
    } catch (error) {
              //en caso de existir un error en el servidor se imprime en consola y retorna una respuesta de error
        console.log(error)
        return res.json({
            status:500,
            message:"error en el servidor"
        })
    }
}

//funcion que permite eliminar un registro en la base de datos
async function eliminarTarea(req,res){
    try {
        //se obtiene el registro a ser eliminado por el id que se envia en la peticion
        const id = req.params.id;
        //metodo del modelo que permite eliminar un registro en la base de datos por medio del id
        const tareaActualizada = await Todo.destroy (   {
            where:{id}
        })
        //en caso de que se elimino el registro se retorna un mensaje de exito
        return res.json({
            status:200,
            message:"tarea eliminada con exito"       
        })
        
    } catch (error) {
                //en caso de existir un error en el servidor se imprime en consola y retorna una respuesta de error
        console.log(error)
        return res.json({
            status:500,
            message:"error en el servidor"
        })
    }
}

//exportacion de las funciones para ser utilizadas como referencia en las rutas
module.exports ={
    obtenerTareas,
    enviarTarea ,
    actualizarTarea,
    obtenerTareasPendientes,
    obtenerTareasExito,
    eliminarTarea
}
