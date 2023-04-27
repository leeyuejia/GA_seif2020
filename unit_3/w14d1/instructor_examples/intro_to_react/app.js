const message = 'Hello World';

// document.addEventListener('DOMContentLoaded', () => {
//     const div = document.querySelector('.container');
//     div.innerHTML = '<h1>' + message + '</h1>';
// });
function createMarkup() {
    return {__html: 'First &middot; Second'};
  }
  
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

ReactDOM.render(MyComponent(), document.querySelector(".container"));



ReactDOM.render(
    <h1> {message} </h1>,
    document.querySelector('.container')
);
