import React from 'react';

const QuoteInfo = ({ quote }) => (
  <div className="quote-info">
    <h3>That was a quote from:</h3>
    <a href={quote.url} target="_blank">{quote.title}</a>
    <a href={quote.url} target="_blank">
      <img src={quote.image_url} />
    </a>
  </div>
);

export default QuoteInfo;
