import express from 'express';

import { AuthHandler } from './handler';

// Get the router
const router = express.Router();

// Auth module handler
const handler = new AuthHandler();

/**
 * Define all auth routes
 */

router.post('/signin', handler.signin);


// Module exports 
export default router;