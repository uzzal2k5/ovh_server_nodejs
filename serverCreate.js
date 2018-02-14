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

// CREATE SERVER (INSTANCE)
var imageId = 'bd049ab8-860e-499d-b1e2-7c4e31c469e5';
var flavorId = '920421d7-bb6a-416a-8d15-aa8e5e67fffe';
var serverOption = {
        name: 'shafiq_server_snp',
        flavor: flavorId,
        image: imageId,
        security_groups: 'default',
        key_name: 'uzzal'
       };

client.createServer(serverOption,handleServerResponse );



function handleServerResponse(err, server){
    if(err) {
        console.dir(err);
        return;
        }
    console.log('Server Created : ' + server.name + ', Waiting for Active Status');
    // Wait for status: RUNNING on our server, and then callback
    server.setWait({
            status: server.STATUS.running
        }, 5000,
        function(err){

        if(err){
            console.dir(err);
            return ;
            }
             console.log("Server Details Info : ");
             console.log("Server Name : %s ", server.name);
             console.log("ID :  %s", server.id );
             console.log("Status : %s ", server.status);
             console.log("Public IP : %  ", server.addresses.public);
             console.log("Access Key : % ", server.openstack.key_name);
             console.log('Please do not keep running ' + server.id + 'to minimize cost');
        });

}