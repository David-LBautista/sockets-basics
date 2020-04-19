const express = require('express');

//configuracion de socket.io
const socketIo = require('socket.io');
const http = require('http');



const path = require('path');

const app = express();
let server = http.createServer(app);



const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializamos el socket.io ; esta es la comunicacion del backend
// on son para escuchar en el servidor
module.exports.io = socketIo(server);
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});