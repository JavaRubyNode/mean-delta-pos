/**
 * Created by vinicius on 27/05/17.
 */

const express = require('express');

let router = express.Router();
router.get('/',(req,res,next)=>{res.status(200).json({nome:'Atila'})});
router.post('/',(req,res,next)=>{let localizacao = req.body; res.status(201).json(localizacao)});
router.put('/',(req,res,next)=>{res.status(200).json({nome:'Atila'})});
router.delete('/',(req,res,next)=>{res.status(200).json({nome:'Atila'})});




module.exports = router;
