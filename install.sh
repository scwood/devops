#!/usr/bin/env sh

sudo apt-get -y update 

sudo apt-get install -y git htop

git config --global user.name scwood
git config --global user.email spencercwood@gmail.com

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile

npm install -g pm2 http-server
