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
client.getServers(function(err, server){
                if(err){
                    console.dir(err);
                    return;
                   }

                console.log(server);
                 });