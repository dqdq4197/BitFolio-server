import { ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export type ConfigsType = {
  development: ConnectionOptions
  production: ConnectionOptions
}

export const ormConfigs: ConfigsType = {
  development: {
    name: "local",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DEVELOPMENT_DB_USERNAME,
    password: process.env.DEVELOPMENT_DB_PASSWORD,
    database: process.env.DEVELOPMENT_DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["src/typeorm/entities/**/*.ts"],
    subscribers: ["src/typeorm/subscriber/**/*.ts"],
    migrations: ["src/typeorm/migration/**/*.ts"],
    namingStrategy: new SnakeNamingStrategy(),
  },
  production: {
    name: "production",
    type: "mysql",
    host: process.env.PRODUCTION_DB_HOST,
    port: 3306,
    username: process.env.PRODUCTION_DB_USERNAME,
    password: process.env.PRODUCTION_DB_PASSWORD,
    database: process.env.PRODUCTION_DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: ["build/entities/**/*.js"],
    subscribers: ["build/subscriber/**/*.js"],
    migrations: ["build/migration/**/*.js"],
    migrationsTableName: "migrations",
    cli: {
      entitiesDir: "src/typeorm/entities",
      migrationsDir: "src/typeorm/migration",
      subscribersDir: "src/typeorm/subscriber"
    },
    namingStrategy: new SnakeNamingStrategy(),
  }
}