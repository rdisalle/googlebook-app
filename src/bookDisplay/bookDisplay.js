import React, { Component } from 'react';
import './bookDisplay.css';
import Book from '../book/book';

class BookDisplay extends Component {
    render() {
        const { searchTerm, filterOption } = this.props;
        const list = this.props.books
            .filter(file => file.name.includes(searchTerm)
                  && (filterOption === 'All' || file.status === filterOption))
            .map((file, key) => <Book {...file} key={key} />);
        return (
            <div className="bookDisplay">
                {list}
            </div>
    );
    }
}

BookDisplay.defaultProps = {
    books: []
  };

export default BookDisplay;
