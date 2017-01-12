import React from 'react';
import RaceResults from './race_results';

class Race extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moons: [false, false, false, false, false],
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

  render() {
    return(
      <div className="race container">
        <div className="race-track">
        </div>
        <div className="race-text">
          {this.state.finished.join(" ")}{" "}
          <span className="current-word">
            {this.state.current}
          </span>{" "}
          {this.state.remaining.join(" ")}
        </div>
        <div className="race-input">
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.updateInput} />
        </div>

        {this.state.over ? <RaceResults quote={this.state.quote} /> : ""}
      </div>
    );
  }
}

export default Race;
