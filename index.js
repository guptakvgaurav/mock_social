/**
 * Created by ttnd on 26/12/16.
 */
"use strict";

(() => {
    let path = require('path');

    global.appRoot = __dirname;
    global.model = path.join(global.appRoot, 'model');
    global.commonPath = path.join(global.appRoot, 'common');
    global.configPath = path.join(global.appRoot, 'config');
    global.constantPath = path.join(global.appRoot, 'constants');
    global.modules = path.join(global.appRoot, 'modules');

    global.constants = require('./constants'); // make constants available to each and every one.
    global.config = require('./config');    // make config available to each and every one.
    global.util = require('./common');      // make util available to each and every one.
})();

const tcpServer = require('./bin/tcp.server').server;
const apiServer = require('./bin/api.server').server;
const tcpOptions = global.config.SERVER_OPTIONS.tcp;
const apiOptions = global.config.SERVER_OPTIONS.api;

tcpServer.listen(tcpOptions.port);
apiServer.listen(apiOptions.port);