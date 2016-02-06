// /app/controllers/header.server.js
'use strict';

// Set up ----------------------------------------------------------------------


// Main export class -----------------------------------------------------------
function HeaderServer () {

  // convert method ------------------------------------------------------- //
  this.parse = function (req, res) {
    var header = req.headers;
    var result = {};
    result.ipaddress = header["x-forwarded-for"];
    result.language = header["accept-language"].split(",")[0];
    result.software = /\((.*)\)/.exec(header["user-agent"])[1];
    res.json(result);
  };  // End convert method ----------------------------------------------- //

};


// Export the handler class ----------------------------------------------------
module.exports = HeaderServer;


// EOF -------------------------------------------------------------------------
