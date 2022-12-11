const Router = require('express');
const request = require('../controllers/request');
const router = new Router();


router.post('/create', request.create);
router.get('/get', request.get);
router.put('/update', request.update);
router.delete('/delete', request.delete);

module.exports = router;