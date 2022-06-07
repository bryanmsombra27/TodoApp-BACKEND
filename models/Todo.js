//importacion de los tipos de datos de sequelize y la referencia a la base de datos
const {DataTypes,db} = require("../config/db")

//creacion del modelo de la base de datos 
const Todo = db.define("todos",{
    id:{ //nombre del campo en la base de datos
        type: DataTypes.INTEGER, //define el tipo de campo que se creara en la base de datos
        autoIncrement: true, // define que el campo se autoincrementara
        primaryKey: true //define que el campo es la llave primaria
    },
    nombre:{ //nombre del campo en la base de datos
        type: DataTypes.STRING, //define el tipo de campo que se creara en la base de datos
    },
    estado:{
        type: DataTypes.BOOLEAN,
        defaultValue:false //se puede definir un valor por defecto para el campo
    }
})

//exportanto el contenido para usarlo en otros archivos
module.exports ={
    Todo
}