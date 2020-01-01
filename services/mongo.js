const keys = require("../config/key");
const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI);
