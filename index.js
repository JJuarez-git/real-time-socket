const net = require('net');
const port = 6000

const server = net.createServer((socket) => {
    socket.end(`${new Date()}\n`);
});

server.listen(port, () => {
    console.log(`Socket listening on port ${port}`);
});