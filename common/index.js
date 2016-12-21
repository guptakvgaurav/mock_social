/**
 * Created by ttnd on 18/12/16.
 */

let log = require('./logger');
let TwitterStream = require('./tweetGenerator');
let FBStream = require('./fbPostGenerator');
let socketUtil = require('./util.socket');
let ResourceStreamFactory = require('./resource.stream.factory');

module.exports = {
    // classes
    ResourceStreamFactory: ResourceStreamFactory,
    TwitterStream: TwitterStream,
    FBStream: FBStream,

    // functions
    log: log(),
    noop: () => {},

    // objects
    socketUtil: socketUtil
};