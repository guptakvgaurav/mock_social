/**
 * Created by ttnd on 21/12/16.
 */

module.exports = {
    StreamRetrievalTime : new Map([
        ['tweet', 1000],      // should be same as value of Const.Resource.Name.Tweet
        ['fbpost', 1000]      // should be same as value of Const.Resource.Name.FbPost
    ]),
    ResourceGenerationSpeed: {
        Tweet: 1000,
        FbPost: 100
    }
};