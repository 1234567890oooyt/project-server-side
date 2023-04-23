const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
 title: { type: String, required: true },
 image: {
  url: { type: String },
  name: { type: String }
 },
 mainPoints: { type: [String], default: [] },
 articleId: { type: Types.ObjectId, required: true }
});

const Service = new model('services', schema, 'services');

module.exports = { Service };