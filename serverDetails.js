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
var serverId = 'd242b79b-6120-49be-9f0c-9bc02e61a39e';
client.getServer(serverId,function(err, server){
                if(err){
                    console.dir(err);
                    return;
                   }

                //console.log(server);
                // FindOut Public IP Address
                console.log("Server Details Info : ")
                console.log("Server Name : %s ", server.name)
                console.log("Admin Password : %s ", server.adminPass)
                console.log("Public IP : %s ", server.addresses.public)
                console.log("Key Pair : $ ", server.openstack.key_name)

                });