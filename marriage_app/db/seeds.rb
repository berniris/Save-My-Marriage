# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dateideas = Dateidea.create([{ body: 'Making a picnic' }, { body: 'Going to a winery'}, { body: 'Going horseback riding'}])
users = User.create({email: 'bc@gmail.com', password:'gustave'})
