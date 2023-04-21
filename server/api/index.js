const { Router } = require('express');
const UniversityInfo = require('./universityInfo.api');
const Services = require('./services.api');

const router = Router();

router.use(UniversityInfo.router);
router.use(Services.router);


module.exports = { router };