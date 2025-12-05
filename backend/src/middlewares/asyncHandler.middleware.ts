import { NextFunction, Request, Response } from "express";

type AsyncControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;


export const asyncHandler = (Controller: AsyncControllerType): AsyncControllerType => {
    return async (req, res, next) => {
        try {
            await Controller(req, res, next);
        } catch (error){
            next(error);
        }
    }
};