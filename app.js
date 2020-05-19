const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //default: process.cwd() + '/views'

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//bodyParse use to convert raw streams data (in bits and not readable) to readable text object in the body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

//use of static folder public
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))


//first parameter is for filtering all routes start with /admin
app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);


//if no route execute => error
const errorController = require('./controllers/error')
app.use(errorController.get404)

app.listen(3000)
// app.listen includes const server = http.createServer(app) and server.listen(3000)

