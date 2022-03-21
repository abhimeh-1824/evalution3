const express = require("express")
const { body, validationResult } = require('express-validator');
const Comment = require("../modole/commentmodel");
const router = express.Router();

router.post(""
,body("body ")
.not()
.isEmpty()
.isString()
.withMessage("must be atletest 1 url is required")

, async(req,res)=>{
    try {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      const data = await Comment.create(req.body )
      return res.status(200).json({data:data})
    }

    } catch (error) {
        throw error
    }
})

router.get("",async(req,res)=>{
    try {
    page = req.query.page;
    pagesize =req.query.pagesize
    skip = (page-1)*pagesize
    const data = await Comment.find().skip(skip).limit(pagesize).lean().exec()
      return res.status(200).json({data:data})
    } catch (error) {
        throw error
    }
})

module.exports = router;
