const { Router } = require('express');
const UniversityInfo = require('./universityInfo.api');
const Services = require('./services.api');
const Articles = require('./articles.api');
const Candidates = require('./candidates.api');

const router = Router();

router.use(UniversityInfo.router);
router.use(Services.router);
router.use(Articles.router);
router.use(Candidates.router);


module.exports = { router };