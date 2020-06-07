Keep building the app we built in class.

Try to add messages in your app in the secret party page.

Here is some example code as a hint


```javascript
app.post('/articles', (req, res)=>{
    req.body.author = req.session.currentUser.username;
    Article.create(req.body, (err, createdArticle)=>{
        res.redirect('/articles');
    });
});
```

Try to figure it out. Reason through any questions you might have along the way (which file should I code in? What is the URL?) 
