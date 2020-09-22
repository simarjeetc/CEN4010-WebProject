//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/websiteDB" , {useUnifiedTopology: true, useNewUrlParser: true,});

// BOOKS COLLECTION OF THE MongoDB DATABASE

const bookSchema = {
    image: String,
    price: String
};

const Book = mongoose.model("Book", bookSchema);

app.get("/books", function(req,res){
    Book.find(function(err, foundBooks){
        if (!err)
        {
           res.send(foundBooks); 
        }
        else
        {
            res.send(err);
        }
    })
});

app.route("/books/:id")

.get(function(req,res){
Book.findOne({bookid:req.params.id}, function(err,foundBook){
  if (foundBook)
  {
    res.send(foundBook);
  }
  else
  {
    res.send(err);
  }
});
});

// USERS COLLECTION OF THE MongoDB DATABASE

const userSchema = {
  image: String,
  price: String
};

const User = mongoose.model("Users", userSchema);

app.get("/users", function(req,res){
  User.find(function(err, foundUsers){
      if (!err)
      {
         res.send(foundUsers); 
      }
      else
      {
          res.send(err);
      }
  })
});


app.listen(5000, function() {
  console.log("Server started on port 5000");
});