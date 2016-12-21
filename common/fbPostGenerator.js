/**
 * Created by ttnd on 19/12/16.
 */
"use strict";
const Stream = require('stream');
const Buffer = require('buffer').Buffer;
let casual = require('casual')['en_US'];
let R = require('ramda');
const FBPOST_OUTPUT_SPEED = global.config.RESOURCE.ResourceGenerationSpeed.FbPost;

let fbPostGenerator = () => {
    let sampleTweet = {
            post_title: casual.sentence ,
            emailId: casual.email,
            first_name: casual.first_name,
            last_name: casual.last_name,
            user_name: casual.username,
            gender: casual.boolean,
            country: casual.country_code
        };
    return sampleTweet;
};


class FacebookMockStream extends Stream.Readable{
    constructor(options) {
        super(options);
    }

    _read (size) {
        let fbPost = fbPostGenerator();

        setTimeout(() => {
            this.push(Buffer.from(JSON.stringify(fbPost)));
        }, FBPOST_OUTPUT_SPEED);
    }
}

module.exports = FacebookMockStream;