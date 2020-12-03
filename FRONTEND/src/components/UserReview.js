import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Cookie from 'js-cookie';

//jshint esversion:6

function UserReview() {
  return (
    <div className="Reviews">
      <h1 className="Reviews-header">Reviews</h1>

      <h5>No reviews have been given.</h5>
      <h3>Continue browsing<a href="">Homepage</a></h3>

      {/*-------------------comment and rating--------------------------------*/}

      <div class="reviewClass">
        <fieldset class="reviewBox">
        <div class="formBox">
            <textarea
              name="comments"
              id="title"
              rows="2"
              cols="57"
              placeholder="Enter a Book Title"
            ></textarea>
          </div>
          <div class="formBox">
            <textarea
              name="comments"
              id="comment"
              rows="4"
              cols="57"
              placeholder="Add a public comment..."
            ></textarea>
          </div>

          <div class="formBox">
            <input type="radio" id="star1" name="rating" value="1" />
            <label for="star1" title="Sucks big time">
              1 star
            </label>

            <input type="radio" id="star2" name="rating" value="2" />
            <label for="star2" title="Kinda bad">
              2 stars
            </label>

            <input type="radio" id="star3" name="rating" value="3" />
            <label for="star3" title="Meh">
              3 stars
            </label>

            <input type="radio" id="star4" name="rating" value="4" />
            <label for="star4" title="Pretty good">
              4 stars
            </label>

            <input type="radio" id="star5" name="rating" value="5" />
            <label for="star5" title="Rocks!">
              5 stars
            </label>
          </div>

          <div class="formBox">
            <input type="checkbox" id="name" placeholder="Name" />
            <label>Check to comment anonymously.</label>
          </div>

          <div class="formBox">
            <input type="checkbox" id="eligible" placeholder="Eligibility" />
            <label>Check only if purchased the Book.</label>
          </div>

          <div class="formBox">
            <button value="1" id="btn" onClick = {addComment}>
              COMMENT
            </button>
          </div>
        </fieldset>
      </div>

      <div id="msg" class="formBox">
        <pre>User Comment and Rating Hisory:</pre>
      </div>
      {/*-------------------comment and rating--------------------------------------*/}
    </div>
  );
}
function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  //document.body.removeChild(element);
}

// Start file download.
//download("Reviews.txt", "This is the content of Customer Reviews");

let usrComments = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addComment = () => {
  var title;
  var eligible;
  var userRating;
  var userName;
  var radio1 = document.getElementById("star1");
  var radio2 = document.getElementById("star2");
  var radio3 = document.getElementById("star3");
  var radio4 = document.getElementById("star4");
  var radio5 = document.getElementById("star5");
  var radio6 = document.getElementById("name");
  var radio7 = document.getElementById("eligible");

  if (radio7.checked) eligible = "Yes";
  else eligible ="No";

  if (radio5.checked) userRating = 5;
  else if (radio4.checked) userRating = 4;
  else if (radio3.checked) userRating = 3;
  else if (radio2.checked) userRating = 2;
  else if (radio1.checked) userRating = 1;
  else userRating = 0;

  if (radio6.checked) userName = "Anonymous";
  else userName = "Current User";

  //event.preventDefault(); //to stop the form submitting
  let usrField = {
    Date: Date.now(),
    Eligible: eligible,
    Name: userName,
    //Name: document.getElementById("name").value,
    Rating: userRating,
    Title: document.getElementById("title").value,
    //Rating: document.getElementById('rate').value,
    Comment: document.getElementById("comment").value,
  };
  // add in an array
  usrComments.push(usrField);
  //usrComments.push("<br>");

  //document.forms[0].reset();
  // to clear the form for the next entries
  //document.querySelector("form").reset();

  //for display purposes only
  //console.warn('added' , {movies} );
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(usrComments, "\t", 2);
  //setBooks JSON.stringify(usrComments);
  //saving to localStorage
  localStorage.setItem("comments", JSON.stringify(usrComments));
  //console.log(usrComments);
};



export default UserReview;