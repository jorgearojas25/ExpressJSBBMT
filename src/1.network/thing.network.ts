import Thing from "@/interfaces/Entities/Thing/thing.interface";
import { Router, Request, Response, NextFunction } from "express";
import Controller from "@/interfaces/common/controller.interface";
import validationMiddleware from "@/middleware/validation.middleware";
import validate from "@/interfaces/Entities/Thing/thing.validation";
import ThingBusiness from "@/business/thing.business";
import response from "@/utils/response";

class ThingNetwork implements Controller {
    public path = "/thing";
    public router = Router();
    private ThingBusiness = new ThingBusiness();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        /**
         * Get List of things
         */
        this.router.get(`${this.path}`, this.listThings);

        /**
         * Get thing by Id
         */
        this.router.get(`${this.path}/:id`, this.searchThingById);

        /**
         * Create one Thing
         */
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.thingValidation),
            this.addThing
        );

        /**
         * Update one Thing
         */
        this.router.patch(
            `${this.path}`,
            validationMiddleware(validate.thingValidation),
            this.updateThing
        );

        /**
         * Delete thing by Id
         */
        this.router.delete(`${this.path}/:id`, this.deleteThingById);
    }

    //* Network Methods

    private listThings = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Thing[]> => {
        try {
            const data = await this.ThingBusiness.listThings();

            response.success(res, data, 200, "Everything is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private searchThingById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Thing[]> => {
        try {
            const data = await this.ThingBusiness.searchThingById(
                req.params.id
            );

            response.success(res, data, 200, "Everything is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private addThing = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Thing[]> => {
        try {
            const data = await this.ThingBusiness.addThing(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private updateThing = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Thing[]> => {
        try {
            const data = await this.ThingBusiness.updateThing(req.body);

            response.success(res, data, 201, "Created");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };

    private deleteThingById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Thing[]> => {
        try {
            const data = await this.ThingBusiness.deleteThingById(
                req.params.id
            );

            response.success(res, data, 200, "Everything is ok");
        } catch (e: any) {
            response.error(res, 500, "Internal Server Error", e);
        }
    };
}

export default ThingNetwork;
