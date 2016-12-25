/**
 * Created by ttnd on 26/12/16.
 */
/**
 *
 * TEMPLATE =
 *      "ROLE": {
 *          resource: '',    //  name of resource       ( names of module)
 *          operations: []       //  permitted operations   (GET, POST, PUT, DELETE, *)
 *      }
 *
 * */

const ACL = {
    "ADMIN": [{
        resource: "user",
        operations: ["*"]
    },{
        resource: "feeds",
        operations: ["*"]
    }],
    "SUPER_ADMIN": [{
        resource: "*",
        operations: ["*"]
    }],
    "USER": [{
        resource: "user",
        operations: ["*"]
    },{
        resource: "feeds",
        operations: ["GET"]     // user can only subscribe to feeds.
    },{
        resource: "user.messages",
        operations: ["GET"]
    }]
};

module.exports = ACL;