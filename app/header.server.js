// /app/controllers/header.server.js
'use strict';

// Set up ----------------------------------------------------------------------


// Main export class -----------------------------------------------------------
function HeaderServer () {

  // convert method ------------------------------------------------------- //
  this.parser = function (req, res) {

    res.end();
    //res.send(getDateObj(inputDate));

  };  // End convert method ----------------------------------------------- //
};


// Export the handler class ----------------------------------------------------
module.exports = HeaderServer;


// EOF -------------------------------------------------------------------------
