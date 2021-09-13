import {useQuery} from "@apollo/client";
import { useState } from "react";

import { BookListQuery } from "../queries/queries";
import BookDetail from './BookDetails';

function BookList() {

    const [selectedBook, setSelectedBook] = useState('');
    const {loading, error, data} = useQuery(BookListQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);


    const handleBookClick = (event) => {
        console.log(event.target.dataset.id)
        setSelectedBook(event.target.dataset.id)
    }
    return (
      <div className="App">
        
        <ul>
            {!loading && data.books.map(book => (
                <li key={book.id} data-id={book.id } onClick={handleBookClick}>{book.name}</li>
            ))}
        </ul>
        {selectedBook && 
         <BookDetail  bookId={selectedBook}></BookDetail>
        }
      </div>
    );
  }
  
  export default BookList;
  