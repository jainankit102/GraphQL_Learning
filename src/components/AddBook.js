
import {useQuery, useMutation} from "@apollo/client";
import { AuthorListQuery, AddBookMutation, BookListQuery } from "../queries/queries";
import { useState } from "react";




function AddBook() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredGenre, setEnteredGenre] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    
    
    const [addBook, { bookData, bookLoading, bookError }] = useMutation(AddBookMutation);
    const {loading, error, data} = useQuery(AuthorListQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    }

    const genreChangeHandler = (event) => {
        setEnteredGenre(event.target.value)

    }

    const authorChagneHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        
        addBook({
            variables:{
                name: enteredTitle,
                genre: enteredGenre,
                authorId: enteredAuthor
            },
            refetchQueries:[{query:BookListQuery}]
        })
        // props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAuthor('')
        setEnteredGenre('');
    }
    return (
      <form className="add-book" onSubmit={submitFormHandler}>

          <div className="field-control">
              <label>Book Name: </label>
              <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
          </div>

          <div className="field-control">
              <label>Book Genre: </label>
              <input type="text" value={enteredGenre} onChange={genreChangeHandler}></input>
          </div>

          <div className="field-control">
          <label>Author Name: </label>

              <select onChange={authorChagneHandler} value={enteredAuthor}>
                  <option value="">Select Author</option>
                  {
                      !loading && data.authors.map(author => (
                          <option key={author.id} value={author.id}>{author.name}</option>
                      ))
                  }
              
              </select>
          </div>
          
          <button type="submit">Add Book</button>
        
        {/* <ul>
            {!loading && data.books.map(book => (
                <li key={book.id}>{book.name}</li>
            ))}
        </ul> */}
      </form>
    );
  }
  
  export default AddBook;
  