const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido Administrador'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //mandar informacion a cada uno de los usuarios
        client.broadcast.emit('enviarMensaje', data);

        /*if(mensaje.usuario){
            callback({
                resp: 'TODO SALIO BIEN!!'
            });
        }else {
            callback({
                resp: 'TODO SALIO MAL!!!!!!!!!!!'
            });
        }*/

    });


});