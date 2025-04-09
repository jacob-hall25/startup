const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
    const socketServer = new WebSocketServer({ server: httpServer });

    socketServer.on('connection', (socket) => {
        socket.isAlive = true;


        socket.on('message', function message(data) {
            socketServer.clients.forEach((client) => {
                if (client !== socket && client.readyState === WebSocketServer.OPEN) {
                    client.send(data);
                }
            });
        });

        socket.on('pong', () => {
            socket.isAlive =true;
        });
    });

    setInterval(() => {
        socketServer.clients.forEach(function each(client) {
            if (client.isAlive === false) return client.terminate();

            client.isAlive = false;
            client.ping();
        });
    }, 10000);

    socketServer.broadcast = function broadcast(data) {
        socketServer.clients.forEach((client) => {
            if (client.readyState === client.OPEN) {
                client.send(data);
            }
        });
    };

    return socketServer
}

module.exports = { peerProxy };
