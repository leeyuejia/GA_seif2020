# Project two scope

# App Title - Gamestergram

This application is a website that brings a community of common interest together to share and learn. It is a focus group community on the subject of games.  

## Application link 

- http://gamerstergram-yj.herokuapp.com/

## Repository
- https://github.com/leeyuejia/gamerstergram

## Table of Contents
- [Introduction](#Introduction)
- [Project Approach](#project-approach)
- [Technology Used](#Technology-used)
- [Main Features](#Main-features)
- [User Journey Map](#User-Journey-Map)
- [Data Structure](#Data-Structure)
- [Methodology](#Methodology)
- [Developer Journey](#Developer-Journey)
- [Future Development](#Future-Development)

# Project scope

## Introduction

The gaming industry in one of the most thriving business in the world. It is reported that since 2006, its has officially became a multi-billion dollar industry with the world as its market. Games are the spearhead in terms of pushing ICT to its next level at a consumer - based market. As games are part of the entertainment for people, it has global market at its feet. 

As digital technology and data transfer speed thrive, more gamers are virtually connected at a global level. The high amount of content of gaming infomation available on youtube is one such proof. With high visit traffics on websites like ign, eurogamers.net and gamespot.com, there is no doubt that there is a commmunity of gamers on the digital world who comes together to share and learn about the games they play. 

On youtube, there are gamers who published their recorded reviews, annoucements, gameplays and walkthroughs which garnered millions of views. These shows that there is alot of attention given to game contents. Based on the comments, there are generally a few reasons why users viewed such videos. 
 - It is entertaining to watch gameplays. In other words, its fun. 
 - User have no chance / time to play that game. Viewing posted walkthroughs can be a substitute to be able to experience the game. 
 - Gamers watched for tips and clues. 
 - For compeititive gamers who are doing research
 - For game reviews. 
 - To find gaming informations. 

 This application seeks to create a "facebook" for gamers where gamers can logged the games they have previously played or are currently playing. They can upload information such as their progress and achievements, sharing of their experiences, reviews and tips in the form of blogs, video and screenshots.

 As it is a personal account, each user can post their information as well as read / comment on other's information. 

 The aim of this application is to bring communities of gamers together to share / inform and be informed. 

 ### In view of this, the application developed aims to 
 1) Target at matured gamers
 2) Have a system of setting personal account and able to post their information and view other people's account. 

## Project Approach

The approach to this project is to set up a basic MVC structure with all CRUD routes created and MONGODB connected for a single user. User's homepage, contentpage, viewpage, editpage and postpage to be created for a single User.

Set up database and Schema validation in a way that when user sign in, it will retrieved database corresponding to its username. 

Secondly, built authentication for a single user to retrieve its own information.

Next, build main application page where all user's basic info and latest post is displayed. Upon entering the post, Users can view all post posted by that users. 

Other users can post comments other other user's viewpages. 

BONUS : To add a 

## Technology used

1) CSS / BOOTSTRAP
2) MVC structure
3) JQuery
5) EJS view engine
6) MongoDB
7) Node.js
8) Express.js
9) Heroku (for deployment of application)
10) Mongo Atlas ( for storing databases on cloud platform)
11) Moment.js ( For handling of dates)
11) External source
    - Multer (For uploading of image to server side)
    - Cloudinary (Media storage )

## Main Features

1) Sign in / Sign out. Authenticating user and start user's session
2) Search bar to filter out by tags, username or title
3) Dashboard that shows User's latest feeds
4) Create and Post feeds which have 
    - Required fields like ( Title, tags, game title, description) 
    - Non required fields are like [ 1 Main image, screenshots of images with description for each image upload (unlimited), a link to outside source]
5) Comment on other user's feed. (BONUS : user can upload images when they generate feed)
6) Delete post. Delete post when a certain game is completed, redundant or obselete
7) Edit post. Editing their post with updated information with regards to that spectific feed. 
8) (BONUS) Add followers to the list that they followed. Their HOMEPAGE would first feed and display users activity whom they have followed first before the rest. 

## User Journey Map

0) Sign up / sign in **LANDINGPAGE**

<img src ="wireframe/indexpage.png" width= "100%">
    - User can choose to sign up or log in. Once authenticated, same page will refresh with authenticated user which is a condition in order for the dashboard page to be displayed. 

0) Signed in **HOMEPAGE**

<img src ="wireframe/indexpage(authenticated).png" width= "100%">
- Here All users feed are displayed. Quick access tools like search and hamburger menu which is shortcut to user's dashboard, homepage, add subject and logout function. 

    DISPLAY
    - Every user's latest post in a flexbox display manner. 
    - A side Nav Hamburger menu button that can access an authenticated User's features.
        - user features include
            1) Home - direct to **HomePage** 
            2) My Dashboard - direct to **user's DashboardPage**
            2) Sign out - sign the users out and redirect to **LandingPage**
            3) Post - directs to **createNewFeedPage**
    - A search bar header to filter post by game title, username and post dates. 

    INTERACTION
    - User can enter into other user's **dashboardpage** and view their posts 
    - User can enter into its own **dashboard** to edit, read, or post. 

1) Main application page. **DASHBOARDPAGE**

<img src ="wireframe/UserDashboardPage.PNG" width= "100%">
- This is User's main dashboard page where current session user can perform full CRUD function to both the feed and the profile. 

    DISPLAY
    - Every user's latest post in a scroll down form
    - User's profile card is display fixed where user can view, change profile picture and direct to edit their respective profile picture.

2) User's single feed page. **ShowFeedPage**

<img src ="wireframe/UserIndividualPage.PNG" width= "100%">
- This is the innermost layer of views. Where individual post is displayed. Main interaction is for user to read and post comment. editing feed is also displayed. 

    DISPLAY
    - Information on One feed displayed. With comments to follow
    - A quick function to edit the post. 
    - Profile card remain at fixed position

    INTERACTION
    - Post or read comments
    - Edit feed. 

3) Create new feed **createFeedPage**

<img src ="wireframe/CreateFeedPage.PNG" width= "100%">
- This is a simple form submission to create new feed or subject. Once feed is created, it will redirect to user's dashboard page

    INTERACTION
    Fields that are required to displayed are 
        - Title
        - A Holding image

4) Editing feed **editFeedPage** 
<img src ="wireframe/EditFeedPage.PNG" width= "100%">
- this is another form submission with all its field having default value displayed in the input area.

    DISPLAY
    - Current information will be displayed as its current respective value
    - To change images, user can only replace with an already online url instead of uploading to cloudinary and extract as a URL (**NEGATIVE POINT**) 
    - A Quick Menu button is still there to quickly navigate to other pages. 
    
5) Editing Profile **Edit Profile Page**
<img src ="wireframe/EditProfilePage.PNG" width= "100%">
- A form submission with current value displayed.
    
    INTERACTION 
    - User can only edit name / nickname / biography. 
    - To change profile picture is a seperate function. (**NEGATIVE POINT**) 



6) User DashBoard Page **when not authenticated**
<img src ="wireframe/NA -DashboardPage.PNG" width= "100%">
- User sees other user's dashboard with a couple of interaction towards that user

    INTERACTION
    - User can click follow which will instantly add to the list of followers <userFollowing> array that currentuser has and currentuser name will be added to the other user list of <followedBy> array
    - User can click again to unfollow the user. 
    - Number of followers and following is displayed in the profile card which is instantly updated. 
    - User can go on to see individual subject that the particular user has posted. 

7) User Single feed page **when not authenticated**
<img src ="wireframe/NA -FeedPage.PNG" width= "100%">

    INTERACTION
    - User can only view and post comment
    - Search bar and User's profile card remain. 


## Data Structure

Datas will be structured into two collections.
- 'user' collections which will store user's information such as name, email, password, date created and date that infomation is updated.
- 'infoBank' collections which will store every user's data which include arrays of feeds, and each feed would have elements such as title, images, descriptions and comments.  


1) User's schema structure as :
    ```
    {
        $jsonSchema: {
            type: 'object',
            required:['username','nickname','password'],
            properties: {
                username: {
                    bsonType: 'string'
                },
                nickname: {
                    bsonType: 'string'
                },
                biography: {
                    bsonType: 'string'
                },
                password: {
                    bsonType: 'string'
                },
                createdAt: {
                    bsonType: 'string'
                },
                updatedAt: {
                    bsonType: 'string'
                },
                lastLoggedInAt : {
                    bsonType: 'string'
                },
                userFollowing : {
                    bsonType : 'Array' // Array of strings of other username
                },
                followedBy : {
                    bsonType : 'Array' // Array of strings of other username
                }
            }
        }
    }
    ```

2) 'infoBank's schema structure as :
    ```
    {
        $jsonSchema: {
            type: 'object',
            required:['username','nickname'],
            properties: {
                username: {
                    bsonType: 'string'
                },
                nickname: {
                    bsonType: 'string'
                },
                loggedInAt: {
                    bsonType: 'date'
                },
                feeds: {
                    bsonType: 'array',
                    uniqueItems: true,
                    items: {
                        bsonType: 'object',
                        properties: {
                            postID: {
                                bsonType: 'ObjectId',
                                description: 'ID of the post'
                            },
                            title: {
                                bsonType: 'string',
                                description: 'the title of the feed'
                            },
                            img: {
                                bsonType: 'string',
                                description: 'the main image url'
                            },
                            description: {
                                bsonType: 'string',
                                description: 'description of your feed'
                            },
                            tags: {
                                bsonType: 'array',
                                uniqueItems:true,
                                items: {
                                    bsonType: 'string',
                                    description: 'tags of your post for search filters'
                                }
                            },
                            postedAt:{
                                bsonType: 'date',
                                description: 'date of new post created'
                            },
                            editedAt: {
                                bsonType: 'date',
                                description : 'date of updated post'
                            },
                            comments: {
                                bsonType: 'array',
                                uniqueItems: true,
                                items: {
                                    bsonType: 'object',
                                    required:['commentBy','commentAt',commentInfo],
                                    properties: {
                                        commentBy : {
                                            bsontype: 'string',
                                            description: 'the person who commented'
                                        },
                                        commentAt : {
                                            bsontype: 'date'
                                            description: 'date posted'
                                        },
                                        commentInfo : {
                                            bsontype: 'string',
                                            description: 'desciption of the post'
                                        },
                                        commentImg: {
                                            bsontype: 'string',
                                            description: 'uploading images related to post'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ```
## Methodology

Methods below will be described by key functions name as header and methods will be described to achieve that function. 

1) Sign Up / Sign In page.
    - on landing page, if req.session.currentUser does not exist, landing page will have two seperate form to display sign in and new user page. Submitting new user with validated form will redirect to landing page for user to sign in. 

    - Sign in page will re render landaing page with rea.session.currentUser now exist. With the condition return true, landing page will display all feeds in ```InfoBank``` database which creates "DashboardPage"

2) Uploading of images (for the 1st time)
    - Using ```multer``` to upload file and grab req.file from the submitted form and using ```cloudinary.upload``` to perform upload image file to cloudinary and serve back the file as a usable url link with will be the image src displayed. 

    - During editing, ```<input type="files"></input>``` could not display default value. On submitting edited information, image uploaded will not be valid which leads to unsuccessful submission. A solution is to seperate the function to edit and change picture away from submmiting other "string" type information. See changing of profile picture as an example. 

3) Following and followed By 
    - With each user having ```userFollowing``` and ```followedBy``` array properties. A submit button would trigger the function to push currentuser to targetteduser array and vice versa. Two repository and mongo action has to be called to perform action.

    - After action, A function is called to retrieve currentUser's data before rendering the dashboard view to update the current status. 
    
    - In ejs, condition is put to facilate which display to use. ```if(currentUser.username === userDashboard.username)``` edit profile will display. ```if(currentUser.userFollowing.includes(userDashboard.username))``` it will display "following" anything else will be displayed as " follow"

4) Search by tag / username / title
    - search input with three submit. tag buttons / username buttons / title buttons.
    - Each submit will have different action which triggers different routes. ```<button type='submit' formaction='/your/route/name'>submit2</button>```

5) To Upload images with icon
    - Using Jquery to click an hidden element activates upload button which triggers the input for user to select files to upload from local machine. 
    - Upon clicking icon, submit button would appear, making it more user-friendly. 

6) Readable date format
    - Translate date object to readable string format using moment.js. 
    - When deployed to Heroku, ```newDate()``` is not localized. **Need to find a way to localized it**

7) BOOTSTRAP
    - Online resource: Bootstrap to style website. 90% of styling is done through Bootstrap. 
 
## Developer Journey

Process

1) Install relevant dependency, connect to server. Setting up middleware
2) create GET/ POST / DELETE / EDIT ROUTE. 
3) writing schema and test data validation before importing schema into mongo
4) Starts to create Ejs view and create new feed
5) create post comment routes
6) Editing routes done. 
7) CRUD fully working for one user
8) create Dashboard page
9) Create User authentication layer
10) Multiple user created and show in dashboard page
11) Uploading media resource using multer and cloudinary
12) Search function, Edit profile card done. 
13) Organize view files into partials. 
14) Started to style. 
15) troubleshoot html input for cloudinary on uploading images.
16) Deploy trial app in heroku and database to MongoAtlas
17) Tightening functions and tying loose ends
18) Deploy 2nd trial in heroku
19 troubleshooting image uploading (with http// vs https// img url)

Accomplishment
- Able to complete a forum-like application with full CRUD function
- Able to upload images from local machine. 
- Able to make the follow / followed function working. 
- Able to use bootstrap comfortably. so far only have one css file to fit all views. Minimum css wode writing. 

Struggles 
- To create flexibity to update or not update an image in a single form submission. 
- If using ```<input type=file>``` then cannot display default value which cannot be edit which give users no choice but to change the image everytime it clicks edit. 
- Struggle to organize code. As codes are compartmentalize and fragmented and more functions are written, Sometimes can get lost in my own code. 

Learning
- Learn to enjoy the process of creating. Learning to celebrate victories no matter how small it may be
- Collaborative spirit. Learn by asking and share through helping. 
- Learn to embrace the feeling of defeatism. 
- **REALLY** need to plan and strategize. Especially data structure. Make sure all data structures, all your views and function can be achieved before jumping right in to coding.

## Future Development (HOPE TO BUT...)
- Use other media source like upload or embed video
- Learning to use and apply ```<canvas>```
- Learning more to deal with date objects. 
- Showing who is currently online. ( handle multiple user.session)
- Writing TDD / Error handling  / Data validation in a more comphensive manner. (time consuming but good practice.)
- Writing more responsive css