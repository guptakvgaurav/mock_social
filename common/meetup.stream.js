/**
 * Created by ttnd on 19/12/16.
 */
"use strict";
const CommonStream = require('./common.stream');

class MeetupMockStream extends CommonStream{
    constructor(options = {}) {
        options.model = global.constants.Resource.classNames.MeetupEvent;
        options.generateIn = global.config.RESOURCE.ResourceGenerationSpeed.Meetup;
        super(options);
    }
}

module.exports = MeetupMockStream;