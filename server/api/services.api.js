const { Router } = require('express');
const { Service } = require('../models/services');

const router = Router();

router.get('/services', async (req, res) => {
 const docs = await Service.find({});
 return res.status(200).send(docs);
});

module.exports = { router };