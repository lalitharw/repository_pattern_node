const {validationResult} = require("express-validator")

module.exports = (req,res,next) => {
    const errors = validationResult(req)
  console.log(errors.array());
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors: errors.array().map((err) => ({
                field:err.path,
                message:err.msg
            }))
        })
    }
    next()
}