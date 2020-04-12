import { HttpServer } from './express/server';
import { ExpressApp } from './express/app';
import { AppRoutes } from './routes';

// Create a new instance of express app
const app = ExpressApp.createApp();

/**
 * Initialize app api routes
 */
AppRoutes.forEach(r => {
  app.use(r.path, r.route)
});


// Create a new instance of http server 
const server = HttpServer.createServer(app);