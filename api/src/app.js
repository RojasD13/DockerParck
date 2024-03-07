const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//Setings:
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware:
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json({ limit: '500mb' }));

app.use('/public',express.static(path.join(__dirname, './public')))

//Routes:
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(app.get('port'), () =>  {
    console.log('Server on port ', app.get('port'));
});