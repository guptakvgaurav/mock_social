/**
 * Created by ttnd on 26/12/16.
 */

"use strict";
let router = require('express').Router();

const EventDispatcher = require('./event-handler').EventDispatcher;
const acl = require('./acl');
const user = require('./user');

// routing table goes here. Resource mounting.
router.use('/user', user);


module.exports.EventDispatcher = EventDispatcher;
module.exports.acl = acl;

module.exports.apis = router;
