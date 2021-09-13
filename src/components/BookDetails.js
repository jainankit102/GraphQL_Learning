import {useQuery} from "@apollo/client";

import { BookDetailsQuery } from "../queries/queries";


function BookDetail(props) {
    console.log(props)
    
    const { loading, error, data } = useQuery(BookDetailsQuery, {
        variables: { 
            id: props.bookId
         },
      });
    
      if (loading) return null;
      if (error) return `Error! ${error}`;
      console.log(data)
    return (
      <div className="App">
        <p>Book Details</p>
      </div>
    );
  }
  
  export default BookDetail;
  