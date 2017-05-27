/**
 * Created by vinicius on 27/05/17.
 */

const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const ObjectId = Schema.ObjectId;



let Localizacao = Schema({

    _id: ObjectId,
    lat: Number,
    lon: Number,
    org: String ,
    query: String,
    country: String,
    dominio: {type:String, max:50},
    dataHora: {type:Date, default:Date.now}

});


module.exports = mongoose.model('Localizacao',Localizacao);