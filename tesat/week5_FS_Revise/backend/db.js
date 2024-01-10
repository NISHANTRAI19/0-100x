const mongoose=require("mongoose");
const {mongoLink} = require("./MongoLink");

mongoose.connect(mongoLink);

