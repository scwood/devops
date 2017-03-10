#!/usr/bin/env sh

sudo apt-get -y update 

sudo apt-get install -y git htop

git config --global user.name scwood
git config --global user.email spencercwood@gmail.com

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs

npm install -g pm2
npm install -g redbird
