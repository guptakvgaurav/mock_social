/**
 * Created by ttnd on 19/12/16.
 */
"use strict";
const Stream = require('stream');
const Buffer = require('buffer').Buffer;
let casual = require('casual')['en_US'];
const TWEET_OUTPUT_SPEED = global.config.RESOURCE.ResourceGenerationSpeed.Tweet;

let tweetGenerator = () => {
    let sampleTweet = {
            tweet: casual.sentence ,
            email: casual.email,
            firstName: casual.first_name,
            lastName: casual.last_name,
            userName: casual.username,
            gender: casual.boolean,
            countryCode: casual.country_code
        };
    return sampleTweet;
};


class TwitterMockStream extends Stream.Readable{
    constructor(options) {
        super(options);
    }

    _read (size) {
        let tweet = tweetGenerator();

        setTimeout(() => {
            this.push(Buffer.from(JSON.stringify(tweet)));
        }, TWEET_OUTPUT_SPEED);
    }
}

module.exports = TwitterMockStream;