import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const socketServer = new Server(server);

socketServer.on('connection', (socket) => {
    console.log('a user connected', socket.id);
});

server.listen(6000, () => {
    console.log(`[SOCKET SERVER]: Listening at http://localhost:${6000}`);
});