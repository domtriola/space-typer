import React from 'react';

const QuoteInfo = ({ quote }) => (
  <div className="quote-info col col-1-2">
    <h4>This quote is from</h4>
    <a href={quote.url} target="_blank">{quote.title}</a>
    <a href={quote.url} target="_blank">
      <img src={quote.image_url} />
    </a>
  </div>
);

export default QuoteInfo;
