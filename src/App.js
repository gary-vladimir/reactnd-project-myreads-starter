import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from './book';
import Search from './search';

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <Search />
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
                                fill="#343a40"
                            />
                        </svg>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">
                                        Currently Reading
                                    </h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <Book
                                                title="To kill a mockingbird"
                                                autor="Gary el crack"
                                                image="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
                                            />
                                            <Book />
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">
                                        Want to Read
                                    </h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <Book />
                                            <Book />
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <Book />
                                            <Book />
                                        </ol>
                                    </div>
                                </div>
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
