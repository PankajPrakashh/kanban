import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';


export class ExpressApp {

  private static app: express.Application;


  /**
   * Returns existing instance of express app if already created.
   * Otherwise creates a new instance of the express app and returns 
   * the new instance. 
   */
  static createApp(): express.Application {

    // Express instance exists, return the same
    if (this.app) {
      return this.app;
    }
    
    // Express app instance does not exists.
    // Create new express app instance and return.
    this.app = this.createNewApp();

    return this.app;
  }

  /**
   * Creates a new instance of express app.
   */
  private static createNewApp(): express.Application {

    const app = express();

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    return app;
  }
}