import 'reflect-metadata';
import express from 'express';
import 'dotenv/config'
import { createConnection } from 'typeorm';
import compression from 'compression';
import session from "express-session";
import bodyParser from "body-parser";
import cors from 'cors';
import morgan from 'morgan';
import lusca from 'lusca';
import path from 'path';
import { ormConfigs } from '/ormconfig';
import { SESSION_SECRET, prod } from '/utils/secrets';

// Connect typeORM mysql
createConnection(ormConfigs.development)
  .then(() => {
    console.log('Database Connected :)');
  })
  .catch((error) => console.log(error));

const app = express();

// middlewares
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: true,
	secret: SESSION_SECRET!,
	saveUninitialized: true
}));
if(!prod) morgan('dev')
app.use(cors());
//passport initialize and session

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(
  express.static(path.join(__dirname, "public"),
  { maxAge: 31557600000 })
);

export default app;