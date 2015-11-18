var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var sightingCtrl = require("./controllers/sightingCtrl");

var app = express();

app.use(bodyParser.json());
app.use(cors());

var mongoUri = "mongodb://localhost:27017/mini-birds-mongoose";
mongoose.connect(mongoUri);
mongoose.connection.once("open", function() {
	console.log("Connected to MongoDB at", mongoUri);
});

app.post('/sighting', sightingCtrl.create);
app.get('/sighting', sightingCtrl.read);
app.put('/sighting/:id', sightingCtrl.update);
app.delete('/sighting/:id', sightingCtrl.remove);


var port = 8500;
app.listen(port, function() {
	console.log("listening on port:", port);
});