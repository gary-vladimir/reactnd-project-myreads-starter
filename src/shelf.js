import Book from './book';
import React, { Component } from 'react';

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book />
                        <Book />
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelf;
