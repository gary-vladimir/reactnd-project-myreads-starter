import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from './book';
import Search from './search';
import Shelf from './shelf';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';

const Shelves = [
    { title: 'Currently reading', value: 'currentlyReading' },
    { title: 'Want to read', value: 'wantToRead' },
    { title: 'Read', value: 'read' },
];

class BooksApp extends React.Component {
    state = {
        books: [],
        showSVG: false,
    };

    getAllBooks() {
        BooksAPI.getAll().then((response) => {
            this.setState({ books: response });
        });
    }
    componentDidMount() {
        this.getAllBooks();
    }
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.getAllBooks();
            this.showSVG();
            sleep(2500).then(() => {
                // Do something after the sleep!
                this.hideSVG();
            });
        });
    };
    showSVG = () => {
        this.setState({
            showSVG: true,
        });
    };
    hideSVG = () => {
        this.setState({
            showSVG: false,
        });
    };
    render() {
        if (this.state.showSVG) {
            return (
                <div className="success-animation">
                    <svg
                        className="checkmark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            className="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                        />
                        <path
                            className="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                    </svg>
                </div>
            );
        }
        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <svg
                                viewBox="0 0 200 100"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                height="50px"
                                width="100%"
                            >
                                <polygon
                                    points="0,0 200,0 100,100 0,0"
                                    fill="#354f52"
                                />
                            </svg>
                            <div className="list-books-content">
                                <div>
                                    {Shelves.map((f) => {
                                        return (
                                            <Shelf
                                                key={f.title}
                                                title={f.title}
                                                Books={this.state.books.map(
                                                    (e) => {
                                                        if (
                                                            e.shelf === f.value
                                                        ) {
                                                            return (
                                                                <Book
                                                                    key={e.id}
                                                                    Book={e}
                                                                    updateShelf={
                                                                        this
                                                                            .updateShelf
                                                                    }
                                                                    title={
                                                                        e.title
                                                                    }
                                                                    image={
                                                                        e
                                                                            .imageLinks
                                                                            .thumbnail
                                                                    }
                                                                    autor={
                                                                        e.authors
                                                                    }
                                                                    value={
                                                                        e.shelf
                                                                    }
                                                                />
                                                            );
                                                        }
                                                    }
                                                )}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="open-search">
                                <Link to="/search" id="button">
                                    Add book
                                </Link>
                            </div>
                        </div>
                    )}
                />
                <Route
                    exact
                    path="/search"
                    render={() => <Search updateShelf={this.updateShelf} />}
                />
            </div>
        );
    }
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export default BooksApp;
