const {Sequelize }= require('sequelize');

const sequelize = new Sequelize('tareas', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    port: "3306"
  });

  const conexionBD = async () => {
      
    try {
        await sequelize.authenticate(); 
   
    } catch (error) {
        console.error('Error en la conexion con la bd:', error);
    }

  }


  module.exports = { 
      conexionBD,
    sequelize,
  }