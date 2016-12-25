/**
 * Created by ttnd on 18/12/16.
 */
"use strict";

const socketUtil = require(global.commonPath).socketUtil;

// server dependencies.
const net = require('net');
const EventDispatcher = require(global.modules).EventDispatcher;

const TCP_SOCKET_EVENTS = global.constants.ServerConstants.TCP_SOCKET_EVENTS;

let server = net.createServer((connection) => {
    let dispatcher = new EventDispatcher();

    connection.getSubscriptionList = socketUtil.getSubscriptionList.bind(connection);
    connection.isAlreadySubscribed = socketUtil.isAlreadySubscribed.bind(connection);
    connection.addResourceToSubscriptionList = socketUtil.addResourceToSubscriptionList.bind(connection);

    connection.on('data', (data) => dispatcher.dispatch(TCP_SOCKET_EVENTS.Data, connection, data));
    connection.on('close', (had_error) => dispatcher.dispatch(TCP_SOCKET_EVENTS.Close, had_error));
    connection.on('connect', () => dispatcher.dispatch(TCP_SOCKET_EVENTS.Connect));
    connection.on('drain', () => dispatcher.dispatch(TCP_SOCKET_EVENTS.Drain));
    connection.on('end', () => dispatcher.dispatch(TCP_SOCKET_EVENTS.End));
    connection.on('error',  (error) => dispatcher.dispatch(TCP_SOCKET_EVENTS.Error));
    connection.on('lookup', () => dispatcher.dispatch(TCP_SOCKET_EVENTS.Lookup));
    connection.on('timeout', () => dispatcher.dispatch(TCP_SOCKET_EVENTS.Timeout));
});

module.exports.server = server;
