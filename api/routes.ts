import { authModule } from './modules/auth';

// Define all route routes
export const AppRoutes = [
  { path: '/auth', route: authModule.router }
];