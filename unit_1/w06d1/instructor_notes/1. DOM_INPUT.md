# DOM Input

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

1. Capture text input from the browser
1. Use a form's submit event
1. Build a list from input
1. Try jQuery UI

## Capture text input from the browser

Let's provide a means for the user to provide input, and capture that input with an event handler.

Make an input field and a button in index.html

```javascript
<input type="text" id="input-box" />
<input type="submit" id="submit-btn" />
```

Set an event on the submit

```javascript
$('#submit-btn').on('click', () => {
  console.log('clicked');
});
```

Make it so the handler grabs the value inside the input box (and logs it)

Use jQuery `.val()`

```javascript
$('#input-box').val()
```

```javascript
  $('#submit-btn').on('click', () => {
    const inputValue = $('#input-box').val();
    console.log( inputValue );
  });
```

## Use a form's submit event

With a **form** tag you can hit the enter key to submit the form data.

```javascript
<form>
    <input type="text" placeholder="enter your name" id="input-box"/>
    <input type="submit">SUBMIT</button>
</form>
```

Set the handler on the form element instead of the submit.

```javascript
  $('form').on('submit', () => {
    const inputValue = $('#input-box').val();
    console.log( inputValue );
  });
```

### Prevent default refresh

When you submit the form, the default action is to refresh the page. Let's prevent this default behavior using the freebie `event`.

```javascript
  $('form').on('submit', (event) => {
    const inputValue = $('#input-box').val();
    console.log( inputValue );
    event.preventDefault();
  });
```

### Reset your input field

`.trigger()` can trigger events on elements (click, hover, etc).  The `reset` event clears a text input

```javascript
$(elem).trigger('reset');
```

```javascript
  $('form').on('submit', (event) => {
    const inputValue = $('#input-box').val();
    console.log( inputValue );
    event.preventDefault();
    $(event.currentTarget).trigger('reset');
  });
```

## Build a list from input

Make a ToDo list to store any kind of nonsense

* Make a `list` array where nonsense data will be stored
* Push input into the list
* Run a function **render** that will render items in the list.

```javascript
const list = [];

$('form').on('submit', (event) => {
  const inputValue = $('#input-box').val();

  list.push( inputValue );

  event.preventDefault();
  $(event.currentTarget).trigger('reset');

  render();
});
```

* Make **render** function to iterate over all items in the list

```javascript
const render = () => {
  console.log('list: ', list);
  list.forEach((item) => {

    console.log(item);

  });
}
```

* Let's add a `ul` so that we can add in `li` elements for each todo item

  ```html
  <ul></ul>
  ```

* Make a list item for every item in the array

```javascript
const render = () => {
  $('ul').empty();
  list.forEach((item) => {    
    $('ul').append('<li>' + item + '</li>');
  });
}
```

![](https://i.imgur.com/vjQ2Bu9.png)

* Add an event listener to each item that calls on one single event handler

```javascript
const render = () => {
  $('ul').empty();
  list.forEach((item) => {    
    $('ul').append('<li>' + item + '</li>');
  });
  $('li').on('click', (event)=>{
    $(event.currentTarget).css('text-decoration', 'line-through');
  })
}
```

Make sure you add it in the `render()` function.  If you do it outside of `render()` there won't be any `li`'s to attach the listener to

You'll notice that adding new items removes the line-throughs of the old items.  We can fix this by simply appending the last item instead of rendering the entire list each time:

```javascript
const render = ()=>{
    $('ul').append("<li>" + list[list.length-1] + "</li>");
    $('li').on('click', (event)=>{
        $(event.currentTarget).css('text-decoration', 'line-through');
    })
}
```

## Try jQuery UI

Main site: https://code.jquery.com/ui/

```javascript
$('li').on('click', (event)=>{
  $(event.currentTarget).css('text-decoration', 'line-through');
  $(event.currentTarget).effect('shake');
})
```

[jQuery UI effects](http://api.jqueryui.com/1.10/category/effects/)
