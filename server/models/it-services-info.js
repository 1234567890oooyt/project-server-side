const { Schema, model } = require('mongoose');

const schema = new Schema({
 servise: {
    name: { type: String },
    text: { type: [String] },
   }
});

const ITservicesInfoModel = new model('itservicesInfo', schema, 'itservicesInfo');


module.exports = { ITservicesInfoModel };