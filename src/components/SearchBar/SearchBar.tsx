import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component<object, { inputValue: string }> {
  constructor(props: object) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }
  componentDidMount() {
    const localStoreVal = window.localStorage.getItem('inputValue');
    localStoreVal === null
      ? window.localStorage.setItem('inputValue', this.state.inputValue)
      : this.setState({ inputValue: localStoreVal });
  }
  componentWillUnmount() {
    window.localStorage.setItem('inputValue', this.state.inputValue);
  }
  render() {
    return (
      <div className="search">
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="enter your words"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
        </div>
        <div className="searchButton">search</div>
      </div>
    );
  }
}

export default SearchBar;
