const express = require("express")
const { body, validationResult } = require('express-validator');
const User = require("../modole/bookmodel");
const router = express.Router();

router.post(""

,body("likes")
.not()
.isEmpty()
.isNumeric()
.withMessage("like must be numeric")

,body("coverImage ")
.not()
.isEmpty()
.isString()
.isLength({min:1})
.withMessage("must be atletest 1 url is required")

,body("content")
.not()
.isEmpty()
.isString()
.withMessage("must be atletest 1 url is required")

, async(req,res)=>{
    try {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    } catch (error) {
        
    }
})

module.exports = router;
