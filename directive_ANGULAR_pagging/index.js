var express= require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var ECT = require('ect');
var methodOverride = require('method-override');
var morgan = require('morgan');

var user = require('./routers/user');
var config = require('./config/config');
var app = express();

//setup sequelize
global.db = new Sequelize(config.db.database, config.db.username, config.db.password,  config.db);
db['user'] = db.import(__dirname + '/models/user');


//setting static
app.use(express.static('public'));
app.use(morgan('dev'));
//setting view engine
var ectRenderer = ECT({ watch: true, root: __dirname + '/views' });
app.engine('.ect', ectRenderer.render);

//Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());


app.use('/', user);

app.listen(6969, function () {
    console.log('Server started 6969');
});

