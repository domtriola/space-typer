# SpaceTyper

[Live Site](http://www.spacetyper.com)

[Documentation](./docs)

![Home Page](./docs/images/home_page.png)

## About

SpaceTyper is a TypeRacer inspired typing app, where the first player to finish typing a provided quote wins.

This is a single page app built with Ruby on Rails and React. It uses a Redux state container to keep track of the front-end application state.

## Features

### Authentication

![Login Page](./docs/images/login_page.png)

SpaceTyper uses session tokens and cookies to keep track of logged in users. User passwords are not stored directly in the database. The app converts them into password digests by attaching a salt to the raw password and running that through a hashing function. When a user logs in a session token is stored both in the database and as a cookie in the user's web browser. The front-end part of the application keeps track of the current user by setting the current user's id and username to the state.

When a user first visits the site they are served a page with a current user (if they are logged in) and a root element that serves as the container for all of the front-end rendering:

```html
<% if logged_in? %>
  <script type="text/javascript">
    window.currentUser = <%= render(
      "api/users/user.json.jbuilder",
      user: @user
    ).html_safe %>;
  </script>
<% end %>

<div id="root"></div>
```

### Racing

![Race Page](./docs/images/race_page.png)

Users enter typing races and compete against computer players with random words per minute speeds. When the race is complete the user's score is posted to the database.

The race is contained within a component that has access to the Redux store and keeps track of its own race-related state. The Race component is also responsible for setting up and performing most of the time and sequence dependent events.

Because a significant amount of the SpaceTyper app relies on asynchronous behavior, there were a couple of challenges that I faced when I tried to set up the correct order of events and proper component rendering.

The first challenge was ensuring that components didn't have to wait for asynchronous calls to render, but also did update when the asynchronous calls completed. I accomplished this by using default states and lifecycle methods.

The second challenge was making state changes at the right time when the changes depended on other state changes. The setState function behaves asynchronously, but I found that I could pass callback functions to it, and those functions would execute after the state change was performed.

The submitScore function demonstrates callback chaining in setState:
```javascript
submitScore(time) {
  // Calculate time in minutes and word count for the quote
  const min = time / 60000;
  const wordCount = this.state.finished.length;

  // Store the user's WPM speed in the component state
  this.setState({ userWPM: Math.floor(wordCount / min) }, () => {
    // then: sort the user's WPM with the computer wpm scores
    let sortedWPMs = [this.state.userWPM, ...this.state.compWPMs]
      .sort((x, y) => {
        if (x < y) return 1;
        else if (x > y) return -1;
        else return 0;
      });

    // Store the sorted WPM scores in the component state
    this.setState({ wpms: sortedWPMs }, () => {
      // then: post the user's score to the database
      createScore({
        score: {
          wpm: wordCount / min,
          won: this.state.wpms.indexOf(this.state.userWPM) === 0
            ? true : false,
          user_id: this.props.session.currentUser.id,
          quote_id: this.props.quote.id
        }
      });
    });
  });
}
```

It is necessary to save the user's words per minute score and the sorted words per minute scores in the state, because child components depend on them to render the correct values. The user score to be submitted depends on both the user's WPM speed and the the user's finish place, and the user's finish place depends on the user's WPM speed. It is therefore convenient to setup a chain of events in which values are calculated and saved before moving on to the next calculation.

### User Stats

![Race Page](./docs/images/user_profile.png)

Each time a user completes a race their score for the quote is saved to the database. The score only contains a words per minute value, whether or not they won, and foreign keys to the user and the quote.

All of the statistics are calculated on the backend with SQL and/or Ruby and ActiveRecord before being sent to the front-end.
