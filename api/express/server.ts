#!/usr/bin/env node

/**
 * Module dependencies.
 */
import express from 'express';
import { Logger } from '../lib';
import http from 'http';
import { env } from '../env';


export class HttpServer {

  private static server: http.Server;
  private static PORT: any;

  /**
   * Creates a single instance of the server
   */
  static createServer(app: express.Application): http.Server {
    
    // Return existing instance of the server
    if (this.server) {
      Logger.log('Returning existing server instance');
      return this.server;
    }

    // No server created, create a new server
    // Assign the reference of newly created server for future usage
    this.server = this.createNewServer(app);

    // Return newly created server instance
    return this.server;
  }

  /**
   * Creates an express server
   */
  private static createNewServer(app: express.Application): http.Server {
    
    Logger.log('Creating http server');

    /**
     * Get port from environment and store in Express.
     */
    const PORT = this.normalizePort(process.env.PORT || env.port);
    this.PORT = PORT;
    app.set('port', PORT);

    /**
     * Create HTTP server.
     */
    const server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(PORT);
    server.on('error', (err) => this.onError(err));
    server.on('listening', () => this.onListening());
    
    // Return newly created server
    return server;
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  private static onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof this.PORT === 'string'
      ? 'Pipe ' + this.PORT
      : 'Port ' + this.PORT;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        Logger.error(bind + ' requires elevated privileges');
        process.exit(1);
      case 'EADDRINUSE':
        Logger.error(bind + ' is already in use');
        process.exit(1);
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  private static onListening() {
    var addr = this.server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.address + addr.port;
    Logger.log('Listening on ' + bind);
  }

  /**
   * Normalize a port into a number, string, or false.
   */
  private static normalizePort(val: any) {

    let port = parseInt(val, 10);

    let portValue: boolean | string | number = false;

    if (isNaN(port)) {
      // named pipe
      portValue = val;
    }

    if (port >= 0) {
      // port number
      portValue = port;
    }

    return portValue;
  }

}
