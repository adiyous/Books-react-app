import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Button, FormControl } from "react-bootstrap";

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
                    <div>
                        <Button variant="primary" onClick={() => this.setState({ showSearchPage: false })}>
                            Close
                        </Button>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <Button variant="outline-secondary">Button</Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" placeholder="Search by title or author"/>
                        </InputGroup>
                    </div>
                </div>
            </div>
        )
    }
}
export default Library