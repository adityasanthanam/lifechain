
![Worker](https://raw.githubusercontent.com/adityasanthanam/lifechain/master/images/logo.png)


We will create such a Blockchain application using Hyperledger Composer. The network consists of Employees, Employers and Regulator. 

# Architecture Flow


1. The application processes user requests to the network through a REST API.
2. Implements requests to the Blockchain state database on Hyperledger Fabric v1
3. The REST API is used to retrieve the state of the database
4. The Angular framework gets the data through GET calls to the REST API



# Running the Application
Follow these steps to setup and run . The steps are described in detail below.

## Prerequisite
- [Docker](https://www.docker.com/) (Version 17.03 or higher)
- [npm](https://www.npmjs.com/)  (v3.x or v5.x)
- [Node](https://nodejs.org/en/) (version 6.x - note version 7 is not supported)
  * to install Node v6.x you can use [nvm](https://davidwalsh.name/nvm)
- [Hyperledger Composer](https://hyperledger.github.io/composer/installing/development-tools.html)
  * to install composer cli
    `npm install -g composer-cli`
  * to install composer-rest-server
    `npm install -g composer-rest-server`
  * to install generator-hyperledger-composer
    `npm install -g generator-hyperledger-composer`

## Steps
1. [Clone the repo](#1-clone-the-repo)
2. [Setup Fabric](#2-setup-fabric)
3. [Generate the Business Network Archive](#3-generate-the-business-network-archive)
4. [Deploy to Fabric](#4-deploy-to-fabric)
5. [Run Application](#5-run-application)


## 1. Clone the repo

`git clone https://github.com/adityasanthanam/lifechain.git`

## 2. Setup Fabric

These commands will kill and remove all running containers, and should remove all previously created Hyperledger Fabric chaincode images:

```none
docker kill $(docker ps -q)
docker rm $(docker ps -aq)
docker rmi $(docker images dev-* -q)
```

Set Hyperledger Fabric version to v1.0:

`export FABRIC_VERSION=hlfv1`

All the scripts will be in the directory `/fabric-tools`.  Start fabric and create peer admin card:

```
cd fabric-tools/
./downloadFabric.sh
./startFabric.sh
./createPeerAdminCard.sh
```

## 3. Generate the Business Network Archive

Next generate the Business Network Archive (BNA) file from the root directory:

```
cd ../
npm install
```

Run this command to generate the Business Network Archive `composer archive create -a dist/blockchain-network.bna --sourceType dir --sourceName .`


## 4. Deploy to Fabric

Run this command to deploy the network `composer network deploy -a dist/blockchain-network.bna -p hlfv1 -i PeerAdmin -s randomString -A admin -S`

## 5. Run Application

Run this command to start your REST server `composer-rest-server -n blockchain-network -p hlfv1 -i admin -s adminpw -N never -P 3000`


The REST server to communicate with network is available here:
`http://localhost:3000/explorer/`

![REST API](https://raw.githubusercontent.com/adityasanthanam/lifechain/master/images/REST_API.png)
