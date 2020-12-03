import React, {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

import {Link, BrowserRouter, Route} from 'react-router-dom';
import BookBrowsing from './BookBrowsing'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux';


function BookDetails(props){
    const [qty, setQty] = useState(1);
    const [books, setBooks] = useState([])
    const [id, setId] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cart,setCart] = useState([]);
    const [page, setPage] = useState('products');
    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        props.history.push("/ShoppingCart/" + props.match.params.bookid + "?qty=" + qty);
    }

    function itemNum() {
        return <h1>{cart.length}</h1>
    }

    useEffect(() => {
        axios
        .get(`/books/${props.match.params.bookid}`)
        .then(res => {
            console.log(res)
            setBooks(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

     //WishList 

     const sendToWishlist = () => {
      props.history.push("/WishList/" + props.match.params.bookid);
  }


return (
    <div>
        <Route path ="/" exact={true} component={BookBrowsing}/>
    <div className = "back-to-home">
    <Link to="/" Back to home page></Link>
    </div>
    
    <div className="details">

     <div className="details-image">
        <img  src={books.image} onClick={handleShow} alt="book"></img>
     </div>

     <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body><img  src={books.image} onClick={handleShow} className="modal-image" alt="book"></img></Modal.Body>
        <Button variant="primary" className = "modal-button" onClick={handleClose}>
            Back
          </Button>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>

     

    
    <div className="details-info">
       <ul>
           <li>
               <h4>{books.name}</h4>
           </li>
           
           <li>
              <div>
              <b> Genre: </b> {books.genre}
              </div> 
           </li>

           <br></br>

           <li>
             <b> Description: </b>
              <div>
                  {books.desc}
              </div> 
           </li>

           <br></br>

           <li>
             <b> Publishing info: </b>
              <div>
                  {books.publisher}, {books.date}
              </div> 
           </li>

           <br></br>

           <li>
             <b> Rating: </b>
              <div>
                  {books.rating} / 5
              </div> 
           </li>

           <br></br>

            <li>
            <b> Reviews: </b>
            <div>
                {books.comments1} 
                <br></br>
                {books.comments2} 
            </div> 
            </li>



           </ul> 
    </div>

    <div className="author-info">
     <ul>
           <li>
           <p>
           Author name: <a href={books.authorLink}><h4>{books.author}</h4></a>
           </p>
           </li>

           <li>
               <h4>Author bio: </h4>
               {books.authorBio}
           </li>

        </ul>
     </div>

           <div className="details-action">
                <ul>
                    <li>
                        Price: <b>${books.price}</b>
                    </li>

                    <li>
                    <button onClick = {handleAddToCart} className = "Atc-button">Add to Cart</button>

                    </li>

                    <li>
                     <button onClick = {sendToWishlist} className = "Wls-button">Add to Wishlist</button>

                    </li>

                    <li>
                    Qty: <select value= {qty} onChange= {(e) => {setQty(e.target.value)}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                </ul>
           </div>
    </div>
{/*-------------------comment and rating--------------------------------*/}

<div class="reviewClass">
        <fieldset class="reviewBox">
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
  console.log(usrComments);
};





export default BookDetails;
