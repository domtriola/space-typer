# SpaceTyper

[Live Site](http://www.spacetyper.com)

![Home Page](./docs/images/home_page.png)

## About

SpaceTyper is a TypeRacer inspired web application, where the first player to finish typing a provided quote wins. This is a single page app built with Ruby on Rails and React. It uses a Flux architecture and a Redux state container to keep track of the front-end application state.

## Technologies

I used [Ruby on Rails](http://rubyonrails.org/) to set up a [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) [API](https://en.wikipedia.org/wiki/Application_programming_interface) that  performs [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations to manage users, quotes, and scores in a [PostgreSQL](https://www.postgresql.org/) database. Rather than rendering the data through Rails' conventional [ERB](http://ruby-doc.org/stdlib-2.4.0/libdoc/erb/rdoc/ERB.html) templates I formatted the data with [Jbuilder](https://github.com/rails/jbuilder) to render it as [JSON](http://www.json.org/).

Setting up the backend interface as an API that responds with JSON allowed me to use the [React](https://facebook.github.io/react/) library to render all of the data as HTML through React's [Virtual DOM](http://tinyurl.com/zax2wts). I used the [Flux](https://facebook.github.io/flux/) design pattern to manage the data flow with actions, a dispatcher, a store, and views. I used the [Redux](http://redux.js.org/) implementation of Flux, so I could have a single predictable state container as the store. [React Router](https://github.com/ReactTraining/react-router) controls the navigation between components and keeps the url in synch with the display. The background animation is built on a [HTML5 Canvas](http://www.w3schools.com/html/html5_canvas.asp) rendered from a React component.

I used [npm](https://www.npmjs.com/) to manage all of the JavaScript packages, [webpack](https://webpack.github.io/) to bundle all of the modules, and the [Babel](https://babeljs.io/) transpiler to convert [ES6](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015) to [ES5](https://en.wikipedia.org/wiki/ECMAScript#5th_Edition) for better cross-browser compatibility. After the JavaScript is bundled into one file and transpiled to ES5, it is minified by [Uglifier](https://github.com/lautis/uglifier) through the Rails [asset pipeline](http://guides.rubyonrails.org/asset_pipeline.html).

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

[Prototypes](./docs/prototypes)

[API Endpoints](./docs/api-endpoints.md)

[Component Hierarchy](./docs/component-hierarchy.md)

[Sample State](./docs/sample-state.md)

[Database Schema](./docs/schema.md)

## Next Steps

SpaceTyper is not intended to be a widely used app, so I did not implement public races. A next step for this app would be to use WebSockets and Rails 5's new [Action Cable](http://edgeguides.rubyonrails.org/action_cable_overview.html) to allow users to race against each other.

Also, there is one unfortunate side-effect of having all of the game logic handled on the front-end. Since scores are submitted from the front-end, a clever user could figure out how to submit their own custom score. If this was a production app I could address this by obscuring the score submission format and making the github repo private.
