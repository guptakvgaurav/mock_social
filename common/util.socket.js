/**
 * Created by ttnd on 21/12/16.
 */
"use strict";

/**
 * Adds a resource to subscription set. If no such set exists, creates a set first.
 * @param {string} resource
 * @return {Set} copy of resource set
 * */
module.exports.addResourceToSubscriptionList = function (resource) {
    if(!this.subscribedResourceSet)  this.subscribedResourceSet = new Set();     // create a set, if does not exist.
    if(this.subscribedResourceSet.has(resource)) throw new TypeError("ERR_RESOURCE_ALREADY_SUBSCRIBED");     // Over-subscribing is not permitted.

    return Object.assign({}, this.subscribedResourceSet.add(resource)); //
};

/**
 * Checks if resource set already has requested resource.
 * @param {string} resource
 * @return {boolean} status
 * */
module.exports.isAlreadySubscribed = function (resource) {
    return !!this.subscribedResourceSet && this.subscribedResourceSet.has(resource);
};

/**
 * Gives list of subscribed resources
 * @return {Iterator.<*>} resource iterator
 * */
module.exports.getSubscriptionList = function () {
    return this.subscribedResourceSet && this.subscribedResourceSet.entries();
};

/**
 * Removes the resource from subscription set (if subscribed).
 * @param {string} resource
 * @return {boolean} deletion status
 * */
module.exports.unSubscribe = function (resource) {
    if(!this.subscribedResourceSet){    // if don't have subscription set, then can't remove resource.
        return false;
    }

    if(!this.subscribedResourceSet.has(resource)) { // if subscription set doesn't have resource, then can't remove it.
        return false;
    }

    return this.subscribedResourceSet.delete(resource);

};