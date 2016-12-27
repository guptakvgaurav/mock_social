**Introduction**

A simple mock server which allows the user to subscribe a resource. Upon successful subscription server offers stream of resource to the callee.

_**Resource**_

1. tweet - Represents twitter tweets.
2. fbpost - Represents facebook posts.

_**Connecting to server**_

Sample snippet to connect to a server.

    const client = net.connect({port: 3000}, () => {

    // 'connect' listener
    client.write(JSON.stringify({action: 'subscribe', type: 'tweet'}));
        setTimeout(() => {
            client.write(JSON.stringify({action: 'subscribe', type: resource}));
        }, 2000);
    });
    client.on('data', (data) => console.log(data.toString()));
    client.on('end', () => console.log('disconnected from server'));

_**Valid Actions**_

    1.  subscribe - Value: "subscribe".Used to tell server that client want to subscribe a resource of particular type.
    2.  unsubscribe - Value: "unsubscribe". Used to tell server that client want to unsubscribe a resource of particular type.

_**Valid Type**_

    1.  tweet - Value: "tweet". used to tell server that client want to take an action on a resource of type tweet.
    2.  fbpost - Value: "fbpost". used to tell server that client want to take an action on a resource of type fbpost.

    E.g     {action: 'subscribe', type: 'tweet'}    // tell server to subscribe for tweet. subscription may result in success or failure


**_Subscription response_**

1.  Failure - Upon failure client will receive an error message in 'data' event.

        E.g     {"type":"tweet","action":"subscribe","status":"failure","reason":{"code":"ERR_MULTI_SUBSCRIPTION_ATTEMPTED","message":"Sorry !! You can not subscribe to this resource anymore."}}

2.  Success - Upon success client will receive confirmation of the action.

        E.g     { "type":"tweet","action":"subscribe","status":"success" }

**Controlling data flow**

1.  /config/resource

    1.  StreamRetrievalTime -  Tells after how much time, stream should be made available to the client.
    2.  ResourceGenerationSpeed - Tells after how much time, our generator should generate a resource (tweet/post).
2.  /config/logger

    1.  enable = Enables the server logging.

**Note:** Node version - 7.2.1

**How to Run Server**

1.  Run command

        node server.js

**How to Run Client**

1.  Run command

        node testClient.js <Client-name> <resource-to-subscribe>

    <Client-name> - Name of the client (not much of use as of now).
