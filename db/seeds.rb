# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "Mysterious Traveler", password: "password")
u2 = User.create!(username: "Arthur", password: "StavromulaB")
u3 = User.create!(username: "Ford", password: "DontPanic!")
u4 = User.create!(username: "Zaphod", password: "HeartOGold")
u5 = User.create!(username: "Trillian", password: "ImprobableEarthling")
u6 = User.create!(username: "Marvin", password: "0101010")

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

Quote.create!(
  title: "Mostly Harmless",
  body: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
  url: "https://www.amazon.com/gp/product/0345418778/ref=as_li_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345418778&linkId=87f73cd3179466e6a2488b81584172f8",
  image_url: "http://ecx.images-amazon.com/images/I/51aRCqbDyVL.jpg")

Quote.create!(
  title: "Mostly Harmless",
  body: "You see, the quality of any advice anybody has to offer has to be judged against the quality of life they actually lead.",
  url: "https://www.amazon.com/gp/product/0345418778/ref=as_li_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345418778&linkId=87f73cd3179466e6a2488b81584172f8",
  image_url: "http://ecx.images-amazon.com/images/I/51aRCqbDyVL.jpg")

Quote.create!(
  title: "Mostly Harmless",
  body: "When it's fall in New York, the air smells as if someone's been frying goats in it, and if you are keen to breathe, the best plan is to open a window and stick your head in a building.",
  url: "https://www.amazon.com/gp/product/0345418778/ref=as_li_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345418778&linkId=87f73cd3179466e6a2488b81584172f8",
  image_url: "http://ecx.images-amazon.com/images/I/51aRCqbDyVL.jpg")

Quote.create!(
  title: "Mostly Harmless",
  body: "Fall, though, is the worst. Few things are worse than fall in New York. Some of the things that live in the lower intestines of rats would disagree, but most of the things that live in the lower intestines of rats are highly disagreeable anyways, so their opinion can and should be discounted.",
  url: "https://www.amazon.com/gp/product/0345418778/ref=as_li_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345418778&linkId=87f73cd3179466e6a2488b81584172f8",
  image_url: "http://ecx.images-amazon.com/images/I/51aRCqbDyVL.jpg")

Quote.create!(
  title: "The Hitchhiker's Guide to the Galaxy",
  body: "\"Sir,\" I said to the universe, \"I exist.\" \"That,\" said the universe, \"creates no sense of obligation in me whatsoever.\"",
  url: "https://www.amazon.com/gp/product/0345391802/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391802&linkId=18f8a3c1133302976b4ca4c7aa3e8918",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51BxlBTSLyL._SX304_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Hitchhiker's Guide to the Galaxy",
  body: "Perhaps I'm old and tired, but I always think that the chances of finding out what really is going on are so absurdly remote that the only thing to do is to say hang the sense of it and just keep yourself occupied.",
  url: "https://www.amazon.com/gp/product/0345391802/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391802&linkId=18f8a3c1133302976b4ca4c7aa3e8918",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51BxlBTSLyL._SX304_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Hitchhiker's Guide to the Galaxy",
  body: "For a moment, nothing happened. Then, after a second or so, nothing continued to happen.",
  url: "https://www.amazon.com/gp/product/0345391802/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391802&linkId=18f8a3c1133302976b4ca4c7aa3e8918",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51BxlBTSLyL._SX304_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Hitchhiker's Guide to the Galaxy",
  body: "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
  url: "https://www.amazon.com/gp/product/0345391802/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391802&linkId=18f8a3c1133302976b4ca4c7aa3e8918",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51BxlBTSLyL._SX304_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Hitchhiker's Guide to the Galaxy",
  body: "He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.",
  url: "https://www.amazon.com/gp/product/0345391802/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391802&linkId=18f8a3c1133302976b4ca4c7aa3e8918",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51BxlBTSLyL._SX304_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Restaurant at the End of the Universe",
  body: "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
  url: "https://www.amazon.com/gp/product/0345391810/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391810&linkId=83774f66a5a406427e688dafaf8cec52",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/5107Zfo3NBL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Restaurant at the End of the Universe",
  body: "I'm up to here with cool, okay? I am so amazingly cool you could keep a side of meat in me for a month. I am so hip I have difficulty seeing over my pelvis.",
  url: "https://www.amazon.com/gp/product/0345391810/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391810&linkId=83774f66a5a406427e688dafaf8cec52",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/5107Zfo3NBL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Restaurant at the End of the Universe",
  body: "\"How can I tell,\" said the man, \"that the past isn't a fiction designed to account for the discrepancy between my immediate physical sensations and my state of mind?\"",
  url: "https://www.amazon.com/gp/product/0345391810/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391810&linkId=83774f66a5a406427e688dafaf8cec52",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/5107Zfo3NBL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "The Restaurant at the End of the Universe",
  body: "I've never met all these people you speak of. And neither, I suspect, have you. They only exist in words we hear. It is folly to say you know what is happening to other people. Only they know, if they exist. They have their own Universes of their eyes and ears.",
  url: "https://www.amazon.com/gp/product/0345391810/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391810&linkId=83774f66a5a406427e688dafaf8cec52",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/5107Zfo3NBL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "Life, the Universe and Everything",
  body: "\"The Guide says there is an art to flying\", said Ford, \"or rather a knack. The knack lies in learning how to throw yourself at the ground and miss.\"",
  url: "https://www.amazon.com/gp/product/0345391829/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391829&linkId=43c2757397d2be68fa11e2866ce9db56",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51kmFF-4oBL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "Life, the Universe and Everything",
  body: "Arthur felt happy. He was terribly pleased that the day was for once working out so much according to plan. Only twenty minutes ago he had decided he would go mad, and now here he was already chasing a Chesterfield sofa across the fields of prehistoric Earth.",
  url: "https://www.amazon.com/gp/product/0345391829/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391829&linkId=43c2757397d2be68fa11e2866ce9db56",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51kmFF-4oBL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "Life, the Universe and Everything",
  body: "Zaphod did not want to tangle with them and, deciding that just as discretion is the better part of valor, so was cowardice the better part of discretion, he valiantly hid himself in a closet.",
  url: "https://www.amazon.com/gp/product/0345391829/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391829&linkId=43c2757397d2be68fa11e2866ce9db56",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51kmFF-4oBL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "So Long, and Thanks for All the Fish",
  body: "He felt a spasm of excitement because he knew instinctively who it was, or at least knew who it was he wanted it to be, and once you know what it is you want to be true, instinct is a very useful device for enabling you to know that it is.",
  url: "https://www.amazon.com/gp/product/0345391837/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391837&linkId=9704377ee2e138357e488acbb93abcc7",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51AG6BBGKHL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "So Long, and Thanks for All the Fish",
  body: "The storm had now definitely abated, and what thunder there was now grumbled over more distant hills, like a man saying 'And another thing...' twenty minutes after admitting he'd lost the argument.",
  url: "https://www.amazon.com/gp/product/0345391837/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0345391837&linkId=9704377ee2e138357e488acbb93abcc7",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51AG6BBGKHL._SX302_BO1,204,203,200_.jpg")

Quote.create!(
  title: "Ender's Game",
  body: "Perhaps it's impossible to wear an identity without becoming what you pretend to be.",
  url: "https://www.amazon.com/gp/product/0812550706/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0812550706&linkId=a7c4837594e56e24d64d27b3a0b6befe",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/51L10EnuJbL._SX295_BO1,204,203,200_.jpg")

Quote.create!(
  title: "Speaker for the Dead",
  body: "When you really know somebody you can't hate them. Or maybe it's just that you can't really know them until you stop hating them.",
  url: "https://www.amazon.com/gp/product/0812550757/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0812550757&linkId=abcd39fbbf8ba86f15d564e33a6ea2a9",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/416MZVezL3L.jpg")

Quote.create!(
  title: "Speaker for the Dead",
  body: "It's the most charming thing about humans. You are all so sure that the lesser animals are bleeding with envy because they didn't have the good fortune to be born Homo sapiens.",
  url: "https://www.amazon.com/gp/product/0812550757/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0812550757&linkId=abcd39fbbf8ba86f15d564e33a6ea2a9",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/416MZVezL3L.jpg")

Quote.create!(
  title: "Speaker for the Dead",
  body: "\"The humans build their stupid fence to keep us out, but that is nothing. The sky is our fence!\" Human leapt upward--startlingly high, for his legs were powerful. \"Look how the fence throws me back down to the ground!\"",
  url: "https://www.amazon.com/gp/product/0812550757/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0812550757&linkId=abcd39fbbf8ba86f15d564e33a6ea2a9",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/416MZVezL3L.jpg")

Quote.create!(
  title: "Speaker for the Dead",
  body: "And that's as sure as we ever are of anything. We believe it enough to act as though it's true. When we're that sure, we call it knowledge. Facts. We bet our lives on it.",
  url: "https://www.amazon.com/gp/product/0812550757/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=spacetyper-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0812550757&linkId=abcd39fbbf8ba86f15d564e33a6ea2a9",
  image_url: "https://images-na.ssl-images-amazon.com/images/I/416MZVezL3L.jpg")


# Arthur Scores
Score.create!(wpm: 43, won: false, user_id: u2.id, quote_id: q1.id)
Score.create!(wpm: 47, won: false, user_id: u2.id, quote_id: q2.id)

# Ford Scores
Score.create!(wpm: 62, won: false, user_id: u3.id, quote_id: q2.id)
Score.create!(wpm: 83, won: true, user_id: u3.id, quote_id: q3.id)

# Zaphod Scores
Score.create!(wpm: 25, won: true, user_id: u4.id, quote_id: q3.id)
Score.create!(wpm: 35, won: true, user_id: u4.id, quote_id: q1.id)

# Trillian Scores
Score.create!(wpm: 96, won: true, user_id: u5.id, quote_id: q1.id)
Score.create!(wpm: 103, won: true, user_id: u5.id, quote_id: q2.id)

# Marvin Scores
Score.create!(wpm: 96327185, won: true, user_id: u6.id, quote_id: q3.id)
