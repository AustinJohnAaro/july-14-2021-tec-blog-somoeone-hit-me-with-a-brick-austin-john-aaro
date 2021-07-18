import app from 'server.js'
export default class A{} 


const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const { debug } = require('console');
const http = require('http');
const app = require('.app.js');

const normalizePort = val => {
    var port = parseInt(val, 10);

    if(isNaN(port)){
        //named pipe
        return val;
    }

    if(port >= 0){
        //port number
        return port;
    }
    
    return false;
};

const onError = error => {
    if(error.svscall !== "listen"){
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch(error.code){
        case "EACCES":
            console.log(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.log(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port); 




const SequelizeStore = require('connect-session-sequelize')(session.Store);





const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



module.exports = function(sequelize, DataTypes) {                                                    
  return sequelize.define('User', {                                                             
      username: DataTypes.STRING,                                                                  
  },{                                                                                              
      classMethods: {                                                                              
          doSomething: function(successcb, errcb, request) {}                                             
     },                                                                                           
     instanceMethods: {                                                                           
         someThingElse: function(successcb, errcb, request) {}                                              

     }                                                                                            
   });                                                                                              
 }; 


console.log('this will sync your table to your database')
console.log('and the console should read out Executing (default): CREATE TABLE IF NOT EXISTS "TABLE NAME"....')

const app = express();
const PORT = process.env.PORT || 8080; 

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); 


app.listen(PORT, () => console.log('Now listening'));

  


