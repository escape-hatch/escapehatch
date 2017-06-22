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

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
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
