// /app/index.js
'use strict';

// Set up ----------------------------------------------------------------------
var path = process.cwd();
var HeaderServer = require(path + '/app/header.server.js');


// Main index function ---------------------------------------------------------
module.exports = function (app) {

  // Server side controllers ---------------------------------------------- //
	var headerServer = new HeaderServer();

	// Routes  ------------------------------------------------------------- //
	// HOME PAGE (placeholder)
	app.route('/')
		.get(function(req, res) {
			res.send('Placeholder main page.<br>Go to /api/whoami');
		})

	// API
	app.route('/api/whoami')
		.get(headerServer.parse);

	// Error page
	app.route('/error')
		.get(function(req, res) {
			res.send('This is an error page');
		});

};


// EOF -------------------------------------------------------------------------
