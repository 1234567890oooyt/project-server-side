const { Schema, model } = require('mongoose');

const schema = new Schema({
 title: { type: String, required: true },
 blocks: {
  type: { type: Array },
  default: []
 }
});

const Articles = new model('articles', schema, 'articles');

module.exports = { Articles };