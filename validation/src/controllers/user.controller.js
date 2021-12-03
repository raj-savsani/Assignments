const express = require('express')
const {body, validator} = require('validator')

const router =  express.Router();

router.post('/',body('name').isLength({min: 4, max: 20}).withMessage('Name of the product is required between 4 to 20 characters'),
body('price').notEmpty().withMessage('Price is required')
,async (req, res)=>{
    console.log(body("name"));
    const error = validataionResult(req)
    if(error.notEmpty()){
        return res.status(400).send(error)
    }

    // try{
         
    // }
})