/**
 * Created by ttnd on 19/12/16.
 */
"use strict";
const CommonStream = require('./common.stream');

class FacebookMockStream extends CommonStream{
    constructor(options = {}) {
        options.model = global.constants.Resource.classNames.FbEvent;
        options.generateIn = global.config.RESOURCE.ResourceGenerationSpeed.FbPost;
        super(options);
    }
}

module.exports = FacebookMockStream;