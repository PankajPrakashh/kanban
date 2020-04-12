import { HttpServer } from './express/server';
import { ExpressApp } from './express/app';
import { AppRoutes } from './routes';
import { environment } from './env';
import colors from 'colors';

// Nobody likes dirty console, lets clean it.
function showDevMessage() {
  
  console.clear();

  console.log(colors.bold.cyan('Kanban Development Server'.toUpperCase()));

  console.log();
} 

// Show dev message 
if (!environment.production) {
  showDevMessage();
}


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