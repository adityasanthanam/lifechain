![Worker](https://raw.githubusercontent.com/adityasanthanam/lifechain/master/images/logo.png)

## Steps
1. [Clone the repo](#1-clone-the-repo)
2. [Setup Application](#2-setup-application)
3. [Run Application](#5-run-application)

## 1. Clone the repo

`git clone https://github.com/adityasanthanam/lifechain.git`

## 2. Setup Application

Install `mongodb` using the link (https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu-16.04/)

After installed MongoDB RUN `mongo` command to access the console

Create the user usind `db.createUser({user:"root", pwd:"password", roles:[{role:"root", db:"admin"}]})`

RUN mongo -u root -p password --authenticationDatabase admin

RUN `cd lifechain/AUTH_Service`
RUN `npm install`
RUN `npm install -g nodemon`

## 5. Run Application

Run this command to start your frontend  `RUN nodemon server.js`

Now you can access the application

`http://localhost:4000/`

## Signin

http://localhost:4000/auth/login

## signup

http://localhost:4000/auth/signup


