const Router = require('express');
const comments = require('../controllers/comments');
const router = new Router();
router.get('/get', comments.get);
router.post('/create', comments.create);


module.exports = router;