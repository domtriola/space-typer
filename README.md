# SpaceTyper

[Live Site](http://www.spacetyper.com)

[Documentation](./docs)

![Race Page](./docs/images/race_page.png)

## About

SpaceTyper is a TypeRacer inspired typing app, where the first player to finish typing a provided quote wins.

This is a single page app built with Ruby on Rails and React. It uses a Redux state container to keep track of the front-end application state.

## Features

### Authentication

SpaceTyper uses session tokens and cookies to keep track of logged in users. User passwords are not stored directly in the database. The app converts them into password digests by attaching a salt to the raw password and running that through a hashing function. When a user logs in a session token is stored both in the database and as a cookie in the user's web browser. The front-end part of the application keeps track of the current user by setting the current user's id and username to the state.

When a user first visits the site they are served a page with a current user if one exists and a root element that contains all of the front-end rendering:

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

Users enter typing races and compete against computer players with random words per minute speeds. When the race is complete the user's score is posted to the database.

The race is contained within a component that has access to the Redux store and keeps track of its own race-related state. The Race component is also responsible for setting up all of the time-related events.

### User Stats

Each time a user completes a race their score for the quote is saved to the database. The score only contains a words per minute value, whether or not they won, and foreign keys to the user and the quote.

All of the statistics are calculated on the backend with SQL and/or Ruby and ActiveRecord before being sent to the front-end.
