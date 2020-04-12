import { startServer } from './express/server';
import { initRoutes } from './routes';

// Start kanban api server
startServer();

// Initialize all app routes
initRoutes();