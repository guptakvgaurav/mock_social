/**
 * Created by ttnd on 26/12/16.
 */

"use strict";
let router = require('express').Router();

router.get('/', (req, res, next) => {
    return res.status(200).json({message: "GET message request."});
});

router.post('/', (req, res, next) => {
    return res.status(200).json({message: "POST message request."});
});

module.exports = router;
