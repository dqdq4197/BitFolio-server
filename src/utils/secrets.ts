import dotenv from 'dotenv';
import logger from './logger';

dotenv.config()
const ENVIROMENT = process.env.NODE_ENV;
export const prod = ENVIROMENT === 'production';

export const SESSION_SECRET = process.env["SESSION_SECRET"]

if (!SESSION_SECRET) {
  logger.error("No client secret. Set SESSION_SECRET environment variable.");
  process.exit(1);
}

