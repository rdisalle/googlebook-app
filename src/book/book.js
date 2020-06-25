import React, { Component } from 'react';
import './book.css';
import MoreInfo from '../moreInfo/moreInfo';


class Book extends Component {
    render() {
    return (
        <div className="book">
            <h1 className="bookName">Title</h1>
            <h2 className="bookAuthor">Author</h2>
            <p className="bookDescription">Description</p>
            <MoreInfo />
        </div>
    );
    }
}


export default Book;