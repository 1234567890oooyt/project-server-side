const { Schema, model, Types } = require('mongoose');

const MainPointSchema = new Schema({
 title: { type: String, required: true },
 articleId: { type: Types.ObjectId, required: true },
 imageFileName: { type: String }
});

const schema = new Schema({
 title: { type: String, required: true },
 image: {
  url: { type: String },
  name: { type: String }
 },
 mainPoints: {
  type: { type: [MainPointSchema] },
  default: []
 },

});

const Service = new model('services', schema, 'services');

module.exports = { Service };
