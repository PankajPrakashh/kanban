import express from 'express';

// Get the router
const router = express.Router();

/**
 * Define all auth routes
 */

router.get('/', (req, res, next) => { 

  // Dummy response
  res.status(200).send('Hello World!');
});


// Module exports 
export default router;