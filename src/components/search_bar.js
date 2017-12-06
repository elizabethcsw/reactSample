import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''};

  };

// <input onChange={this.onInputChange}/>

  render() {
    return (
      <div className="search-bar">

        <input
        value = {this.state.term}
        onChange = {event => this.onInputChange(event.target.value)}/>
      </div>

    );
  };

  onInputChange(term){
    this.setState({term: term})
    // console.log(event.target.value)
    this.props.onSearchTermChange(this.state.term)
  }
}

// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;
