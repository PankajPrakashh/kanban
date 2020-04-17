import { NextFunction, Request, Response } from 'express';

import { HttpStatusCode, SigninRequest } from '../../../typings';
import { Logger } from '../../lib';
import { AuthService } from './service';

export class AuthHandler {

  /**
   * Signin the user to the app. Validate a user request for login payload.
   * 
   * @async
   */
  async signin(req: Request, res: Response<any>, next: NextFunction) {

    Logger.log('Signin user to the app');

    // Extract request payload
    const reqPayload: SigninRequest = req.body;

    Logger.log('Signin request payload', reqPayload);

    // Service handling helpers
    let authService = new AuthService();

    // Get signin details
    const response = await authService.signin(reqPayload);

    Logger.log('Returning response back to the user', response);

    // Return Api response
    return res.status(HttpStatusCode.OK)
      .send(response);
  }
}