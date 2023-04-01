const { Router } = require('express');
const UniversityInfo = require('./universityInfo.api');

const router = Router();

router.use(UniversityInfo.router);


module.exports = { router };