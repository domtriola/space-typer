import React from 'react';
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
      over: false,
      won: false,
      quote: this.props.quote,
      finished: [],
      current: "",
      remaining: [],
      userInput: "",
      startTime: null,
      finishTime: null,
      userWPM: null
    };

    this.updateInput = this.updateInput.bind(this);
    this.raceResults = this.raceResults.bind(this);
    this.submitScore = this.submitScore.bind(this);
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
    if (this.state.moons.every(moon => moon === 1)) {
      if (!this.state.startTime)
        this.setState({ startTime: Date.now() });

      let lastChar = this.state.remaining.length > 0 ? " " : "";

      e.preventDefault();
      if (e.target.value === `${this.state.current}${lastChar}`) {
        this.state.finished.push(this.state.current);
        this.state.current = this.state.remaining.shift();
        this.state.userInput = "";

        this.setState({
          finished: this.state.finished,
          current: this.state.current,
          remaining: this.state.remaining
        });
      } else {
        this.setState({ userInput: e.target.value });
      }

      if (this.state.remaining.length === 0 && !this.state.current) {
        this.setState({ over: true });
        this.setState({ finishTime: Date.now() }, () => {
          this.submitScore(this.state.finishTime - this.state.startTime)
            .then(console.log);
        });
      }
    }
  }

  countDown() {
    for (let i = 0; i < this.state.moons.length; i++) {
      setTimeout(() => {
        this.state.moons[i] = 1;
        this.setState({ moons: this.state.moons });
      }, (i + 1) * 800);
    }
  }

  submitScore(time) {
    const min = time / 60000;
    const wordCount = this.state.finished.length;
    this.setState({ userWPM: Math.floor(wordCount / min) });
    return createScore({
      score: {
        wpm: wordCount / min,
        won: this.state.won,
        user_id: this.props.session.currentUser.id,
        quote_id: this.props.quote.id
      }
    });
  }

  raceResults() {
    return (
      <RaceResults
        quote={this.state.quote}
        userScore={{
          won: '',
          wpm: this.state.userWPM }} />
    );
  }

  render() {
    return(
      <div>
        <div className="race">
          <RaceTrack
            moons={this.state.moons}
            compShips={this.state.compShips}
            playerShip={this.state.playerShip} />
          <RaceText
            finished={this.state.finished}
            current={this.state.current}
            remaining={this.state.remaining} />
          <RaceInput
            userInput={this.state.userInput}
            updateInput={this.updateInput} />
        </div>
        <div className="container">
          {this.raceResults()}
          {this.state.over ? this.raceResults() : null}
        </div>
      </div>
    );
  }
}

export default Race;
