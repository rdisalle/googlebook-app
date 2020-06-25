import React, { Component } from 'react';
import './bookApp.css';
import BookDisplay from '../bookDisplay/bookDisplay';

class BookApp extends Component {
  render() {
    return (
      <div className="bookApp">
        <div className="list">
        <BookDisplay books={this.props.books}/>
        </div>
      </div>
    );
  }
}

export default BookApp;