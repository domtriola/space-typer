# SpaceTyper

[www.spacetyper.com](http://www.spacetyper.com)

![Home Page](./docs/images/home_page.png)

## About

SpaceTyper is a TypeRacer inspired typing app, where the first player to finish typing a provided quote wins. This is a single page app built with Ruby on Rails and React. It uses a Redux state container to keep track of the front-end application state.

## Technologies

I used [Ruby on Rails](http://rubyonrails.org/) to set up a CRUD cycle API that stores users, quotes, and scores in the database and provides access to that data as JSON. Setting up the backend interface as an API that responds with JSON allowed me to use the [React](https://facebook.github.io/react/) library to render all of the data as HTML and setup the front-end navigation and functionality. I used [Redux](http://redux.js.org/) to control the application state. The TypeRacer app has many components that need access to the application state and Redux establishes a single predictable container for that state.

## Features

SpaceTyper uses a hashing function to facilitate a secure authentication process. Read a brief description of the authentication process here:

[Authentication](./docs/features/authentication.md)

SpaceTyper lets users enter typing races against computers of varying difficulties. Read about state and timing challenges I overcame here:

[Racing](./docs/features/racing.md)

SpaceTyper saves scores to a database and retrieves statistics for a user. Read about how I kept the score information storage minimal here:

[User Stats](./docs/features/user-stats.md)

## Development Documentation

[Minimum Viable Product Outline](./docs)

[Wireframes](./docs/wireframes)

[API Endpoints](./docs/api-endpoints.md)

[Component Hierarchy](./docs/component-hierarchy.md)

[Sample State](./docs/sample-state.md)

[Database Schema](./docs/schema.md)

## Next Steps

SpaceTyper is not intended to be a widely used app, so I did not implement public races. A next step for this app would be to use WebSockets and Rails 5's new [Action Cable](http://edgeguides.rubyonrails.org/action_cable_overview.html) to allow users to race against each other.

Also, there is one unfortunate side-effect of having all of the game logic handled on the front-end. Since scores are submitted from the front-end, a clever user could figure out how to submit their own custom score. If this was a production app I could address this by obscuring the score submission format and making the github repo private.
