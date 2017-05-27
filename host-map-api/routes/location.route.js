/**
 * Created by vinicius on 27/05/17.
 */

const express = require('express');
const router = express.Router();
const LocalizacaoService = require('../services/localizacao.service')
const Localizacao = require('../model/localizacao.model');


router.get('/', (req, res, next) => {
    LocalizacaoService
        .consultar()
        .then((docs) => {
            res.status(200).json(docs);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res, next) => {
    let localizacao = new Localizacao(req.body);

    LocalizacaoService
        .salvar(localizacao)
        .then((doc) => {
            res.status(201).json(doc);
        }, (err) => {
            res.status(500).json(err);
        });
});

router.put('/',(req,res,next)=>{res.status(200).json({nome:'Atila'})});
router.delete('/',(req,res,next)=>{res.status(200).json({nome:'Atila'})});




module.exports = router;
