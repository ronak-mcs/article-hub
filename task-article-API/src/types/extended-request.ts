import { Request } from 'express';
import { Session } from 'express-session';

interface customSessionData extends Session {
  token?: string;
  uid?: string;
  role?: string;
}

export interface sessionRequest extends Request {
  session: customSessionData;
}
