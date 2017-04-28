/**
 * Created by ttnd on 19/12/16.
 */
"use strict";

const Buffer = require('buffer').Buffer;
const commonUtils = require(global.commonPath);
const ResourceStreamFactory = new commonUtils.ResourceStreamFactory();

const PermittedActions = global.constants.Resource.PermittedActions;
const ActionResult = global.constants.Resource.ActionResult;
const Resource = global.constants.Resource.Name;
const ErrorCodes = global.constants.Resource.ErrorCodes;

let log = global.util.log;

/**
 * Manage un-subscription of tweet resource. If already subscribed, then successfully un-subscribe it, otherwise failure.
 * @param {object} connection
 * */
let unSubscribeTweet = (connection) => {
    // if already subscribed, remove it.
    let reply = { action : PermittedActions.UnSubscribe, type: Resource.Tweet };
    if (connection.isAlreadySubscribed(Resource.Tweet)) {
        reply.status = connection.unSubscribe(Resource.tweet) ? ActionResult.Success : ActionResult.Failure;
    } else {
        log(`[Warning] ${connection} is not subscribed to ${Resource.Tweet}, so unSubscribe will result in failure`)
        reply.status = ActionResult.Failure;
    }
    connection.write(JSON.stringify(reply));
};

/**
 * Manage un-subscription of tweet resource. If already subscribed, then successfully un-subscribe it, otherwise failure.
 * @param {object} connection
 * */
let unSubscribeMeetUp = (connection) => {
    // if already subscribed, remove it.
    let reply = { action : PermittedActions.UnSubscribe, type: Resource.Meetup };
    if (connection.isAlreadySubscribed(Resource.Meetup)) {
        reply.status = connection.unSubscribe(Resource.Meetup) ? ActionResult.Success : ActionResult.Failure;
    } else {
        log(`[Warning] ${connection} is not subscribed to ${Resource.Meetup}, so unSubscribe will result in failure`)
        reply.status = ActionResult.Failure;
    }
    connection.write(JSON.stringify(reply));
};

let getResourceByType = (type) => {
    return Object.keys(Resource).map(_keys => Resource[_keys]).find(_resource => _resource === type);
};

/**
 * Does the basic checking to validate the subscription action. If valid, return success template, otherwise error.
 * @param {object} connection
 * @param {object} _data
 * @return {object} reply
 * */
let prepareSubscriptionResult = (connection, _data) => {
    let reply = { type: _data.type, action: PermittedActions.Subscribe };
    try {
        if (connection.isAlreadySubscribed(Resource[_data.type])) {
            log(`[Warning] ${connection} has already subscribed to stream. Failing retry.`)
            reply.status = ActionResult.Failure;
            reply.reason = ErrorCodes.MultipleSubscriptionAttempted;
        } else {
            reply.status = ActionResult.Success;
            connection.addResourceToSubscriptionList(getResourceByType(_data.type));
        }
    } catch (e) {
        log(`[Error] ${e}`)
        reply.status = ActionResult.Failure;
        reply.reason = e;
    }
    return reply;
};

/**
 * Manages the subscription request.
 * @param {object} connection
 * @param {object} _data
 * */
let manageSubscribe = (connection, _data) => {
    let reply = prepareSubscriptionResult(connection, _data);
    connection.write(JSON.stringify(reply));

    if(reply.status == ActionResult.Success) {
        try {
            ResourceStreamFactory.requestStream(_data.type, (err, __resourceStream) => __resourceStream.pipe(connection));   // no-error handling yet.
        } catch (streamFactoryError) {
            log(`[Error] ${streamFactoryError}`);
        }
    }
};

/**
 * Delegate the action to intended functionality.
 * @param {object} connection
 * @param {object} _data
 * */
let manageUnSubscribe = (connection, _data) => {
    switch(_data.type) {
        case Resource.tweet:
            unSubscribeTweet(connection);
            break;
        case Resource.Meetup:
            unSubscribeMeetUp(connection);
            break;
        default:
            break;
    }
};

/**
 * Called on data is received from connection. Note: this == connection.
 * */
module.exports.onConnectionDataReceived = (connection, data) => {
    log('Connection#data', data.toString());
    let _data = null;

    // normalize data
    if (!Buffer.isBuffer(data)) data = Buffer.from(data);

    _data = JSON.parse(data.toString());
    switch (_data.action) {
        case PermittedActions.Subscribe:
            manageSubscribe(connection, _data);
            break;
        case PermittedActions.UnSubscribe:
            manageUnSubscribe(connection, _data);
        default:
            break;
    }
};

/**
 * Called on data is received from connection. Note: this == connection.
 * */
module.exports.onConnectionError = (connection, error) => {
    log('Connection#error');
};
