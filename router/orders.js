const Router = require('express');
const orders = require('../controllers/orders');
const router = new Router();
router.get('/get', orders.get);
router.post('/create', orders.create);
router.put('/update', orders.update);
router.delete('/delete', orders.delete);
module.exports = router;