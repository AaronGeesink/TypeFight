const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema ({
    username: {type: String, required: true, unique: true},
    password: {type :String, required: true},
    gamesPlayed: {type: Number, required: true},
    averageWPM: {type: mongoose.Types.Decimal128, required: true},
    averageAccuracy: {type: mongoose.Types.Decimal128, required: true},
    rankScore: {type: Number, required: true}
},
{collection: "users"}//might need to change this
)

const model = mongoose.model("UserSchema", UserSchema)

module.exports = model