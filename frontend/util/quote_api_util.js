export const fetchQuote = () => (
  $.ajax({
    type: "GET",
    url: `/api/quote`
  })
);
