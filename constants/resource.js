/**
 * Created by ttnd on 21/12/16.
 */

module.exports = {
    Name:{
        Tweet: 'tweet',
        FbPost: 'fbpost'
    },
    ActionResult: {
        Success: 'success',
        Failure: 'failure',
        Pending: 'pending'
    },
    PermittedActions: {
        Subscribe: 'subscribe',
        UnSubscribe: 'unsubscribe'
    },
    ErrorCodes: {
        MultipleSubscriptionAttempted: {
            code: 'ERR_MULTI_SUBSCRIPTION_ATTEMPTED',
            message: 'Sorry !! You can not subscribe to this resource anymore.'
        }
    },
    classNames: {
        TwitterEvent:'TwitterEvent',
        FbEvent: 'FbEvent'
    }
};