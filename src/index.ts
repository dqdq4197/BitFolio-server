import 'reflect-metadata';
import { createConnection } from 'typeorm';

import app from '/config/express';
import logger from '/config/logger';
import { ormConfigs, ConfigsType } from '/typeorm/config/ormconfig';

const PORT = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

createConnection(ormConfigs[env as keyof ConfigsType])
  .then(() => {
    logger.info('database connection created');
    app.listen(PORT, () => {
      logger.info(`Server running at ${PORT}`);
    });
  })
  .catch((error: Error) => {
    logger.info(`Database connection failed with error ${error}`);
  });