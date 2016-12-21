/**
 * Created by ttnd on 19/12/16.
 */
"use strict";
const net = require('net');
const clientTitle = process.argv[2] || "Client-"+Date.now();
const resource = process.argv[3] || 'fbpost';

const Buffer = require('buffer');

const client = net.connect({port: 3000}, () => {
    // 'connect' listener
    console.log(`connected to server! - \nClient Name - ${clientTitle}\nResource - ${resource}` );
    client.write(JSON.stringify({action: 'subscribe', type: resource}));
    setTimeout(() => {
        client.write(JSON.stringify({action: 'subscribe', type: resource}));
    }, 2000);
});
client.on('data', (data) => {
    console.log(data.toString());
});
client.on('end', () => {
    console.log('disconnected from server');
});