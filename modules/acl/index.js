/**
 * Created by ttnd on 26/12/16.
 */
"use strict";
let fs = require('fs');
let ACLs = require('./private_acl');
let R = require('ramda');

// http_method http://domain:port/api/version/resource/[resourceId]/[sub-resource]?[q=value]

/**
 * A function that tells whether the requested operation is permitted to the user. If permitted returns true, otherwise false.
 * @param {object} httpRequest
 * @param {string} userRole
 * @param {object} acl
 * @return {boolean} isPermitted
 * */
let isActionPermitted = R.memoize((httpRequest = null, userRole = '', acl = '') => {
    // todo: beautify the code.
    let isPermitted = false;
    if(!httpRequest || !userRole || !acl) return isPermitted;
    let splittedUrl = httpRequest.url.split('?')[0].split('/');
    let _resource = splittedUrl[3];
    let _subResource = splittedUrl[5] || '';
    let lookForResource = _resource + ( _subResource ? `.${_subResource}`: '');
    console.log(`An ${userRole} is trying to access ${httpRequest.method} method of ${lookForResource} resource`);
    let roleForAcl = acl[userRole] || {};
    if(!roleForAcl) return isPermitted;
    let permittedResource = roleForAcl.find(permission => permission.resource === lookForResource || permission.resource == "*");
    if(!permittedResource)  return isPermitted;
    console.log(`Resource config is - ${permittedResource}`);
    isPermitted = permittedResource.operations.find(operation => operation === '*' || operation === httpRequest.method);
    return !!isPermitted;
});

module.exports = (req, res, next) => {
    // todo: role should be derived from headers. For sake of simplicity, let pass it as a query parameter.
    if(!isActionPermitted(req, req.query.role , ACLs)){
        console.log('Access denied');
        return res.status(401).end('Access denied');
    }
    next();
};