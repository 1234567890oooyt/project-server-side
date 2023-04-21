const { Schema, model } = require('mongoose');

const schema = new Schema({
 title: { type: String, required: true },
 link: { type: String, required: true },
 image: {
  url: { type: String },
  name: { type: String }
 },
 mainPoints: { type: [String], default: [] }
});

const Service = new model('services', schema, 'services');

module.exports = { Service };