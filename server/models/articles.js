const { Schema, model } = require('mongoose');

const schema = new Schema({
 title: { type: String, required: true },
 blocks: {
  type: [{
   type: { type: String, required: true },
   value: { type: String }
  }],
  default: []
 }
});

const Articles = new model('articles', schema, 'articles');

module.exports = { Articles };