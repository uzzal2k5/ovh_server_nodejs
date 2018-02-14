var pkg = require('pkgcloud'),
    _ = require('lodash');
// Create Connection to Compute server
var client = pkg.compute.createClient(
{
    provider: 'openstack',
    username: '8zeZpK6v89he',
    password: '4jc6hmHj74nurnMVwJJY3D2PJXeMAVuv',
    region: 'BHS3',
    authUrl: 'https://auth.cloud.ovh.net'
}
);

// Store log events
client.on('log::*',function(message, object){
    if (object) {
        console.log(this.event.split('::')[1] + ' ' + message);
        console.dir(object);
    }
    else{
    console.log(this.event.split('::')[1] + ' ' + message);
    }

});