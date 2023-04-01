const { Router } = require('express');
const { UniversityInfoModel } = require('../models/universityInfo');

const router = Router();

router.get('/university-info', async (req, res) => {
 const doc = await UniversityInfoModel.findOne();
 return res.status(200).send(doc);
});

module.exports = { router };