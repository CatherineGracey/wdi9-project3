Our app, available online at https://ilikemoney.herokuapp.com/, is designed to help job seekers to manage their job search process.

# GitHub

##Main project repository

Paul: https://github.com/papa-whisky/wdi9-project3

##Member forks

Micah: https://github.com/ghostchips/wdi9-project3

Nic: https://github.com/mallabonikki/wdi9-project3

Catherine: https://github.com/CatherineGracey/wdi9-project3

# Wire Frames and User Stories

Our wire frames and user stories are available on our Trello board at https://trello.com/b/RkmxO6Qc/project-3-board. All of our users will be job seekers, so user stories were written with this assumption in mind.

# Technologies Used

On the server side we used Ruby on Rails. On the client side we used jQuery, Underscore, Backbone, Handlebars and Materialize.

# Approach Taken

As this was a group project we divided up the work amongst ourselves. The team was split into various roles and took on the tasks associated with the role. The roles included repository management on Github, project management using Trello, and Design and User Experience. However throughout the project it was often the case that team members would take on any task that needed attention.

Our development method focused on building the app in incremental working stages. Each step of development built on the other, enlarging the scope in a stable manner. This gave us the reassurance that once we reach our project deadline we would have a working project

# Major Hurdles

The biggest challenges our team faced was the abundance of new libraries that we used. Individually no particular library was too challenging, but learning how to use them as we also learned how to incorporate them with each other was quite complicated and pushed us both as individual programmers and as a team.

A secondary challenge, caused partly by the main challenge, was early in the project when our code base was still small. Our early components all relied on each other, which made it impossible to test code that was still being written by another team member. This problem naturally resolved itself as our codebase became larger, allowing each team member to work on a distinct area of the code without delaying other members.

# Unsolved Problems

* Backbone was not implemented to it's fullest. The app used a combination of backend routes and Backbone views, however this caused problems when collections where modified. Ensuring each view was rendering the correct information required additional work that would otherwise not be needed if the whole page was a series of nested backbone views.
* The ability to keep track of a job status the user created was set up in the backend, however the user is not able to interact with this functionality and have it display on the front end.
* The tasks information lacks detail and should have more content from user input.
* The task list on the sidebar should have included a check box or had in some way have the ability to be marked as completed.
* A task reminder system that would notify you if you missed or have upcoming tasks was not included.
