# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`
  - retrieves user with pre-calculated stats

### Session

- `POST /api/session`
- `DELETE /api/session`

### Quotes

- `GET /api/quote`
  - custom route to retrieve one random quote

### Scores

- `GET /api/scores`
  - retrieves recent high scores
- `POST /api/scores`
