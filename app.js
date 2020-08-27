const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth');
const http = require('http'); // This will be our application entry. We'll setup our server here.
const app = express(); // Set up the express app
const cors = require('cors');//enable CORS 

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//page, where no authorization is required 
//app.get('/', (req, res) => res.send('Welcome, please login'))
//app.use(auth); 
app.use(cors());

var models = require('./models'); 
models.sequelize.sync({force: true,}).then(function(){
    console.log('NICE! Database is working');
}).catch(function(err){
    console.log(err, "something went wrong (DB)");
});



require('./routes')(app); 

const port = parseInt(process.env.PORT, 10) || 1111;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;