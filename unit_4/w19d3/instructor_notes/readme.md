# Double Deployment
## Introduction

You've created your backend app that can dispense CRUD JSON data, and you've also created your frontend app that 
renders HTML components with the `create-react-app`. Everything has been done in the MERN (Mongo, Express.js, 
React.js, Node.js) stack, but how do you deploy?

This lesson is designed to cover **things that may trip you up** during the development of a full stack application. 

## Step 1: Prepare and Deploy Your Backend
#### Ensure that your frontend can connect to your `Express.js` backend
If you're running your frontend on `localhost`, and your backend on `localhost` (but on 
a different port), you're likely to run into a [CORS error](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
To prevent this from happening, you can `npm install` (or `yarn install`) the [`cors` package](https://www.npmjs.com/package/cors).
 This needs to be enabled on your `server.js` like so:
 
 ```javascript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
```


#### `db.js` needs to `.connect()` to the correct backend

You will need 1 script to run for development (e.g. `npm run start:dev`) and 1 script to run for when
your app is connected to `Heroku` (e.g. `npm run start`). The only environment variable that matters when you run either 
script is `MONGO_URL`, the URL with which you will connect to MongoDB.

When you're running your app on local, this is usually something like `mongodb://localhost:27017`. 

But when you're running your app on heroku, it will resemble the format 
`mongodb+srv://<username>:<password>@<cluster-domain>/<dbname>?retryWrites=true&w=majority
`

To simplify the way that your `db.js` remembers which URL to connect to, you can supply the URL via an environment 
variable, like so:

```javascript
// Set MONGO_RUL as either the environment variable MONGO_URL, or if it doesn't exist, supply the localhost version
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017'; 
const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true });
``` 

You will need to supply the environment variables via the Heroku dashboard. When Heroku runs `npm run start`, it 
automatically supplies all the environment variables you have provided. You will probably need to obtain your `MongoDB`
URL in the next step

## Step 2: Prepare MongoDB
#### Create and login to your `MongoDB` cluster
The URL for `MongoDB` cloud is: `https://cloud.mongodb.com`. Once your cluster has been created, there should be a `Connect`
button on your `Clusters` dashboard. Click on that button, then on `Connect your application` to obtain the URL to your
`MongoDB`. 

### Supply this URL with the `password` and `dbname` to your Heroku backend environment variables
Self explanatory! The environment variables are accessible via the dyno > Settings > Config Vars.

## Step 3: Prepare and Deploy Your Frontend
#### Ensure that your built `React.js` files can be served once they are deployed to Heroku
There are many ways to fulfill this requirement, but the easiest way I discovered was by using the `npm` package
[`serve`](https://www.npmjs.com/package/serve). You will simply need to run:

```javascript
npm install serve
```

This will install the `serve` library on your frontend app, to be used. Then, you need to include a script for Heroku
to run when your app is deployed (`npm run start`) in your `package.json`:
```javascript
"scripts": {
    "start": "serve -s ./build"
}
```

This script will simply run the `serve` library on your `build` folder, which is generated once `npm run build` is run (
this command is also automatically run by Heroku).

#### Supply environment variables that you wish to use in your frontend app
Examples of environment variables that could be supplied include API keys, usernames or passwords. In this example, we 
will look at how to supply an API endpoint URL as an environment variable.

When `npm run build` is executed, `React.js` applies the `NODE_ENV` `production`, i.e. it tries to build your frontend 
application for production. `React.js` grabs all environment variables that you have supplied in a `.env.production` 
file that you have created in the root folder. You can also read more about this mechanic 
[here](https://create-react-app.dev/docs/adding-custom-environment-variables/). 

However, do note that all your environment variables need to be prefixed with `REACT_APP_`. Here's the example of the
environment variable that we are going to supply for the todo list API in `.env.production`:

```javascript
REACT_APP_TASKS_ENDPOINT=https://angrylobster-todo-backend.herokuapp.com
```

When you supply this environment variable, it means that once the React app is built, the variable 
`process.env.REACT_APP_TASKS_ENDPOINT` will always return the URL for our backend. This can be used in our 
`tasksService`. 

Additionally, you can also create a `.env.development` file to supply the tasks endpoint for when you're running the 
backend app locally.

#### Double check the run scripts for Heroku
Remember that when you deploy to Heroku, the scripts `build` and `run` are executed in that order. The build script
needs to build your React app (and should be something like `react-scripts build`); your run script should serve the 
build folder and/or files (in our case, via `serve`). 

## Step 4: Manually Test Everything
#### Troubleshoot the problems where necessary
Many things can screw up when you're deploying a full stack application. Run through everything and ensure it works!