/**
 * Created by ttnd on 23/12/16.
 */

let casual = require('casual');

class MeetupEvent {
    constructor () {
        this.eventName = casual.name;
        this.location = {
          lat:  casual.latitude,
            lng: casual.longitude
        };
        this.city = casual.city;
        this.organisedBy = casual.name;
        this.openEvent = casual.boolean;
        this.source = 'Meetup';
        this.date = casual.date('YYYY-MM-DD');
        this.charges = casual.integer(0, 1000) + ' ' + casual.currency_code;
    }
}

module.exports = MeetupEvent;