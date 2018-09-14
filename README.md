# Save-My-Marriage

Simple lifestyle app I created to practice CRUD with Rails &amp; React.

# Project Description
The app's purpose is to improve the state of your troubled marriage by offering helpful tips like conversation starters and date night ideas. Users will also be able to save/purchase gifts and find a marriage counselor by fetching from a third party API. Finally, users will be able to add information on recent arguments including how they felt and how they might resolve the issue respectfully in the future. 

# Database Schema
## Tables 
1. users
2. conversation starters 
3. date ideas
4. products (maybe post mvp)
5. fight tracker 
6. cart (maybe post mvp)

# Priority Matrix

| Component | Priority | Estimated Time |
| --------- | -------- | -------------- |
| Database Setup | 1 | 3 hrs |
| Auth | 2 | 4 hrs |
| File Structure | 3 | 1 hrs|
| Page Layout | 4 | 15 hrs |
| Page Navigation / Routes | 5 | 6 hrs |
| Page Design | 6 | 12 hrs|
| App Logic | 7 | 15 hrs|
| Post MVP | 8 | 4 hrs|

| Total | | 60 hrs

# App Components

## Basic Structure
The app will use parallax scrolling for navigation but I will also include a fixed nav bar with links to various pages. Links to login or sign up will be available either at the top near the logo or in the nav menu. When the user arrives they will be presented with an intro design of some sort with minimal text. Clicking anywhere on the screen including the "Explore" button will push the user to the next page. 

## Using the App
Users will have to create an account and login to buy and save products and store argument details. Post MVP will be to allow users to save all content in their profile (conversation tips, date ideas, etc.)  All other content besides ability to save arguments and buy products will be public. 

# Wireframes
![IMG_1913.jpg](https://github.com/berniris/Save-My-Marriage/blob/master/IMG_1913.jpg)
![wireframe2.jpg](https://github.com/berniris/Save-My-Marriage/blob/master/wireframe2.jpg)


# MVP


Users are able to: 

* Create an account
* Login/Logout of account
* View a random date night idea
* View a random conversation starter tip 
* Users are able to perform CRUD via an argument tracker (only if they are logged in)
* Connect to a therapist through a third party API 

# Post MVP
* Profile page with separated sections for saved date ideas, saved argument tracker, and saved gifts
* Cart functionality to purchase gifts like flowers, spa gift cards, etc. 

