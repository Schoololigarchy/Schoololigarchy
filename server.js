'use strict'
const express = require('express');
const logger  = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const homeworkRoutes = require('./routes/homeworks')
const homeRoutes = require('./routes/home')
const PORT = process.env.PORT || 3000

app.use( logger('dev'))
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, function(){
	console.log('your server is running... you\'d better go catch it!');
})

app.use('/', homeRoutes)

