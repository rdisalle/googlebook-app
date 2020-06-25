import React, { Component } from 'react';
import './searchBar.css';
import SearchBox from '../searchBox/searchBox';
import FilterBox from '../filterBox/filterBox';
import PrintType from '../printType/printType';

class SearchBar extends Component {
  render() {
  return (
    <div className='SearchBar'>
        <div className="SearchBar__heading">
            <h1>Google Book Search</h1>
        </div>
        <div className="SearchBar__controls">
            <SearchBox
                handleSearchSubmit={ this.props.handleSearchSubmit }
            />
            <FilterBox 
                handlePrintType={ this.props.handlePrintType } />
            <PrintType
                handlePrintType={ this.props.handlePrintType } />
        </div>
    </div>
  );
}
}

export default SearchBar;