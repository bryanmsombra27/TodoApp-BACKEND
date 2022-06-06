const express = require('express');
const cors = require('cors');
const { conexionBD } = require('./config/db');
const port  = 3000;


const app = express();

app.use(express.json());
app.use(cors());


let tareas =[
    {id:Math.round(Math.random()*100 * new Date().getSeconds() +  new Date().getMilliseconds()),nombre:'Aprender React',estado:false},
    {id:Math.round(Math.random()*100 * new Date().getSeconds() +  new Date().getMilliseconds()),nombre:'Aprender Tailwind CSS',estado:false},
    {id:Math.round(Math.random()*100 * new Date().getSeconds() +  new Date().getMilliseconds()),nombre:'Aprender Bootstrap',estado:false},
];
conexionBD();


    app.listen(port, () => {
        console.log('escuchando peticiones por el puerto 3000');
    });
    
