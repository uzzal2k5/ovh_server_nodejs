var pkg = require('pkgcloud'),
    _ = require('lodash');
// Create Connection to Compute server
var config = {
    provider: 'openstack',
    username: '8zeZpK6v89he',
    password: 'password',
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
var ServerId = '6bc54b38-037f-4591-ac62-f64f2c607e9c'
client.destroyServer(ServerId,
                    function (err, server) {
                        if(err){
                            console.dir(err);
                            return;
                        }
                        console.log("Server %s deleted Successfully ! ", ServerId);

                     });
