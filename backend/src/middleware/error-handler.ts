import { NextFunction, Request, Response } from "express";
import CustomError from "../errors/CustomError";
import { getErrorMessage } from "../utils";

export default function errorHandler(
    error: unknown,
    request: Request,
    response: Response,
    next: NextFunction
) {
    if (response.headersSent) {   // TODO
        next(error);
        return;
    }
    
    if (error instanceof CustomError) {
        response.status(error.statusCode).json({
            error: {
                message: error.message,
                code: error.code
            }
        });

        return;
    }
    
    response.status(500).json({
        error: getErrorMessage(error)
    })
};
