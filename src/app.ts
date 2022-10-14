/* eslint-disable quotes */
import createError from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import logger from "morgan";
import cors from "cors";
import helmet from "helmet";

import usersRouter from "./routes/userRoute";

const app = express();

console.log("app running on port 5000");

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(
  express.json({
    limit: "10mb",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/users", usersRouter);

app.use("/", (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of nawill.ng Server");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  next();
});

export default app;