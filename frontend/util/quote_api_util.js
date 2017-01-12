export const fetchRandomQuote = () => (
  $.ajax({
    type: "GET",
    url: `/api/quote`
  })
);
