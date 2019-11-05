
Title: EJS Partials  <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator: Karolin Rafalski<br>
Competencies: EJS Forms <br>
Prerequisites: EJS , Node, Express, MongoDB<br>

---

## EJS Partials

## Intro
EJS allows you to create reusable elements that can go on multiple pages and will allow you to streamline your ejs page creation and updates.

### EJS Partials

#### Set Up

We'll go back to Mongoose Store.
##### Note: this is a Mongoose Store 'lite' - for full solution check the homework folder with the initial readme.

-  `cd` into the directory `ejs-partials-mognoose-store` that is in the morning exercise folder for today
- `npm install`
- open two more Terminal tabs (one for `mongod` and one for `nodemon`)
- start `mongod` in a new terminal window
- start `nodemon`
- `atom .` in the last tab
- go to `http://localhost:3000/products` in the browser - You should see an empty mongo store!
- organize your windows so you can easily go between the browser, terminal and atom
- go to `http://localhost:3000/products/seed/newproducts/viaseedfile` you should see JSON of the seed data
- go back to `http://localhost:3000/products` (may need to reload page to see data/products)
- now the mongoose store should have products!


**Note**: if you made a mistake, repopulated your db twice or just want to get my mongoose store out of your mongodb got here `http://localhost:3000/products/dropdatabase/cannotundo/areyoursure/reallysure/okthen`

#### First Partial

EJS partials let you create reusable EJS that you only have to edit in one place and it will update across all your pages where the partial is included

- in the views folder: `mkdir partials`
- then in the partials folder: `touch head.ejs`

Right now, only the `index` route has the CSS linked. Let's cut that code out of the head and paste it into our `head.ejs` file (don't forget to save all the files!)
```
    <meta charset="utf-8">
    <title>Mongoose Store</title>
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/skeleton.css">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="icon" href="/assets/$.png">
 ```

- Save and reload the page
- Goodbye CSS!
- Let's add it back into `index.ejs` as a partial

```
  <head>
    <% include ../partials/head.ejs %>
  </head>
```
- don't forget to save and reload the page
- cool! Now let's copy paste that code onto the other three ejs pages: `edit.ejs`, `new.ejs`, and `show.ejs`
- navigate to the index, show, edit and new routes and see that our css has returned Hooray!


#### Header partial
- Right now only our index page has a nav bar, let's follow the above steps and create a partial for the header
- `touch nav.ejs` inside the `partials` folder
- cut (out of `index.ejs`)
```
      <div class="row nav">
        <a href="/products"><h1 id="store" class="six columns">The Mongoose Store</h1></a>
        <span class="three columns">&nbsp;</span>
        <a href="/products/new"><button type="button" name="button" class="new-product three columns">New Product</button></a>
        <span class="one column">&nbsp;</span>
      </div>
```

- paste it into `nav.ejs`
- in your 4 ejs files:
 ```
 <% include ../partials/nav.ejs %>

```
- be sure to save save save all your files

#### Footer partial
- `touch footer.ejs` inside the `partials folder`
- add
```
    <footer>
        all rights reversed
    </footer>
```
- now add the partials to the four ejs files using the same pattern we've used in our previous two partials
- don't forget to save


#### Editing a partial
Whoops! Our footer says `all rights reversed` it should say `all rights reserved`.

Let's update our `footer.ejs` file
- click around the mongoose store, did the footer change on all your pages now?
- If so sweet! If not, let's troubleshoot


<hr>

## Got Some Time Left? Let's work on a Hackerrank Challenge!
<br>
Some companies use HackerRank challenges as part of their interview process. Try one out to practice!

- [Min Max Sum](https://www.hackerrank.com/challenges/mini-max-sum/problem)


HackerRank's code submission process can take a little getting used to

- [How to Solve HackerRank Problems](https://www.hackerrank.com/domains/algorithms/warmup)
