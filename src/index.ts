import 'reflect-metadata';
import express from 'express';
import 'dotenv/config'
import { createConnection } from 'typeorm';
import compression from 'compression';
import session from "express-session";
import bodyParser from "body-parser";
import morgan from 'morgan';
import lusca from 'lusca';
import path from 'path';
import { SESSION_SECRET, prod } from 'util/secrets';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  resave: true,
	secret: SESSION_SECRET!,
	saveUninitialized: true
}));

if(!prod) {
  morgan('dev')
}

//passport initialize and session

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(
  express.static(path.join(__dirname, "public"),
  { maxAge: 31557600000 })
);

export default app;