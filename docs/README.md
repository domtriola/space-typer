# SpaceTyper

[Live Site][live]

[Trello Board](https://trello.com/b/xpCc28ln/spacetyper)

## Minimum Viable Product

SpaceTyper is a Typeracer inspired typing app. SpaceTyper is a typing game where the first player to finish typing a provided quote wins. The minimum viable product is outlined below:

- [ ] [Hosting on Heroku][live]
- [ ] [Production README](../README.md)
- [ ] User Authentication: Account creation, user sessions, and demo login
- [ ] Users race against randomly generated computer racers with varying words per minute speeds
- [ ] Users have a profile page with stats
- [ ] Home page leaderboard with most recent high-scores
- [ ] All-time leaderboards for each quote

## Design Docs
* [View Wireframes](./wireframes)
* [React Components](./component-hierarchy.md)
* [API endpoints](./api-endpoints.md)
* [DB schema](./schema.md)
* [Sample State](./sample-state.md)

## Implementation Timeline

### Phase 1: Rails Setup and User Authentication (2 days)

* Functioning Rails app with front-end user authentication
  - Sign Up
  - Log In
  - Log Out

### Phase 2: Backend Setup (1 day)

* Functioning Controllers, Models and basic seeds
  - Quotes
  - Scores

### Phase 3: Home Page and Navigation (2 days)

* Nav
  - Logo
  - User Menu
* Play Button
* Home Page Leaderboard

### Phase 4: Race Page (2 days)

* Functioning type race
  - Race Track
  - Race Input

### Phase 5: Race Page Results (1 day)

* All results display after race
  - Quote Info
  - User Stats
  - Quote Leaderboard

### Phase 6: User Profile Page (1 day)

* User profile displays all user stats

### Bonus Features (TBD)
- [ ] Users can re-race against their ghost after they complete a race.
- [ ] Users can view all races they’ve completed and re-race them.
- [ ] Alternate modes: code snippets instead of normal copy, sudden death mode (1 mistake and you’re out of the race), content generated for specified character practice, etc.
- [ ] Users can friend other users and send them messages.
- [ ] Allow users to challenge each other to races, and/or join a public race.


[live]: http://www.herokuapp.com
