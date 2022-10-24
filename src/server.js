// <------- Imports ------->
const express = require("express");

// <------- Variables ------->
const app = express();

// <------- Configuration of the Web Server ------->

// Translates the /static directory and repoints it to the public directory
app.use("/static", express.static("public")); 

// Configuring which port the web server is listening to for requests
app.listen(5001, () => { 
    console.log("Listening on port 5001");
})
