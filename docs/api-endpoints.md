# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Quotes

- `GET /api/quote`
  - custom route to retrieve one random quote

### Scores

- `GET /api/scores`
  - accepts query param for `user_id` or `quote_id`
- `POST /api/scores`
