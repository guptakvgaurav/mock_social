/**
 * Created by ttnd on 19/12/16.
 */
/**
 * A class which dispatches all events to their handlers.
 * */
const TCP_SOCKET_EVENTS = global.constants.ServerConstants.TCP_SOCKET_EVENTS;
let EventHandler = require('./event-handlers');
let log = global.util.log;

class EventDispatcher {
    dispatch (event, connection, eventArgs) {
        let eventHandler = global.util.noop;
        switch (event) {
            case TCP_SOCKET_EVENTS.Data:
                eventHandler = EventHandler.onConnectionDataReceived;
                break;
            case TCP_SOCKET_EVENTS.Error:
                eventHandler = EventHandler.onConnectionError;
                break;
            default:
                log(`${event} occurred`);
                eventHandler = global.util.noop;
                break;
        }
        eventHandler(connection, eventArgs);
    }
}

module.exports = EventDispatcher;

