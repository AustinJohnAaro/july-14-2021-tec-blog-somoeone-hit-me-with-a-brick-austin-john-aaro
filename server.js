import app from 'server.js'
export default class A{} 


const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');






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
const PORT = process.env.PORT || 3001; 

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); 


app.listen(PORT, () => console.log('Now listening'));

  


