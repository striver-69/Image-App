import React, { Component } from 'react'

export class SearchBar extends Component {

  state={term:''}

  onInputClick(){
    console.log('Input was clicked')
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" onChange={(e)=> this.setState({term:e.target.value})}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
