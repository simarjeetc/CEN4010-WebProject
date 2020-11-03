import React, {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function BookDetails(props){
    const [books, setBooks] = useState([])
    const [id, setId] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const [cart,setCart] = useState([]);
    const [page, setPage] = useState('products');

    const addToCart = (books) => {
        alert( books.name + " has been added to your Cart! " + " There are " + (cart.length + 1) + " items in your cart." );
    setCart([...cart,books]);
    console.log(cart);
    }

return (
    <div>

    <div className = "back-to-home">
    <Link to="/" Back to home page></Link>
    </div>
    
    <div className="details">

     <div className="details-image">
        <img  src={books.image} onClick={handleShow} alt="book"></img>
     </div>

     <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><img  src={books.image} onClick={handleShow} className="modal-image" alt="book"></img></Modal.Body>
        <Button variant="primary" className = "modal-button" onClick={handleClose}>
            Back
          </Button>
        <Modal.Footer>
          <Button variant="primary" className = "modal-button" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
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
                    <button onClick = {() => addToCart(books) }className = "Atc-button">Add to Cart</button>

                    </li>

                    <li>
                    <a> <button className = "Wls-button" onclick= "addtoWL()" >⭐</button> </a>

                    </li>

                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                </ul>
           </div>
    </div>
</div>
    )
}

export default BookDetails;
