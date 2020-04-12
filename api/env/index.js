import { environment as dev } from './dev.env';
import { environment as prod } from './prod.env';

// Define environment based on the command line env variable
const env = process.env.NODE_ENV === 'production' ? prod : dev;

// Environment export
export default env;