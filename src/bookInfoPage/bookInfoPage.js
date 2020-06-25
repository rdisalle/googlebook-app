import React, { Component } from  'react';
import './bookInfoPage.css';

class BookInfoPage extends Component {
  render() {
    return (
      <div className="bookInfoPage">
        <h2>More Info:</h2>
        <div className="addbookmark__form">
            <h1 className="bookName">{this.props.title}</h1>
            <h2 className="bookAuthor">{this.props.author}</h2>
            <p className="bookDescription">{this.props.description}</p>
            <p> className="bookUrl>{this.props.url}</p>


          <div className="cancel__button">
            <button>Cancel</button>
          </div>  
        </div>
      </div>
    );
  }
}

export default BookInfoPage;