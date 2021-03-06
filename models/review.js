var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        email: String,
    },
    stars: Number,
    ITitle: String,
    IImage: String,
    IDescription: String,
    IPrice: Number
});

var Review = mongoose.model("Review", reviewSchema);

module.exports = Review;