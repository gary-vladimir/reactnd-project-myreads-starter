import React from 'react';
import { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${this.props.image})`,
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select
                                value={this.props.value}
                                onChange={(e) => {
                                    this.props.updateShelf(
                                        this.props.Book,
                                        e.target.value
                                    );
                                }}
                            >
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.autor}</div>
                </div>
            </li>
        );
    }
}

export default Book;
