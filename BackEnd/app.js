var beappAbi = require('../SmartContract/build/contracts/BeApp.json').abi;
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));

/* web3 문서가이드 */
var beappContract = web3.eth.Contract(beappAbi, '0x0c709f658591BD12820155D2e1C69fea81a9DCcF');

var mongoose = require('mongoose');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


beappContract.events.NewUser({
}, function (error, event) { 
	console.log(JSON.stringify(event, null, 4));
})
.on('data', (event) => {
    console.log('ondata: '+event); // same results as the optional callback above
})
.on('changed', (event) => {
    // remove event from local database
    console.log('onchanged : ');
})
.on('error', console.error);



// connect to mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb+srv://Beappteam:beappteam@dapp5@beappcluster-xwyff.mongodb.net/test?retryWrites=true', {
    //mongodb+srv://Beappteam:<password>@beappcluster-xwyff.mongodb.net/test?retryWrites=true
  //useMongoClient: true
  useNewUrlParser: true
});

module.exports = app;
