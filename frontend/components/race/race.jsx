import React from 'react';
import Standings from './standings.jsx';
import RaceResults from './race_results';
import RaceTrack from './race_track.jsx';
import RaceText from './race_text.jsx';
import RaceInput from './race_input.jsx';
import { createScore } from '../../util/stats_api_util';

class Race extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moons: [0, 0, 0, 0, 0],
      playerShip: 0,
      compShips: [0, 0],
      compWPMs: [null, null],
      over: false,
      place: "",
      quote: this.props.quote,
      finished: [],
      current: "",
      remaining: [],
      userInput: "",
      status: true,
      startTime: null,
      finishTime: null,
      userWPM: null,
      wpms: [null, null, null]
    };

    this.places = ["First", "Second", "Third"];

    this.updateInput = this.updateInput.bind(this);
    this.raceResults = this.raceResults.bind(this);
    this.submitScore = this.submitScore.bind(this);
    this.startCompShips = this.startCompShips.bind(this);
  }

  componentDidMount() {
    this.props.fetchRandomQuote();
    this.countDown();
  }

  componentWillReceiveProps(newProps) {
    let text = newProps.quote.body.split(" ");
    let firstWord = text.shift();

    this.setState({
      quote: newProps.quote,
      current: firstWord,
      remaining: text
    });
  }

  updateInput(e) {
    e.preventDefault();

    if (this.state.moons.every(moon => moon === 1)) {
      const length = this.state.quote.body.split(" ").length;

      if (!this.state.startTime) {
        this.setState({ startTime: Date.now() });
        this.startCompShips(length);
      }

      let lastChar = this.state.remaining.length > 0 ? " " : "";

      if (e.target.value === `${this.state.current}${lastChar}`) {
        this.state.finished.push(this.state.current);
        this.state.current = this.state.remaining.shift();
        this.state.userInput = "";
        this.state.playerShip = this.state.finished.length / length * 100;

        this.setState({
          finished: this.state.finished,
          current: this.state.current,
          remaining: this.state.remaining,
          playerShip: this.state.playerShip
        });
      } else {
        this.setState({ userInput: e.target.value });

        if (this.state.current.indexOf(e.target.value) !== 0)
          this.setState({ status: false });
        else
          this.setState({ status: true });
      }

      if (this.state.remaining.length === 0 && !this.state.current) {
        this.setState({ over: true });
        this.setState({ finishTime: Date.now() }, () => {
          this.submitScore(this.state.finishTime - this.state.startTime);
        });
      }
    }
  }

  countDown() {
    for (let i = 0; i < this.state.moons.length; i++) {
      setTimeout(() => {
        this.state.moons[i] = 1;
        this.setState({ moons: this.state.moons });
      }, (i + 1) * 850);
    }
  }

  startCompShips(quoteLength) {
    const shipsWPM = [
      Math.floor(Math.random() * 55) + 15,
      Math.floor(Math.random() * 55) + 15
    ];
    this.setState({ compWPMs: shipsWPM });

    for (let i = 0; i < shipsWPM.length; i++) {
      if (Math.floor(Math.random() * 3) === 2)
        shipsWPM[i] += Math.floor(Math.random() * 60);
    }

    for (let i = 0; i < shipsWPM.length; i++) {
      let totalTime = 1 / (shipsWPM[i] / quoteLength) * 60000;
      let interval = totalTime / quoteLength;
      let dist = interval / totalTime * 100;

      for (let j = 0; j < quoteLength; j++) {
        setTimeout(() => {
          this.state.compShips[i] += dist;
          this.setState({ compShips: this.state.compShips });
        }, j * interval);
      }
    }
  }

  submitScore(time) {
    const min = time / 60000;
    const wordCount = this.state.finished.length;
    this.setState({ userWPM: Math.floor(wordCount / min) }, () => {
      let sortedWPMs = [this.state.userWPM, ...this.state.compWPMs]
        .sort((x, y) => {
          if (x < y) return 1;
          else if (x > y) return -1;
          else return 0;
        });

      this.setState({ wpms: sortedWPMs }, () => {
        createScore({
          score: {
            wpm: wordCount / min,
            won: this.state.wpms.indexOf(this.state.userWPM) === 0
              ? true : false,
            user_id: this.props.session.currentUser.id,
            quote_id: this.props.quote.id
          }
        });
      });
    });
  }

  raceResults() {
    return (
      <RaceResults
        quote={this.state.quote}
        userScore={{
          place: this.places[
            this.state.wpms.indexOf(this.state.userWPM)],
          wpm: this.state.userWPM }}
        username={this.props.session.currentUser.username}/>
    );
  }

  standings() {
    return (
      <Standings
        userWPM={this.state.userWPM}
        compWPMs={this.state.compWPMs}
        wpms={this.state.wpms}
        places={this.places} />
    );
  }

  render() {
    return(
      <div>
        <div className="race">
          {this.state.over ? this.standings() : null}
          <RaceTrack
            moons={this.state.moons}
            compShips={this.state.compShips}
            playerShip={this.state.playerShip} />
          <RaceText
            finished={this.state.finished}
            current={this.state.current}
            remaining={this.state.remaining}
            status={this.state.status} />
          <RaceInput
            userInput={this.state.userInput}
            updateInput={this.updateInput}
            status={this.state.status} />
        </div>

        {this.state.over ? this.raceResults() : null}
      </div>
    );
  }
}

export default Race;
