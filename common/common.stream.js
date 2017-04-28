/**
 * Created by ttnd on 23/12/16.
 */
let Path = require('path');
let Stream = require('stream');
let Models = require(global.model);

class CommonStream extends Stream.Readable{
    constructor(options) {
        super(options);
        this.model = options.model;
        this.generateIn = options.generateIn;
    }

    // For some weird reason this doesn't work. Will get back to it later.
    // _read (size) {
    //
    //     setTimeout(() => {
    //         console.log(`Client is looking for - ${this.model}`);
    //         console.log(Models.getObject.toString());
    //         let model = Models.getObject[this.model];
    //         console.log('Model is ', model);
    //         let buffer = Buffer.from(JSON.stringify(model));
    //         this.push(buffer);
    //     }, this.generateIn);
    // }

    // We want to improve this version of _read as it contains if-else-if ladder, dynamic creation of object will be preferred over case wise creation.
    _read (size) {
        setTimeout(() => {
            let model = null;
            if ( this.model == 'TwitterEvent') {
                model = new Models.TwitterEvent();
            } else if ( this.model == 'FbEvent') {
                model = new Models.FbEvent();
            } else if( this.model == 'MeetupEvent') {
                model = new Models.MeetupEvent();
            }else {
                throw new TypeError('Invalid model');
            }
            let buffer = Buffer.from(JSON.stringify(model));
            this.push(buffer);
        }, this.generateIn);
    }
}

module.exports = CommonStream;