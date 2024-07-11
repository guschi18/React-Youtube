// Classed Based Component
// Classed Based Component immer bei State benutzt!!!

import React, { Component} from 'react';

//Learning:
// Use State
// Arrow Functions 
//Import and Export Statements
class SearchBar extends Component {
constructor(props) {
  super(props);

  //Term kann jedes beliebige Wort sein und in dem String kann jedes beliebige Wort oder Satz stehen
  this.state= {term: ''};
}

render() {
  return (
    <div className="search-bar">
  <input 
    //Value ist aktuell nichts und mit der folgenden Line wird Value geändert, welche Eingabe im Inputfeld gemacht wird
    // und im State zwischengespeichert 
    value={this.state.term}
    onChange={ event => this.onInputChange(event.target.value)} />
  </div>
  );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;