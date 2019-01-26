import React, { Component } from 'react';
import '../styles/app.scss';
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
    var chordsButtons = [];
    for (var i = 0; i < CHORDS.length; i++) {
      var chord = CHORDS[i];
      if (chord.id % 10 == 1) {
        chordsButtons.push(<div key={-i}></div>);
      }

      var className = "btn-chord ";
      className += chord.id % 10 < 3 ? " basic " : " additional ";
      chordsButtons.push(
        <button key={chord.id} data-id={chord.id} onClick={this.handleClick} className={className}>{chord.name}</button>
      );
    }

    return (
      <div className="app-root">
        <Guitar chord={this.state.chord} canvasWidth={555} canvasHeight={250} />
        <div class="guitar-keys">{chordsButtons}</div>
      </div>
    );
  }
}

export default App;
