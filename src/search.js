import React from 'react';
import { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './book';

class Search extends Component {
    state = {
        query: '',
        result: [],
    };
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button
                        className="close-search"
                        onClick={() => this.props.onReturn()}
                    >
                        Close
                    </button>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid" />
                </div>
            </div>
        );
    }
}

export default Search;
