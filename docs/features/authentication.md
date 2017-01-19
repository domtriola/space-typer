## Authentication

![Login Page](../images/login_page.png)

SpaceTyper uses session tokens and cookies to keep track of logged in users. User passwords are not stored directly in the database. The app converts them into password digests by attaching a salt to the raw password and running that through a hashing function. When a user logs in a session token is stored both in the database and as a cookie in the user's web browser. The front-end part of the application keeps track of the current user by setting the current user's id and username to the state.
