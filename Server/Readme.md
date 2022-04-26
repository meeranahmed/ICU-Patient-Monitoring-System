## To Run Server-Side App</br>
* Prerequests 
    *   [Nodejs](https://nodejs.org/en/download/) 
    *   [Postman for testing](https://www.postman.com/downloads/)
* After Cloning This Repo
### 1- Open cmd / Terminal in this path and write 
```
npm install
```
### 2- DB Connection 
[Create account on Mongo Atlas DB](https://account.mongodb.com/account/login?n=%2Fv2%2F6214d2c550d95d7cef2feada%23metrics%2FreplicaSet%2F6214d38825ee536a936ed850%2Fexplorer%2FmyFirstDatabase)
</br>
1.  get connection string 
2.  create .env file
```
CONNECTION_STRING = mongodb+srv://<User>:<Password>@cluster0/<DatabaseName>
```
   
### 3- Deployment 
[Create account on Heroku Cloud App Platform](https://id.heroku.com/login) and Follow the steps of deployment

### 4- Running Locally index.js 
```
npm start
```