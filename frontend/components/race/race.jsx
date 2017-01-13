import React from 'react';
import RaceResults from './race_results';
import RaceTrack from './race_track.jsx';
import RaceText from './race_text.jsx';
import RaceInput from './race_input.jsx';

class Race extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moons: [0, 0, 0, 0, 0],
      playerShip: 0,
      compShips: [0, 0],
      over: false,
      won: false,
      quote: {},
      finished: [],
      current: "",
      remaining: [],
      userInput: ""
    };

    this.updateInput = this.updateInput.bind(this);
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
      }
    }
  }

  countDown() {
    for (let i = 0; i < this.state.moons.length; i++) {
      setTimeout(() => {
        this.state.moons[i] = 1;
        this.setState({ moons: this.state.moons });
      }, i * 1000);
    }
  }

  render() {
    return(
      <div className="race container">
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

        {this.state.over ? <RaceResults quote={this.state.quote} /> : ""}
      </div>
    );
  }
}

export default Race;
