//
// imports
//
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/users');

//
// mapping
//
router.get('/', controller.list);
router.get('/count', controller.count);
router.get('/last', controller.getLast);
router.get('/:id', controller.getById);

//
// export
//
module.exports = router;