import React from 'react';
import { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './book';
import { Link } from 'react-router-dom';

class Search extends Component {
    state = {
        query: '',
        result: [],
    };
    updateQuery(query) {
        this.setState({ query: query });
        if (query.length > 0) {
            BooksAPI.search(query)
                .then((data) => {
                    if (typeof data !== 'undefined' && data.length > 0) {
                        this.setState({ result: data });
                    }
                })
                .catch(this.setState({ result: [] }));
        } else {
            this.setState({ result: [] });
        }
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
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
                    {this.state.result.map(
                        (e) =>
                            e.title &&
                            e.imageLinks &&
                            e.imageLinks.thumbnail &&
                            e.authors && (
                                <Book
                                    key={e.id}
                                    Book={e}
                                    updateShelf={this.props.updateShelf}
                                    title={e.title}
                                    image={e.imageLinks.thumbnail}
                                    autor={e.authors}
                                    value={'none'}
                                />
                            )
                    )}
                </div>
            </div>
        );
    }
}

export default Search;
