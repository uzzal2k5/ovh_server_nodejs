var pkg = require('pkgcloud'),
    _ = require('lodash');

var config = {
    provider: 'openstack',
    username: '8zeZpK6v89he',
    password: 'rCPqCwz3Seu2z@lxeExnX5uG8VwHscKe7KbZa',
    region: 'BHS3',
    authUrl: 'https://auth.cloud.ovh.net'
};

// Create Connection to Compute server

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

// Creates an Image based on a serve / Instance sanpshot
var serverId = '54418178-6dbf-4fa6-a30e-0a11e323ba44';
var imageOption = {
            name: 'custom_centos7',
            server: serverId
            };

client.createImage(imageOption,
        function (err, image) {
            if (err){
                console.dir(err);
                return;
            }
            console.log("New Image %s has been created ", image);

        });
