require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api für Users wird aufgerufen, im  users.controller werden die entsprechenden sub routen aufgerufen und verarbeitet
app.use('/users', require('./users/users.controller'));

//api für Artikel, in article.controller werden die entsprechenden sub routen aufgerufen und verabeitet
app.use('/article', require('./article/article.controller'));

// global error handler
app.use(errorHandler);

// starten des servers
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8080;
app.listen(port, () => console.log('Server listening on port ' + port));