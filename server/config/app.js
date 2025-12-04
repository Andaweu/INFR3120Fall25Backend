var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
let carsRouter = require('../routes/car')
const {ensureLoggedIn} = require('../config/auth')

var app = express();
require('dotenv').config();
var mongoDB_URI = process.env.MONGODB_URI

//authentication requirements
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let locatStrategy = passportLocal.Strategy;
let flash = require('connect-flash')
let cors = require('cors')

//User stuffz
let userModel = require('../models/user')
let User = userModel.User;

//User authetication strat, yo
passport.use(User.createStrategy());

//serialize / deserialize user info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Test DB Connection

mongoose.connect(process.env.MONGODB_URI);
let mongoDB = mongoose.connection;
mongoDB.on('error',console.error.bind(console,'Connection error'));
mongoDB.once('open',()=>{
  console.log('Connected to the MongoDB');
})

//setting up express session
app.use(session({
  secret:"Somesecret",
  saveUninitialized: false,
  resave: false
}))

//Setting up flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// make the logged-in user available in all EJS views
app.use((req, res, next) => {
  res.locals.user = req.user;   // will be undefined if not logged in
  next();
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars',carsRouter);

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
res.render('error', { title: 'Error', user: req.user }); //CHANGED
});

module.exports = app;
