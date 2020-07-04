const message = "Hello World 123";

// document.addEventListener("DOMContentLoaded", () => {
//   const div = document.querySelector(".container");
//   div.innerHTML = "<h1>" + message + "</h1>";
// });
function createMarkup() {
    return {__html: 'First &middot; Second'};
  }
  
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

ReactDOM.render(MyComponent(), document.querySelector(".container"));



