export const fetchUserStats = id => (
  $.ajax({
    type: "GET",
    url: `/api/users/${id}`
  })
);

export const fetchRecentHighScores = () => (
  $.ajax({
    type: "GET",
    url: '/api/scores'
  })
);

export const createScore = score => (
  $.ajax({
    type: "POST",
    url: '/api/scores',
    data: score
  })
);
