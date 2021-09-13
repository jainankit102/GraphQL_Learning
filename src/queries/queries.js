import {gql} from "@apollo/client";


const BookListQuery = gql`
{
    books{
        name
        genre
        id
    }
}`

const AuthorListQuery = gql`
{
    authors{
        name
        id
    }
}`

const AddBookMutation = gql`
    mutation AddBook($name: String!,$genre: String!,$authorId: ID!){
        addBook(name: $name,genre:$genre,authorId: $authorId){
            name
            id
        }
    }
`

const BookDetailsQuery = gql`
    query($id: String){
        book(id: $id){
            name
            id
            genre
            author{
                name
                age
                id
            }
        }
    }

`

export {BookListQuery, AuthorListQuery, AddBookMutation, BookDetailsQuery}