import app from './app';
import { authModule } from './modules/auth';

/**
 * Initialize all module routes
 */
function initRoutes() {

  app.use('/auth', authModule.router);
}

// Module exports
export default initRoutes;