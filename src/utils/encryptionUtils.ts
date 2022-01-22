import jwt from 'jsonwebtoken';

import application from '/constants/applications';

const createJwtToken = (key: string, value: string) => {
  const data: { [key: string]: string } = {};
  data[key] = value;
  return jwt.sign({ data }, application.env.authSecret, {
    expiresIn: application.timers.JWT_EXPIRATION,
  });
};


export { createJwtToken };