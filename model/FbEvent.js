/**
 * Created by ttnd on 23/12/16.
 */

let casual = require('casual');

class FbEvent {
    constructor () {
        this.eventName = casual.name;
        this.location = {
          lat:  casual.latitude,
            lng: casual.longitude
        };
        this.city = casual.city;
        this.organisedBy = casual.name;
        this.openEvent = casual.boolean;
    }
}

module.exports = FbEvent;