import { Request, NextFunction } from "express";
import ThingRepository from "@/store/thing.repository";
import Thing from "@/interfaces/Entities/Thing/thing.interface";

class ThingBusiness {
    private ThingRepository = new ThingRepository();

    public listThings = async (): Promise<Thing[] | void> => {
        try {
            const things = await this.ThingRepository.getThings();

            return things;
        } catch (e) {
            throw e;
        }
    };

    public searchThingById = async (id: any): Promise<Thing[] | void> => {
        try {
            const things = await this.ThingRepository.getThingById(id);

            return things;
        } catch (e) {
            throw e;
        }
    };

    public addThing = async (thing: Thing): Promise<Thing[] | void> => {
        try {
            const result = await this.ThingRepository.postThing(thing);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public updateThing = async (thing: Thing): Promise<Thing[] | void> => {
        try {
            const result = await this.ThingRepository.updateThingById(thing);

            return result;
        } catch (e) {
            throw e;
        }
    };

    public deleteThingById = async (id: any): Promise<Thing[] | void> => {
        try {
            const things = await this.ThingRepository.deleteThingById(id);

            return things;
        } catch (e) {
            throw e;
        }
    };
}

export default ThingBusiness;
