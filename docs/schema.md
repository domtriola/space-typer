# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## scores
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
wpm         | integer   | not null
won         | boolean   | not null
user_id     | integer   | not null, foreign key (references users), indexed
quote_id    | integer   | not null, foreign key (references quotes), indexed

## quotes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null, indexed, unique
url         | string    | not null
image_url   | string    | not null
