// Copyright 2015-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
var express = require('express');
var app = express();


//layout defaults to main, located in the views layout folder
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.use(express.static(__dirname + '/public'));

//sets the template engine to use for the express object
//a template engine will implement the view part of the app
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// [START hello_world]
// Say hello!
app.get('/', function (req, res, next) { 
	  var context = {};
	  res.render('home', context);
  });
// [END hello_world]

//listener all for unrecognized urls
//return 404 not found response
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

//listener for errors generate on server
//return 500 response
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});


if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(process.env.PORT || 8080, function () {
	  var port = server.address().port;
	  console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = app;
