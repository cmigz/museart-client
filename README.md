![alt text](https://i.imgur.com/515HBgb.png "MuseArt Logo")
### By Christian Mignacca

## Introduction

Welcome to the repository for the front end client of my capstone project during my time at GA.  I proudly preset to you MuseArt.  A website where people can upload drawings inspired by the songs they love.

In my free time I've always enjoyed drawing what my mind would visualize when listening to a song, hence the idea for MuseArt.  What a wild ride this course, and this project in partuclar was.

Being my final project I wanted to use everything I've used in projects past but really wanted to perfect all the pieces I hadnt when submitting them.  This project in particular I plan to really continue to work.

## Deployed Link

-**Deployed Client:** https://cmigz.github.io/museart-client/

## API Links

- **GitHub Repo:** https://github.com/cmigz/museart-api
- **Herou Deployed:** https://thawing-gorge-11843.herokuapp.com/

## Technologies Used

- **HTML:**
  - The barebones skeleton of my project.  Used to build the framework for the page.
- **SASS:**
  - Utilized SASS keys to make the styling process streamlined.
  - With this project I learned to value and utility of nesting selectors and only styling certain elements that are nested in particular class'.
- **jQuery:**
  - As with my previous projects I utilized quite a bit of jQuery for rednering data from the API as well as handling user interactions with the page.
- **AJAX:**
  - In order to send requests to the API I used AJAX requests.
- **JavaScript:**
  - The core of this entire project, especially since the backend was build using Express.js.
  - Was able to get out of my comfort zone and try some new functions for fun results in functionality
- **RegEx:**
  - A new technology for me when it came to this project.
  - Was able to learn and create Regex expressions to check the validity of image links and links when sending sumbitting forms.

## Planning Process and Approach

While planning this process I went back and forth with quite a few ideas of how to approach this project.  React? Rails and PSQL or Express and Mongo???

When I really factored the time in to complete and my comfort level in the technologies I realized for what I wanted to do my best bet was to use a simple front end with a API built with express.

I knew there was much more being a minium viable product I wanted to do with this site so I decided that was the way to go because it would give me the most flexibility.

I began with building out the back end, and testing all my CRUD functionality prior to starting on the back end.  Once I was happy with those results I started the work on the front end.

With the front end I started with the basics, get log in and all user actions in and working.  From their I built the skeleton of a ui to be able to visualize/navigate the next steps which was building in access and rendering of user's drawings

Once that process was complete I began styling and incorporating error and success handlers for the ui.  The final stretch was cycling between styling and ui interactions for the user.  Had I not broken my laptop halfway through the project work time there is much more Id have done for the presentation.

## Installation Instructions

If you would like to fork/clone this repository simply run `npm install` from within your local directory to install all dependencies.

## User Stories

- As a user I would like to be able to sign up, sign in, sign out, and be able to change my password.
- As a user I would like the home page to be a collection of all the site's drawings from all users.
- As a user I would like to be able to upload my drawings to share with others.
- As a user I would like be able to include details about the song drawings such as song artist and title etc.
- As a user I would like to be able update and delete my drawings.
- As a user I would like to be able to edit only certain aspects of the drawing.
- As a user I would like to be able to report innapropriate images.
- As a user I would like to be able to comment on mine and others drawings.

## Wireframe

![alt text](https://i.imgur.com/KCJt5us.jpg?1 "WireFrame V1")

## Yet to be Solved Issues

- Having My Drawings re-load on submission of a update/delete without having to click the My Drawings Tab
- Some forms positioning
- Displaying a user's name on the drawing
- Allow user to create a username on sign up
- Have comments for users to make on others/own drawings
