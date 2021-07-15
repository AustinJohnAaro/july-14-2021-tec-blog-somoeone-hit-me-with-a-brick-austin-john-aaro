let path = require('path');
let express = require('express');
let session = require('express-session');
let exphbs = require('express-handlebars');
let routes = require('./controller/api');

let app = express();
let PORT = process.env.PORT || 3001;

let sequelize = require("/config/connection");
let SequelizeStore = require('connect-session-sequelize')(session.Store); 

 let sess = {
   secret: 'Super secret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
     db: sequelize
   })
 };
 app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

let helpers = require('./utils/helpers');
let hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log('Now Listening'));
 })