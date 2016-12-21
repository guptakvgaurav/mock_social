/**
 * Created by ttnd on 18/12/16.
 */

let loggerConfig = require('./logger');
let serverConfig = require('./server');
let resourceConfig = require('./resource');

module.exports.LOGS = loggerConfig;
module.exports.SERVER_OPTIONS = serverConfig;
module.exports.RESOURCE = resourceConfig;
