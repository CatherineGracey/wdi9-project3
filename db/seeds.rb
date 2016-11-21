# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u = User.new
u.email = "dt@ga.co"
u.password = "pudding"
u.username = "DT"
u.save

t1 = Task.new
t1.title = "Apply to Google"
t1.desc = "Send an application to the Google office in Sydney for a senior web developer role."
t1.due = Time.now + 4.days
t1.complete = true
t1.completed_on = Time.now
t1.user = User.last
t1.save

t2 = Task.new
t2.title = "Go to CSS meetup"
t2.desc = "CSS meetup on 27 November. Lots of free beer and potential contacts."
t2.due = Time.now
t2.complete = false
t2.user = User.last
t2.save

u2 = User.new
u2.email = "harry@ga.co"
u2.password = "trolling"
u2.username = "HMAN"
u2.save

t3 = Task.new
t3.title = "Apply to Redbubble"
t3.desc = "Send an application to the Redbubble for a mid-level ruby developer role."
t3.due = Time.now + 2.days
t3.complete = true
t3.completed_on = Time.now
t3.user = User.last
t3.save

t4 = Task.new
t4.title = "Go to CSS meetup"
t4.desc = "CSS meetup on 27 November. Lots of free pizza and potential investors."
t4.due = Time.now + 3.days
t4.complete = false
t4.user = User.last
t4.save

t5 = Task.new
t5.title = "Apply to Brosa"
t5.desc = "Send an application to the Brosa for a ruby developer role."
t5.due = Time.now - 2.days
t5.complete = false
t5.user = User.last
t5.save
