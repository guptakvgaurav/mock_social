/**
 * Created by ttnd on 26/12/16.
 */
let router = require('express').Router();

let base = require('./base');
let messages = require('./messages');

router.use('/', base);
router.use('/:userId/messages', messages);

module.exports = router;