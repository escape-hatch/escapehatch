const path = require('path');
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../public')));

// MIDDLEWARE
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES
app.use('/api', require('./apiRoutes'))

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


//ERROR HANDLING MIDDLEWARE
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(3000, function () {
  console.log("Your server is listening on port 3000...");
});
