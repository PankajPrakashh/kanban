import { SigninDetails, SigninRequest } from '../../../typings';

export class AuthService {
  
  async signin(payload: SigninRequest): Promise<SigninDetails> {

    return {
      token: 'token',
      userId: payload.userId,
      userName: payload.userId
    };
  }
}