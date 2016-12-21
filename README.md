**Introduction**

A simple mock server which allows the user to subscribe an resource. Upon successful subscription server offers stream of resource to the callee.

_**Resource**_

1. tweet -
2. fbpost

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

    1.  _subscribe_ - used to tell server that client want to subscribe a resource of particular type.
    2.  _unsubscribe_ - used to tell server that client want to unsubscribe a resource of particular type.

_**Valid Type**_

    1.  _tweet_ - used to tell server that client want to take an action on a resource of type tweet.
    2.  _fbpost_ - used to tell server that client want to take an action on a resource of type fbpost.

    E.g     {action: 'subscribe', type: 'tweet'}    // tell server to subscribe for tweet. subscription may result in success or failure


**_Subscription response_**

1.  _Failure_ - Upon failure client will receive an error message in 'data' event.

        E.g     {"type":"tweet","action":"subscribe","status":"failure","reason":{"code":"ERR_MULTI_SUBSCRIPTION_ATTEMPTED","message":"Sorry !! You can not subscribe to this resource anymore."}}

2.  _Success_ - Upon success client will receive confirmation of the action.

        E.g     { "type":"tweet","action":"subscribe","status":"success" }




