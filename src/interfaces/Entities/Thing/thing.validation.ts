import Joi from "joi";

/**
 * Validation for add a Thing
 */
const thingValidation = Joi.object({
    id: Joi.number(),
    test_name: Joi.string().required(),
    test_date: Joi.date().default(new Date()),
    active: Joi.bool(),
});

export default { thingValidation };
