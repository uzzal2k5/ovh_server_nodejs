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
client.getFlavors(function (err, flavors) {
    if (err){
        console.dir(err);
        return;
    }
    console.log(flavors)
 });
