const {body} = require("express-validator")

const createUserValidator = [
    body("name").notEmpty().withMessage("Name is Required"),
    
    body("email").notEmpty().withMessage("Email is Required").bail().
    isEmail().withMessage("Email is Not Valid"),

    body("password").notEmpty().withMessage("Password is Required").bail().
    isLength({min:2,max:10}).withMessage("Password should be greater than 2 and less than 10 characters")

];

module.exports = createUserValidator