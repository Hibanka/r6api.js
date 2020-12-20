import { tmpdir } from 'os';
import { join } from 'path';
import { promises as fs } from 'fs';

import fetch from './fetch';
import { UnknownAuthorizationError } from './errors';
import { URLS } from './utils';

export interface IUbiAuth {
  ticket: string;
  expiration: string;
}

let LOGIN_TIMEOUT: any;
const credentials = { email: '', password: '' };

const tokenFileName = 'r6api-token.json';
const TEN_MIN_IN_MS = 10 * 60 * 1000;
let tokenFile = join(tmpdir(), tokenFileName);

export const parseToken = async () => {
  return await fs.readFile(tokenFile, 'utf8')
    .then((auth) => JSON.parse(auth))
    .catch(() => '');
};

const getExpiration = (auth: IUbiAuth) =>
  +new Date(auth.expiration) - +new Date() - TEN_MIN_IN_MS;

export const login = async () => {

  const lastAuth: IUbiAuth = await fs.readFile(tokenFile, 'utf8')
    .then((auth) => JSON.parse(auth))
    .catch(() => '');
  if (lastAuth && getExpiration(lastAuth) > 0) {
    setNextLogin(lastAuth);
    return lastAuth;
  }

  const token = 'Basic ' + Buffer
    .from(`${credentials.email}:${credentials.password}`, 'utf8')
    .toString('base64');

  return fetch<IUbiAuth>(URLS.LOGIN(), {
    method: 'POST',
    body: JSON.stringify({ rememberMe: true })
  })(token)
    .then(async res => {
      if (res && res.ticket && res.expiration) {
        await fs.writeFile(tokenFile, JSON.stringify(res));
        return res;
      } else
        throw new UnknownAuthorizationError('No response from login: ' + JSON.stringify(res));
    })
    .catch(err => {
      clearTimeout(LOGIN_TIMEOUT);
      throw err;
    });
};

const setNextLogin = async (auth: IUbiAuth) => {
  LOGIN_TIMEOUT = setTimeout(() => login(), getExpiration(auth));
};

export const getToken = () => login().then(auth => `Ubi_v1 t=${auth.ticket}`);

export const setCredentials = (email: string, password: string) => {
  credentials.email = email;
  credentials.password = password;
};

export const setTokenFileLocation = (dir: string) => {
  tokenFile = join(dir, tokenFileName);
};
