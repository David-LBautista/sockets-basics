var socket = io();

socket.on('connect', function() {
    console.log("COnectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor");
});

//emitir desde el cliente hacia el servidor
socket.emit('enviarMensaje', {
    usuario: 'David',
    mensaje: 'EL PUTO AMO'
}, function() {
    console.log("Se disparo el callback");
});

//escuchar informacion
socket.on('enviarMensaje', function(resp) {
    console.log('InfoServidor', resp);
});