import express from 'express'
import socketIO from 'socket.io'
import http from 'http'
import cors from 'cors'
require('dotenv').config()

export default class SocketServer {

    private static _instance: SocketServer;

    public app: express.Application;
    public port = process.env.SOCKET_PORT || 9000
    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express()
        this.httpServer = new http.Server(this.app)
        this.io = require('socket.io')(this.httpServer, {
            cors: { credentials: true, }
        })
        this.config()
        this.routes()
        this.actions()
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    private config() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors())
    }

    private routes() {
        //this.app.use('/api', router)
    }

    private actions() {
        this.io.on('connection', (client) => {
            console.log(`${new Date().toLocaleTimeString()} [SOCKET SERVER][CLIENT CONNECTED]: ID: ${client.id}`)

            client.on('disconnect', () => {
                console.log(`${new Date().toLocaleTimeString()} [SOCKET SERVER][CLIENT DISCONNECTED]: ID: ${client.id}`)
            })
        })
    }

    public start(callback?: any) {
        this.httpServer.listen(this.port, callback)
    }
}