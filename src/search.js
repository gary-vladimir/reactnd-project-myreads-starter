import React from 'react';
import { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './book';

class Search extends Component {
    state = {
        query: '',
        result: [],
    };
    updateQuery(query) {
        this.setState({ query: query });
        if (query.length > 0) {
            console.log('search');
            BooksAPI.search(query).then((data) => {
                if (typeof data !== 'undefined' && data.length > 0) {
                    this.setState({ result: data });
                }
                console.log(data);
            });
        }
    }
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
                            value={this.state.query}
                            onChange={(e) => {
                                this.updateQuery(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid" />
                    {this.state.result.map((e) => {
                        return (
                            <Book
                                Book={e}
                                updateShelf={this.updateShelf}
                                title={e.title}
                                image={e.imageLinks.thumbnail}
                                autor={e.authors}
                                value={'currentlyReading'}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Search;
