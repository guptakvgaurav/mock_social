/**
 * Created by ttnd on 18/12/16.
 */

let express = require('express');
const bodyParser = require('body-parser');
const Path = require('path');
const modules = require(global.modules);

let app = express();

app.use(express.static('bower_components'));
app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(modules.acl);
// parse application/json
app.use(bodyParser.json());

app.use('/api/:version/', modules.apis);
module.exports = app;