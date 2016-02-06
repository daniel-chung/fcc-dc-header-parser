// /app/index.js
'use strict';

// Set up ----------------------------------------------------------------------
var path = process.cwd();
var HeaderServer = require(path + '/app/header.server.js');


// Main index function ---------------------------------------------------------
module.exports = function (app) {

  // Server side controllers ---------------------------------------------- //
	var headerServer = new HeaderServer();

	// HOME PAGE is the sole API call --------------------------------------- //
	app.route('/')
		.get(headerServer.parse);

  // Test page ----------------------------------------------------------- //
	app.route('/test')
		.get(function(req, res) {
			res.send('hello');
		});

	// Error page
	app.route('/error')
		.get(function(req, res) {
			res.send('This is an error page');
		});

};


// EOF -------------------------------------------------------------------------
