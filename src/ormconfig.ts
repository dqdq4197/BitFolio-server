import { ConnectionOptions } from "typeorm";

type ConfigsType = {
  development: ConnectionOptions
  production: ConnectionOptions
}

export const ormConfigs: ConfigsType = {
  development: {
    name: "local",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "bitfolio",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    subscribers: ["src/migration/*.ts"],
    migrations: ["src/migration/*.ts"]
  },
  production: {
    name: "production",
    type: "mysql",
    host: "",
    port: 3306,
    username: "",
    password: "",
    database: "bitfolio",
    synchronize: false,
    logging: true,
    entities: ["build/entity/*.js"],
    subscribers: ["build/migration/*.js"],
    migrations: ["build/migration/*.js"],
    migrationsTableName: "migrations",
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  }
}