const base = '/api';

export default {
  url: {
    base,
  },
  timers: {
    JWT_EXPIRATION: '720h',
  },
  env: {
    authSecret: process.env.TOKEN_SECRET_KEY || 'test',
  },
  authorizationIgnorePath: [
    `${base}/user/auth/login`,
    `${base}/user/auth/register`,
  ],
};