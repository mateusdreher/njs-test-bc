import express, { json, NextFunction, Request, Response } from "express";
import {router} from "./presentation/routes/router";

const app = express();

// Middleware for logging requests
const requestLogger = (req: Request, res: Response, next: NextFunction) => {
	console.log(`\n\nMETHOD: ${req.method}\n\nROUTE: ${req.url} \n\nDATE: ${new Date()}\n\n`);
	next();
  };

app.use(requestLogger);
app.use(json());
app.use(router);

export {app}


