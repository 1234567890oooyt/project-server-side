const { Router } = require('express');
const { ITservicesInfoModel  } = require('../models/universityInfo');

const router = Router();

router.get('/it-services-info', async (req, res) => {
 const doc = await ITservicesInfoModel .findOne();
 return res.status(200).send(doc);
});


router.get('/it-servises', async (req, res) => {
    const doc = await ITservicesInfoModel.findOne();
    return res.status(200).send(doc);
   });

module.exports = { router };