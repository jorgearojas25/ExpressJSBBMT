import { Router, Request, Response, NextFunction } from "express";

const success = (
    res: Response,
    entities: void | any[],
    status?: number,
    messages?: string[] | string
): void => {
    res.status(status || 200).send({
        result: true,
        entities: entities,
        messages: messages || "Everything is fine!",
    });
};

const error = (
    res: Response,
    status?: number,
    messages?: string[] | string,
    log?: string[] | string | void
): void => {
    console.log(log);

    res.status(status || 200).send({
        result: false,
        entities: [],
        messages: messages || "Server Error",
    });
};

export default { success, error };
