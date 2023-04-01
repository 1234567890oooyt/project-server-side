const mongoose = require('mongoose');

const setupDb = async (mongoURL) => {
 await mongoose.connect(mongoURL);
};

module.exports = { setupDb };