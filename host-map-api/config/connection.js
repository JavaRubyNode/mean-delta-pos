/**
 * Created by vinicius on 27/05/17.
 */

const db = require('./db');
const mongoose = require('mongoose');


function MongoDBConnetion() {
    this.connect = connect;
    return this;

}

function connect() {
    console.log('Conectando ao MongoDB');
    mongoose.connect(getUrlConnection(),(err)=>{if(err) throw err; console.log('Conectado ao MongoDB')});
}

function getUrlConnection() {
    return 'mongodb://'+db.usuario+':'+db.senha+'@ds155631.mlab.com:55631/mean-delta-vinicius'
}

module.exports = MongoDBConnetion();