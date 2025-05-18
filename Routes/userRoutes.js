const express = require("express")

const router = express.Router()

const UserController = require("../controllers/UserController")

const createUserValidator = require("../validators/users/createUserValidator")
const validateRequest = require("../validators/validateRequest")

router.get("/", UserController.getUsers)
router.post("/",createUserValidator, validateRequest,UserController.create)

module.exports = router;

