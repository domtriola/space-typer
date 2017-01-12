# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u1 = User.create!(username: "a", password: "testing")
u2 = User.create!(username: "b", password: "testing")
u3 = User.create!(username: "c", password: "testing")

q1 = Quote.create!(
  title: "Mostly Harmless",
  body: "Laser light flickered all over him as if he was a packet of biscuits at a super-market check-out.",
  url: "https://www.amazon.com/gp/product/0345418778/ref=as_li_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345418778&linkId=87f73cd3179466e6a2488b81584172f8",
  image_url: "http://ecx.images-amazon.com/images/I/51aRCqbDyVL.jpg")

q2 = Quote.create!(
  title: "Mostly Harmless",
  body: "Everybody has their moment of great opportunity in life. If you happen to miss the one you care about, then everything else in life becomes eerily easy.",
  url: "https://www.amazon.com/gp/product/0345418778/ref=as_li_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345418778&linkId=87f73cd3179466e6a2488b81584172f8",
  image_url: "http://ecx.images-amazon.com/images/I/51aRCqbDyVL.jpg")

q3 = Quote.create!(
  title: "Mostly Harmless",
  body: "One of the extraordinary things about life is the sort of places it's prepared to put up with living.",
  url: "https://www.amazon.com/gp/product/0345418778/ref=as_li_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345418778&linkId=87f73cd3179466e6a2488b81584172f8",
  image_url: "http://ecx.images-amazon.com/images/I/51aRCqbDyVL.jpg")

# User 1 scores
Score.create!(wpm: 30, won: false, user_id: u1.id, quote_id: q1.id)
Score.create!(wpm: 40, won: false, user_id: u1.id, quote_id: q2.id)
Score.create!(wpm: 32, won: false, user_id: u1.id, quote_id: q2.id)
Score.create!(wpm: 45, won: false, user_id: u1.id, quote_id: q3.id)
Score.create!(wpm: 38, won: false, user_id: u1.id, quote_id: q3.id)
Score.create!(wpm: 50, won: false, user_id: u1.id, quote_id: q3.id)
Score.create!(wpm: 52, won: false, user_id: u1.id, quote_id: q1.id)
Score.create!(wpm: 48, won: false, user_id: u1.id, quote_id: q2.id)
Score.create!(wpm: 56, won: true, user_id: u1.id, quote_id: q1.id)
Score.create!(wpm: 50, won: true, user_id: u1.id, quote_id: q3.id)
Score.create!(wpm: 55, won: true, user_id: u1.id, quote_id: q3.id)
Score.create!(wpm: 57, won: true, user_id: u1.id, quote_id: q3.id)
Score.create!(wpm: 60, won: true, user_id: u1.id, quote_id: q3.id)

# User 2 scores
Score.create!(wpm: 37, won: false, user_id: u2.id, quote_id: q3.id)
Score.create!(wpm: 40, won: false, user_id: u2.id, quote_id: q3.id)

# User 3 scores
Score.create!(wpm: 20, won: false, user_id: u3.id, quote_id: q3.id)
Score.create!(wpm: 25, won: false, user_id: u3.id, quote_id: q3.id)
