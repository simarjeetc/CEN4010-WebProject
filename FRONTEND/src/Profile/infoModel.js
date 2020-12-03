const mongoose = require("mongoose");

//moves data onto userInfo database, WIP

const infoSchema = new mongoose.Schema({
    creditCard: {type: String, required:true},
    shippingAddress: { type: String, required:true},
    userId: { type: String, required:true },
});

module.exports = userInfo = mongoose.model("userInfo", infoSchema);