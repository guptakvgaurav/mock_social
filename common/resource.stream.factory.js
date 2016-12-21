/**
 * Created by ttnd on 21/12/16.
 */

const Resource = global.constants.Resource.Name;
const ResourceMap = new Map();
ResourceMap.set(Resource.Tweet, require('./tweetGenerator'))
ResourceMap.set(Resource.FbPost, require('./fbPostGenerator'))

class ResourceStreamFactory {
    requestStream (resource, callback) {
        let generatorClass = ResourceMap.get(resource);
        if(!generatorClass) {
            throw new TypeError(`Invalid resource - ${resource}`);
        }
        setTimeout(() => {
            return callback(null, (new generatorClass()));
        }, global.config.RESOURCE.StreamRetrievalTime[resource]);
    }
}

module.exports = ResourceStreamFactory;