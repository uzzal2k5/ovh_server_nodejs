var pkg = require('pkgcloud'),
    _ = require('lodash');
// Create Connection to Compute server
var config = {
    provider: 'openstack',
    username: '8zeZpK6v89he',
    password: 'rCPqCwz3Seu2z@lxeExnX5uG8VwHscKe7KbZa',
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

// DELETE ANY IMAGE OR SNAPSHOT
var imageId = 'bd049ab8-860e-499d-b1e2-7c4e31c469e5',
client.destroyImage(imageId,
                    function (err, ok) {
                        if(err){
                            console.dir(err);
                            return;
                        }
                        console.log('Image %s successfully deleted', imageId);
                        });
