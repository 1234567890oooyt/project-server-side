const { Schema, model } = require('mongoose');

const schema = new Schema({
 socialMedia: {
  type: [{
   icon: { type: String },
   name: { type: String },
   link: { type: String }
  }]
 },
 contacts: {
  phoneNumbers: { type: [String] },
  city: { type: String },
  address: { type: String }
 }
});

const UniversityInfoModel = new model('universityInfo', schema, 'universityInfo');

module.exports = { UniversityInfoModel };