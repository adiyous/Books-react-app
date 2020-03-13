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
                <div>
                    Welcome to Book List
                    <ul>{books}</ul>
                </div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                        <input type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Library