import React, { Component } from 'react';
import Guitar from './Guitar';
import CHORDS from '../models/chords';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chord: {}
    }

    this.handleClick = this.handleClick.bind(this);
  }

  getChordById(chordId) {
    var filteredChords = CHORDS.filter(function(ch) { return ch.id == chordId; });
    if (filteredChords.length > 0) {
      return filteredChords[0];
    }

    return {};
  }

  handleClick(event) {
    var chordId = event.target.attributes["data-id"].value;

    if (chordId) {
      this.setState({chord: this.getChordById(chordId)});
    }
  }
  
  render() {
    let chordsButtons = CHORDS.map((chord) => 
      <button key={chord.id} data-id={chord.id} onClick={this.handleClick}>{chord.name}</button>);

    return (
      <div>
        <Guitar chord={this.state.chord} />
        <div>{chordsButtons}</div>
      </div>
    );
  }
}

export default App;
