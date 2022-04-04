//
// imports
//
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/categories');

//
// mapping
//
router.get('/', controller.list);
router.get('/count', controller.count);
router.get('/:id', controller.getById);

//
// export
//
module.exports = router;