var pkg = require('pkgcloud'),
    _ = require('lodash');
// Create Connection to Compute server
var config = {
    provider: 'openstack',
    username: '8zeZpK6v89he',
    password: 'rCPqCwz3SexeExnX5uG8VwHscKe7KbZa',
    region: 'BHS3',
    authUrl: 'https://auth.cloud.ovh.net'
    };
var client = pkg.compute.createClient(config);

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

// DELETE SERVER / INSTANCE
var ServerId = '54418178-6dbf-4fa6-a30e-0a11e323ba44'
client.destroyServer(ServerId,
                    function (err, server) {
                        if(err){
                            console.dir(err);
                            return;
                        }
                        console.log(ServerId);

                     });