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

const tcpServer = require('./bin/tcp.server');
const apiApp = require('./bin/api.server');
const tcpOptions = global.config.SERVER_OPTIONS.tcp;
const apiOptions = global.config.SERVER_OPTIONS.api;

let onServerClose = (serverName) => () => console.log(`${serverName} has closed...`);
let onServerStartListening = (serverName) => () => console.log(`${serverName} has started listening ...`);
let onServerError = (serverName) => (error) => console.log(`${serverName} has thrown some error. Details\n ${error}`);


// tcpServer.on('connection', () => )
// tcpServer.on('error')


if(process.argv[2]) {
    console.log('Starting tcp server');
    tcpServer.listen(tcpOptions.port)
        .on('close', onServerClose('tcpServer'))
        .on('listening', onServerStartListening('tcpServer'))
        .on('error', onServerError('tcpServer'));
}
if(process.argv[3]) {
    console.log('Starting api Server');
    apiApp.listen(apiOptions.port)              // returns net.Server object.
        .on('error', onServerError('apiServer'))
        .on('listening', onServerStartListening('apiServer'))
        .on('close', onServerClose('apiServer'));
}
