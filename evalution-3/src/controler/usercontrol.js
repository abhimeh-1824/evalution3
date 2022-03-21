const express = require("express")
const { body, validationResult } = require('express-validator');
const User = require("../modole/userModel");
const router = express.Router();

router.post("",body("firstName")
.not()
.isEmpty()
.isString()
.isLength({min:3, max:30})
.withMessage("number must be greater than 3 letter and less than 30 letter")
)
,body("lastName ")
.isString()
.isLength({min:3, max:30})
.withMessage("number must be greater than 3 letter and less than 30 letter")
,body("age")
.not()
.isEmpty()
.isNumeric()
.withMessage("age must be number and greater than 3 and less than 150")
.custom((value)=>{
    if(value<1 || value>150)
    {
        throw error;
    }
    return true;
}),
body("email")
.not()
.isEmpty()
.isEmail()
.withMessage("email is required")
,body("profileImages")
.not()
.isEmpty()
.isString()
.isLength({min:1})
.withMessage("must be atletest 1 url is required")
, async(req,res)=>{
    try {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    } catch (error) {
        
    }
}

module.exports = router;

