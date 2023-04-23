const { Router } = require('express');
const { Articles } = require('../models/articles');

const router = Router();

router.get('/articles/:articleId', async (req, res) => {
 const { articleId } = req.params;

 const article = await Articles.findById(articleId);

 return res.status(200).send(article);
});

module.exports = { router };