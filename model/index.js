/**
 * Created by ttnd on 23/12/16.
 */

"use strict";
module.exports.FbEvent = require('./FbEvent');
module.exports.TwitterEvent = require('./TwitterEvent');
module.exports.getObject = (modelName) => {
    console.log('In getObject');
    let modelClass = {} || module.exports[modelName];
    if(!modelClass){
        console.log(`Model class not found - ${module.exports}`);
        throw new TypeError("Invalid model");
    }
    console.log('Creating model class');
    return new modelClass();
};