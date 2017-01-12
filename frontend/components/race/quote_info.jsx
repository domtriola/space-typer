import React from 'react';

const QuoteInfo = ({ quote }) => (
  <div className="quote-info">
    <p>That was a quote from:</p>
    <a href={quote.url}>{quote.title}</a>
    <a href={quote.url}>
      <img src={quote.image_url} />
    </a>
  </div>
);

export default QuoteInfo;
