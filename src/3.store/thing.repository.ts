import Repository from "@/interfaces/common/repository.interface";
import Thing from "@/interfaces/Entities/Thing/thing.interface";
import { connect } from "@/utils/db";
import querys from "@/utils/querys";

class ThingRepository implements Repository {
    public entitieName = "thing";

    /**
     * Get list of things
     */
    public async getThings(): Promise<any | Thing[]> {
        try {
            const conn = await connect();
            const things = await conn.query(
                querys.getAllRows(this.entitieName)
            );

            return things[0];
        } catch (e) {
            throw new Error("Unable to get things");
        }
    }

    /**
     * Get one thing by Id field
     * @param id thing Id
     */
    public async getThingById(id: any): Promise<any | Thing[]> {
        try {
            const conn = await connect();
            const things = await conn.query(
                querys.searchById(this.entitieName, id)
            );

            return things[0];
        } catch (e) {
            throw new Error("Unable to get things");
        }
    }

    /**
     * Add one thing
     * @param thing Insert data
     */
    public async postThing(thing: Thing): Promise<any> {
        try {
            const conn = await connect();
            const newThing = await conn.query(
                `INSERT INTO ${this.entitieName} SET ?`,
                thing
            );

            return newThing;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Method for update one thing
     * @param thing Data for update things
     * @returns information of the updated thing
     */
    public async updateThingById(thing: Thing): Promise<any> {
        try {
            const { id } = thing;
            const conn = await connect();
            const updatedThing = await conn.query(
                `UPDATE ${this.entitieName} SET ? WHERE id = ?`,
                [thing, id]
            );

            return updatedThing;
        } catch (e) {
            throw e;
        }
    }

    /**
     * Delete one thing by his Id
     * @param id Id of the thing to delete
     * @returns
     */
    public async deleteThingById(id: any): Promise<any> {
        try {
            const conn = await connect();
            const deletedThing = await conn.query(
                querys.deleteById(this.entitieName, id)
            );

            return deletedThing;
        } catch (e) {
            throw e;
        }
    }
}

export default ThingRepository;
