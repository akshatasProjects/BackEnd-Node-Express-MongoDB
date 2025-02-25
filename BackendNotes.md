# Backend Node Express MongoDB

1. What roles do backend developer fulfill?
2. What is backend development?
3. How to create a server?
4. How to create an API?
5. How to install & add express.js
6. How does express js works with MVC pattern?
7. How to add MongoDB?
8. How to connect MongoDB with Node
9. How to connect an MVC app with Mongoose?
10. How to create a model?
11. How to manage controllers?
12. How to manage views?
13. How to manage routes?
14. How does the logic of middleware work?

# Introduction to Backend

## What is Backend?

The backend (server side) is the part that we cant see. This includes stuff like the server, database etc.

- sending an email
- Login to a website

## What does backend developer do?

1. They write server-side-code.
2. They write the code to internet with a DB like MongoDB.
3. They ensure that the server side code is secure and bug free.
4. They ensure that the server-side-code is optimised enough to handle large volumes of traffic.

### Front side - React

### Backend - Node, Express, Mongo

#### Server side programming is something that can communicate with database through servers.

## Technologies and Languges

1. Node.js (JavaScript)+ express JS + MongoDB(NoSQL) (Used here)
2. PHP
3. Java
4. Python
5. Ruby
6. C#

# Introduction to Node JS and NPM

## What is Node JS?

- Node JS is an open source and cross platform JS runtime environment.
- Node js runs on V8 JS engine, the core of google chrome, outside of the browser. This allows Node.js to be performant.
- Using Node JS we are going to create a server and communicate with database.

### When you install Node JS it installs npm and npx too

- npm - Node Package Manager - installs the package first and then in your program/File
- npx - Node Package Executor - It installs only your project folder.

- Download the Node JS with LTS(Long Term Support) always
- To check the version of node

  - node -v
  - npm -v
  - npx -v

- Package.json contians and manages all the contains all dependencies.
- npm is the one who creates the package.json
- npm init - init initializes the folder

- "main": "index.js" --> is a start file
- To run JS file in cmd node index.js

## nodemon

- Its a package it will help the JS file run eachtime wou refresh / save the file without entering a command to run.
  - To install npm i -g nodemon
- Its important to keep JS to run continuosly because when we create a server it has to be on continuosly.

- It will be available at C:\Users\DELL\AppData\Roaming\npm

- Below command has to run in cmd once you install nodemon which gives the permission to the nodemon to run in our system.

  - Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
  - OR
  - Set-ExecutionPolicy Unrestricted

- You can install nodemon in folder also but it will be restricted to folder only not to the system so you have to install it for each project.

  - nodemon filename -- command to run nodemon

- To run file automatically "start":"nodemon index" add this in package.json

- If you added above as default to run file use -- npm start

## Types Of Modules

1. Core Modules

   - Built in modules provided by Node.js like fs, http, path etc

2. Local Modules / Custom Modules

   - Custom Modules created by developers and located within project

3. Third-Party Modules
   - Modules installed via NPM(Node Package Manager) ex:express

- When there is a "type":"Module" inside the package.json file that means we are using import/export using the React
- When there is a "type":"commonJS" that means we are using "Require" using the Node JS, commonJS is the default type in package.JSON

## 3. How to create a server?

request - from Frontend to server
response - from Server to Frontend

1. Step

- http is inbuilt when we installed node js it came with that package
  let http = require('http')

- Creating a server using http.createServer(()=>{}) which takes a call back function

      let server = http.createServer(()=>{})

- There are 2 must parameters inside callback need to pass that is request and response name can be anything.

      let server = http.createServer((frontRequest, serverResponse) => {});

- There is a function called "end" in response, (which is in node it will change to "send" when you use express)

- server.listen("8000") which will run the server at given port number

- using request.url we can check and access multiple pages or URLs

## 4. How to create an API?

## 5. How to install & add express.js

### Express JS

- Express js is a lightweight and flexible Node.js web application framework.
  It simplifies building web applications and "API", by providing a robust set of features.

  - FRAMEWORK - collection of library or functionality

- Using express we can add MVC -Model View Controller pattern to our project at backend

## Core Features of Express

1. ROUTING : Defines application routes using HTTP methods (GET, POST, PUT, PATCH,DELETE)

2. MIDDLEWARE : Functions executed in the request-response cycle.

3. TEMPLATING : Integrates with templating engine like EJS, Pug and Handlebars
   to generate dynamic HTML

4. RESTful API SUPPORT: Ideal for creating RESTful services with clean and organized code. Simplifies handling JSON and form data.

- Structures your project with MVC(Model View Controller) for maintainability.
  Model defines - DB
  View defines - Routes
  Controller defines - Functionality of the project.

- Since express is a third party library you have to install it seperately

- installation : npm init , npm i express

## 6. How does express js works with MVC pattern? Routing , Routing Params(request and response)

- Routing Params - Request and Response
  HTTP Methods(mainly focused on GET and POST)

GET :

- get method helps in displaying the data
- It can be run on directly browser or POSTMANor ThunderClient
- POSTMAN or ThunderClient are the tools where we can check the API
- you can install Thunder Client from VS extension (useful for checking API)
- why we need to check API because by using POST method we cannot run API directly on browser

POST :

- post is used where we want to keep our data secured (like user details).
- Where we dont want our API to be accessed directly.
- When we are getting the data from the Frontend like form data
- When We want to share the data to the server.
- Post method also handles the binary type of data.
- Post never runs directly on the browser, so we can use either thunderclient or postman

How Post Works

- When we are receiving a data from the frontend to the backend like login credentials.
- There are 3 methods to send the data to backend
- All these 3 methods are available or accessed through the "request" parameter

  - Body Data - By converting the data to JSON its called body data, when you are using JSON its mandatory to use this line - app.use(express.json())

    - When you send a data in JSON to the backend it will be stored in "request" first, you can check it by console.log(req.body) in the server page.

  - Query Data - We can send data through URL (query) like when searching somthing on google in the browser you can see there is a "search?q=somedata" this somedata is the query data.

    - query data useful when we are searchin some data in URL

  - Param Data - When you are sending a data the value of the data can be changed / dynamically you can send a value.

## Express js Middleware

- Request - Frontend
- Response - Backend
- Express - Server which holds the data

- Middleware is the one which enables the communication between Frontend and Backend(including server)

- Middleware is between Request and Response
- Before achieving the final check if we want to do any cross verification then we need a middleware.
  (ex: Token Verification)

- Middleware is kind of function which has 3 parameters
  (Request, Response, Next)
  Next - if success then perform the next task / final permission.

- app.use(express.json()) - in built middleware, which runs first then other code

- You can create your own custom middleware.
- you have to pass custom middleware inside app.use(cutom_Middleware)
- next() will allow to go with next codelines if it is not called then othe line of code wont be executed.

- we can include multiple middleware for different authentication.

## Route level middleware

- If you are keeping middleware seperately in different file then you need to export it.
- When you import it to the function where you want the condition to be checked.
- It should be between the query and server callback function.
  ex: app.get("/news", checkToken, (request, response)=>{})
  - here checkToken is the custom middleware
- This whole process is called route level middleware as it will be available only for that particular route.

## What is .env file?How to setup and run .env file in Node

- .env file contains the environmental variables which we want to keep securely.
- we need a package called "dotenv" https://www.npmjs.com/package/dotenv npm i dotenv to use env file, then only we can apply the logic to it.
- once you install it then we have to import it in index.js / server file using "require("dotenv").config();"
- here .config() file makes it ready to use the .env file

## How to access it

<!-- console.log(process.env.variable-Included-in-file); -->

console.log(process.env.myToken);

## MongoDB DataBase

- DataBase : Any kind of information like text, image, video is stored and managed in one place is called Database
- SQL DB and NoSQL DB

- SQL - Structured Query - Row and column and table
- NoSQL - Document oriented database(MongoDB).

### MongoDB features

- MongoDB is a document database meaning the data is stored in a JSON file / Object.
- It is designed for high data storage.
- MongoDB is most commonly used with NodeJS.
- MongoDB provides powerful aggregation (logic).

### MongoDB Installation

- search for "mongoDB community server" (https://www.mongodb.com/try/download/community)
- If encounter any error with latest version install the previous version, msi package.
- when install mongoDB it gives the package called compass which contains all the queries related to mongoDB
- Atlas is a cloud service provided by the mongo DB , if you dont want to install it in system, it works like CDN.

- Once done with installation , MongoDB opens compass click on start.
- click on Add new connection
- click on your DB name.
- click on open mongoDB shell, where you can write queries.
- Under same DB you can create sub DB.

### MongoDB Database commands

- show dbs || show database ------ gives list of all DB
- use 'Database Name' ------to create DB

- show collections --- "Collections are tables inside DB"
- db.createCollection('collection Name New')
- db.'Collection Name Old'.renameCollection('Collection Name New')
- db.'Collection Name'.drop(); ---- To delete collection

- db.dropDatabase() ---- To delete database

- db.'Collection Name'.renameCollection("name") --- renames the existing collection

- db.'Collection Name'.insertOne({}) --- inserts data to collection, the data should be in Object{} like in JSON, MongoDB returns ObjectId('67b83dd7202ab1dab96b42a8')

<!-- Insert Data -->

- db.'Collection Name'.insertMany([{}]); ----- inserts more than one data to collection.
<!-- Find Data -->
- db.'Collection Name'.find() ---- gives complete data available in the database, in an array format.
- db.'Collection Name'.find({category:"News"}) ---- filters category wise and give the result
- db.'Collection Name'.findOne({\_id:ObjectID}) -- gives only result at a time
- db.'Collection Name'.find({},{title:1, date:1})
<!-- Delete -->
- db.'Collectio Name'.deleteOne(\_id:ObjectId('objectid')) ---- deletes one item at a time based on ObejctId.
- db.'Collectio Name'.deleteMany(\_id:ObjectId('objectid')) ---- deletes one item at a time based on ObejctId.

<!-- Update Data -->

- db.'Collectio Name'.updateOne({},{$set:{}})
- db.'Collectio Name'.updateMany({},{$set:{}})
- db.'Collectio Name'.updateOne({\_id:ObjectId("obejctid")},{$set:{"key":"value"}}) ---- you have to pass id to update the data, whatever data need to be updated will be passed in the set

<!-- Notes data -->

- Object ID are the unique ID for each collection created in the database.

## Connect Mongo DB with Node JS (Insert & View API)

- Basic Things to server
  let express = require("express");
  let app = express();

app.use(express.json());

- Here app.use(express.json()) -- is the middleware we are using which will be applied to app, to handle the json data from the thunderClient or any other.

- We need to install a npm package to connect mongoDB.

<!-- Below code required for DB connection after installing it npm i mongodb -->
<!-- Keep it in seperate file -->

- Once you imported the file const { MongoClient } = require("mongodb");
- we need to open the MongoDB interface
- If you have an Atlas cluster, go to the Cluster view. Click the 'Connect' button for the cluster to which you wish to connect.
- Else copy the URL mongodb://localhost:27017/ from the database (CLick on top + sign next to Connections)

- Store the url link to the variable in server page - let dbConnectionURL = "mongodb://localhost:27017";

- Sometimes the word in URL "localhost" doesnt work, so instead of "localhost" we can add IP: which is provided in the page "https://www.npmjs.com/package/mongodb" -- using a host of 127.0.0.1 in place of localhost

- client helps in establishing the connection - let client = new MongoClient(dbConnectionURL);

- Since it comes with promises we need to se Async also it may take time to connect.

- client.db("DB name"); --- create the new db

- let studCollection = myDBreturned.collection("studDataCollection"); --- creating collection / table

- Here we are creating object, getting the data from req.body as in JSON the data will be stored in body
  let objData = {
  studName: req.body.studName,
  };

<!-- DB connection code -->

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
// Use connect method to connect to the server
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const collection = db.collection('documents');

// the following code examples can be pasted here...

return 'done.';
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
