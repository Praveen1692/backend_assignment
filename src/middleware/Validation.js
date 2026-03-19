const Joi = require("joi");



const userSchema = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});


const updatedUserSchema = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
}).min(1);




function validateUser(req, res, next) {
    const { error } = userSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const message = error.details.map((d) => d.message);
        return res.status(400).json({ error: "message validation is failed", details: message })
    }

    next()

}


function validateUserUpdate(req,res,next){
    const { error } = updatedUserSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const message = error.details.map((d) => d.message);
        return res.status(400).json({ error: "message validation is failed", details: message })
    }

    next()

}

module.exports={validateUser,validateUserUpdate}