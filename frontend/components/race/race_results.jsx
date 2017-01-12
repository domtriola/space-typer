import React from 'react';

class RaceResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>That was a quote from:</p>
        <a href={this.props.quote.url}>{this.props.quote.title}</a>
        <a href={this.props.quote.url}>
          <img className="quote-img" src={this.props.quote.image_url} />
        </a>
      </div>
    );
  }
}

export default RaceResults;
