#!/usr/bin/env bash
yum update
# Install rpm rdo-release
yum install -y https://rdoproject.org/repos/rdo-release.rpm
yum install -y python-novaclient
yum install -y python-glanceclient
yum install -y python-openstackclient
yum install -y  wget
cd
wget https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh
source ~/.bashrc
nvm install v9.4.0
npm i -g npm
npm install pkgcloud
npm i --save lodash