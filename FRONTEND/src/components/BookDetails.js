import React, {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import {Link} from 'react-router-dom';

function BookDetails(props){
    const [books, setBooks] = useState([])
    const [id, setId] = useState()

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

return (

<div className = "details">
    <div className = "back-to-home">
    <Link to="/" Back to home page></Link>
    </div>
    <div className="details">

     <div className="details-image">
        <img src={books.image} alt="book"></img>
     </div>

    <div className="details-info">
       <ul>
           <li>
               <h4>{books.name}</h4>
           </li>
           
           <li>
              Price: <b>${books.price}</b>
           </li>

           <li>
              Description:
              <div>
                  {books.desc}
              </div> 
           </li>

           <div className="details-action">
                <ul>
                    <li>
                        Price: {books.price}
                        <button className = "Atc-button">Add to Cart</button>
                        <button className = "Atc-button">Add to Wish List</button>
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


       </ul> 
    </div>


</div>

</div>
    )
}

export default BookDetails;