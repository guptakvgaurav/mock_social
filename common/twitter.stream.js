/**
 * Created by ttnd on 19/12/16.
 */
"use strict";
const CommonStream = require('./common.stream');

class TwitterMockStream extends CommonStream{
    constructor(options = {}) {
        options.model = global.constants.Resource.classNames;
        options.generateIn = global.config.RESOURCE.ResourceGenerationSpeed.Tweet;
        super(options);
    }
}

module.exports = TwitterMockStream;