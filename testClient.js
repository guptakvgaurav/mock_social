/**
 * Created by ttnd on 19/12/16.
 */
"use strict";
const net = require('net');
const clientTitle = process.argv[2] || "Client-"+Date.now();
const resource = process.argv[3] || 'meetup';
let startTime = null;

const Buffer = require('buffer');

const client = net.connect({port: 3000}, () => {
    // 'connect' listener
    console.log(`connected to server! - \nClient Name - ${clientTitle}\nResource - ${resource}` );
    client.write(JSON.stringify({action: 'subscribe', type: resource}));
    // client.write(JSON.stringify({action: 'subscribe', type: 'fbpost'}));
    client.write(JSON.stringify({action: 'subscribe', type: 'tweet'}));
    startTime = Date.now();
    // setTimeout(() => {
    //     // client.write(JSON.stringify({action: 'subscribe', type: 'fbpost'}));
    // }, 1000);

    setTimeout(() => {
        // client.write(JSON.stringify({action: 'subscribe', type: 'fbpost'}));
    }, 2000);
});
let counter = 0;
client.on('data', (data) => {
    console.log(data.toString());
    counter++;
});
client.on('end', () => {
    console.log(`${counter} events captured in ${Date.now() - startTime}`);
    console.log('')
    console.log('disconnected from server');
});