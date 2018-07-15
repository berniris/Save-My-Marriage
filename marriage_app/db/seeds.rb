# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dateideas = Dateidea.create([{ body: 'Making a picnic' }, { body: 'Going to a winery'}, { body: 'Going horseback riding'}, { body: 'Go to a Jazz club'}, { body: 'Have a game night'}, { body: 'Go strawberry picking'}, { body: 'Go on a museum date'}, { body: 'Visit a pumpkin patch'}, { body: 'Go horseback riding'}, { body: 'Take a pottery class'}, { body: 'Take a painting class'}, { body: 'Go to the opera'}, { body: 'Go to the ballet'}, { body: 'Take a cooking class'}, { body: 'Go to a bed & breakfast'}, { body: 'Go see a play'}, { body: 'Go to a cheese tasting'}, { body: 'Go to karaokee'}, { body: 'Go to antiquing'}, { body: 'Go to the zoo'}, { body: 'Visit a botanical garden'}, { body: 'Go bowling'}, { body: 'Play laser tag'}, { body: 'Go ice skating or to the roller rink'}, { body: 'Go paintballing'}, { body: 'Take a flamenco dancing class'}, { body: 'Go on a double date'}, { body: 'Book a dinner cruise'}, { body: 'Go skydiving'}, { body: 'Go rockclimbing'}, { body: 'See a comedy show'}, { body: 'Go to an amusement park'}, { body: 'Go kayaking'}, { body: 'Go skeetshooting'},])
users = User.create({email: 'bc@gmail.com', password:'gustave'})
