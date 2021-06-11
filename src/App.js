import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from './book';
import Search from './search';
import Shelf from './shelf';

const Shelves = [
    { title: 'Currently reading', value: 'currentlyReading' },
    { title: 'Want to read', value: 'wantToRead' },
    { title: 'Read', value: 'read' },
];

class BooksApp extends React.Component {
    state = {
        books: [],
        showSearchPage: false,
    };
    hideSearch = () => {
        this.setState({
            showSearchPage: false,
        });
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
        });
    };
    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <Search
                        onReturn={this.hideSearch}
                        updateShelf={this.updateShelf}
                    />
                ) : (
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
                                            Books={this.state.books.map((e) => {
                                                if (e.shelf === f.value) {
                                                    return (
                                                        <Book
                                                            Book={e}
                                                            updateShelf={
                                                                this.updateShelf
                                                            }
                                                            title={e.title}
                                                            image={
                                                                e.imageLinks
                                                                    .thumbnail
                                                            }
                                                            autor={e.authors}
                                                            value={e.shelf}
                                                        />
                                                    );
                                                }
                                            })}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="open-search">
                            <button
                                onClick={() =>
                                    this.setState({ showSearchPage: true })
                                }
                            >
                                Add a book
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default BooksApp;
