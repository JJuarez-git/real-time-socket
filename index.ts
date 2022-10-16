import SocketServer from "./server";

SocketServer.instance.start(() => {
    console.log(`[SOCKET SERVER]: Listening at http://localhost:${9000}`);
})