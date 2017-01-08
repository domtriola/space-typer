```js
{
  session: {
    currentUser: {
      id: 1,
      username: "userone",
      stats: {
        avgWPM: 53,
        lastTenWPM: 62,
        BestWPM: 70,
        TotalRaces: 203,
        RacesWon: 43,
        Percentile: 63
      }
    },
    errors: []
  },
  quote: {
    title: "Book Title",
    body: "Some words to type",
    url: "amazon.com/book",
    image_url: "amazon.com/image_url",
    highscores: [
      { userId: 2, wpm: 54, created_at: "2017-01-02 08:12:56 UTC" }
      { userId: 1, wpm: 57, created_at: "2016-12-15 11:04:44 UTC" }
    ]
  },
  recentHighScores: [
    { userId: 2, wpm: 54, created_at: "2017-01-02 08:12:56 UTC" },
    { userId: 1, wpm: 57, created_at: "2016-12-15 11:04:44 UTC" }
  ],
  race: {
    moons: [true, true, true, true, true],
    user: {
      completed: ["Some", "words"],
      current: ["to"],
      remaining: ["type"]
    }
  }
}
```
