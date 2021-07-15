
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
 











function mysqlConnect(config){
  con = mysql.createConnection({
    host: config.host, 
    user: config.user, 
    password: config.password
  });
} 


function createConnection() {
  var connection = mysql.createConnection({
    host: 'localhost',// 127.0.0.1
    user: 'root',
    password: '',
    database: 'homestay'
  });
  return connection
} 

function createConnection(){
  var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'hao13795296861',
    database:'my_blog'
  });
  return connection;
} 

function initConnection() {

  //set the global connection object
   connection = mySql.createConnection({
 
   host: 'localhost',
   user: 'root',
   password: 'databasePassword',
   database: 'oAuth2Test'
  })
 } 

 function createDBConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'payfast'
  })
} 


  return {
   testQueries: async (queries, fixture) => {
    const conn = mysql.createConnection({
     host: 'localhost',
     port,
     user: 'root',
     database: 'mysql',
     password: this.password()
    });
    const connect = promisify(conn.connect.bind(conn));

    conn.execute = promisify(conn.query.bind(conn));

    await connect();

    try {
     await this.prepareFixture(conn, fixture);
     return await queries
      .map(query => async () => JSON.parse(JSON.stringify(await conn.execute(query[0], query[1]))))
      .reduce((a, b) => a.then(b), Promise.resolve());
    } finally {
     await promisify(conn.end.bind(conn))();
    }
   }
  };
 
