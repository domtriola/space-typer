import React from 'react';

class Race extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moons: [false, false, false, false, false],
      over: false,
      won: false,
      quote: "",
      finished: [],
      current: "",
      remaining: [],
      userInput: ""
    };

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

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return(
      <div className="container">
        <div className="race-track">
        </div>
        <div className="race-text">
          {this.state.finished.join(" ")}{" "}
          {this.state.current}{" "}
          {this.state.remaining.join(" ")}
        </div>
        <div className="race-input">
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.update('userInput')} />
        </div>
      </div>
    );
  }
}

export default Race;
