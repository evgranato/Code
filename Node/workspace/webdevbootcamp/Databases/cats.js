var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/cat_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!"'))
.catch(error => console.log(error.message));

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
});

var Cat = mongoose.model("Cat", catSchema);

// ADD TO THE DATABASE:

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 11,
//     temperment: "Sweet"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something Went Wrong!")
//     } else{
//         console.log("A CAT WAS ADDED TO THE DB!")
//         console.log(cat);
//     }
// });

// OR ADD TO THE DATABASE ALL IN ONE USING CREATE:

Cat.create({
    name: "Snotty",
    age: 15,
    temperment: "Bland"
}, function(err, cat){
    if(err) {
        console.log(err);
    } else{
        console.log(cat);
    }
});

// RETRIEVE FROM THE DATABASE:

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else{
        console.log("All the cats...");
        console.log(cats);
    }
})