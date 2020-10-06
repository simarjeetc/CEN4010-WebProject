import React, {useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';

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
<div>
   
         {books.name} 
        <button className = "Atc-button">Add to Cart</button>
</div>
    )
}

export default BookDetails;