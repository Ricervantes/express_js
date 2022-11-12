console.log("entro a mi archivo index.js con nodemon");
const express = require('express');
const app = express();
const port = 3000;
//este es un verbo get de http
app.get('/', (req, res) => {
    res.send("hola mundo");
});
app.get('/usuario/:id', (req, res) => {
    //send regresa texto plano o html 
    //res.send("entro al metodo GET de usuario es para Traer Datos");
    // Regresar un json
    res.json(
        {
            mensaje: "Entro al metodo GET usuario",
            funcionalidad:"el metodo get se utiliza como un estandar para REGRESAR(READ) datos",
            parametro_ruta: req.params.id
        }
    );
});
app.post('/usuario', (req, res) => {
    res.json(
        {
            mensaje: "Entro al metodo POST usuario",
            funcionalidad:"el metodo get se utiliza como un estandar para regresar(CREATE) datos"
        }
    );
});
app.put('/usuario', (req, res) => {
    res.json(
        {
            mensaje: "Entro al metodo PUT usuario",
            funcionalidad:"el metodo PUT se utiliza como un estandar para ACTUALIZAR(UPDET)  datos"
        }
    );
});
app.delete('/usuario', (req, res) => {
    res.json(
        {
            mensaje: "Entro al metodo  DELETE usuario",
            funcionalidad:"el metodo DELETE se utiliza como un estandar para BORRAR datos"
        }
    );
});


app.listen(port, () => {
    console.log(`tu servidor de node esta corriendo en: http://localhost:${port}`)
});