// importacion de la depedencia de sequelize para la conexion a la base de datos    
const  {Sequelize,DataTypes} =require("sequelize");


//configuracion para la base de datos, recibe como parametros el nombre de la BD,el usuario y la contraseña de las base de datos, y finalmente un objeto con la configuracion para realizar la conexion con el servidor de base de datos que dialecto utilizara el puerto y el host
const db = new Sequelize("tareas","root","",{
    host:"localhost",
    dialect:"mysql",
    port:"3306"
})

//funcion que realiza la conexion a la base de datos e importa los modelos para que se creen automaticamente en la base de datos
const conexionBD =async()=>{

    try {
        require("../models/Todo");
        await db.sync();
        await db.authenticate();

    } catch (error) {
        console.log(error);
    }


}

//exportanto el contenido para usarlo en otros archivos
module.exports ={
    conexionBD ,
    DataTypes,
    db
}