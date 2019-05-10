import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleResultSelect = this.handleResultSelect.bind(this)

  }

  //-----------------------------------
  // Methods
  //-----------------------------------
  handleInputChange(evt) {
    this.setState({
      query: evt.target.value
    })
  }

  handleResultSelect(e, value) {
    if (e.key === 'Enter') {
      this.setState({
        query: e.target.value
      }, () => {
        this.props.handleSearchQueryCallback(this.state.query);
      })
    }
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return (
      <div>
        <input
          placeholder={"Search for a particular dish or ingridient"}
          onChange={this.handleInputChange}
          onKeyPress={this.handleResultSelect}
          value={this.state.query}
          className="search-box"
        />
      </div>
    )
  }
}

export default (SearchBar);
