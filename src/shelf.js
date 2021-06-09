import Book from './book';
import React, { Component } from 'react';

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">{this.props.Books}</ol>
                </div>
            </div>
        );
    }
}

export default Shelf;
