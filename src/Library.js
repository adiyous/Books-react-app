import React, { Component } from "react"

const bookList = [
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "The Grat Gatsby", author: "F. Scott Fitzgerald"},
    {title: "War and Peace", author: "Leo Tolstoy"},
  ]
  

class Library extends Component {
    render(){
        const books = bookList.map((book) => <li>{book.title}</li>)
        return (
            <div>
                Welcome to Book List
                <ul>{books}</ul>
            </div>
        )
    }
}
export default Library