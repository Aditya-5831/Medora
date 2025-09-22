import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message: err.message,
    details: err.details || null,
    ...(process.env.NODE_ENV === "developement" && { stack: err.stack }),
  });
};
