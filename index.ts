import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
const app = express();
const server = http.createServer(app);
const socketServer = new Server(server);

socketServer.on('connection', (socket) => {
    console.log('a user connected', socket.id);
});

server.listen(9000, () => {
    console.log(`[SOCKET SERVER]: Listening at http://localhost:${9000}`);
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())