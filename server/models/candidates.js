const { Schema, model } = require('mongoose');

const RequestSchema = new Schema({
 createdAt: { type: Date, default: Date.now() },
 requestedDate: { type: Date },
 questions: { type: String },
 status: { type: String }
});

const schema = new Schema({
 name: { type: String },
 email: { type: String, unique: true },
 phoneNumber: { type: String },
 requests: { type: [RequestSchema] }
});

const Candidates = new model('candidates', schema, 'candidates');

module.exports = { Candidates };