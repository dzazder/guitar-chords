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
    var filteredChords = CHORDS.filter(function(ch) { return ch.id === chordId; });
    if (filteredChords.length > 0) {
      return filteredChords[0];
    }

    return {};
  }

  handleClick(event) {
    var chordId = parseInt(event.target.attributes["data-id"].value, 10);

    if (chordId) {
      this.setState({chord: this.getChordById(chordId)});
    }
  }
  
  render() {
    var chordsButtons = [];
    for (var i = 0; i < CHORDS.length; i++) {
      var chord = CHORDS[i];
      if (chord.id % 10 === 1) {
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
        <div className="app-container">
          <aside className="app-sidebar">
            <h1>🎸 Guitar Chords</h1>
            <p className="app-description">
              Interactive guitar chord visualizer. Click any chord to see the fingering positions on the fretboard.
            </p>
          </aside>
          <main className="app-main">
            <Guitar chord={this.state.chord} canvasWidth={555} canvasHeight={250} />
            <div className="guitar-keys">{chordsButtons}</div>
          </main>
        </div>
        <footer className="app-footer">
          <p>Built with React • Open Source</p>
          <div className="footer-links">
            <a href="https://github.com/dzazder/guitar-chords" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            <span className="separator">•</span>
            <a href="mailto:bartosz.lampart@gmail.com">Contact Me</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
