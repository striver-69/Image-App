import React, { Component } from 'react'

export class SearchBar extends Component {

  state={term:'Hi there'}

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" value={this.state.term} onChange={(e)=> this.setState({term:e.target.value.toUpperCase()})}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
