//
// imports
//
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/products');

//
// mapping
//
router.get('/', controller.list);
router.get('/count-by-categories', controller.countByCategory);
router.get('/count', controller.count);
router.get('/last', controller.getLast);
router.get('/:id', controller.getById);

//
// export
//
module.exports = router;