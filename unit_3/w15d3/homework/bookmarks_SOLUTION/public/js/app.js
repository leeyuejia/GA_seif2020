const baseURL = "http://localhost:3004";
const protocol = "http://";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      _id: "",
      editing: false,
      bookmarks: []
    };
  }

  // Helper function to refresh data
  dataRefresh = () => {
    fetch(baseURL + "/bookmarks")
      .then(response => response.json())
      .then(bookmarks => {
        //Populate default state
        this.setState({
          bookmarks: bookmarks
        });
      });
    console.log("Data Refreshed");
  };

  // Populate Data on First Load
  componentDidMount = () => {
    this.dataRefresh();
  };

  toggleEditing = bookmark => {
    this.setState({
      title: bookmark.title,
      url: bookmark.url,
      _id: bookmark._id,
      editing: true
    });
  };

  updateBookmark = (title, url) => {
    event.preventDefault();
    fetch(baseURL + "/bookmarks/" + this.state._id, {
      body: JSON.stringify({
        title: title,
        url: url
      }),
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(jsonedBookmark => {
        //reset the form
        this.setState({
          title: "",
          url: "",
          _id: "",
          editing: false
        });
        this.dataRefresh();
      });
  };

  deleteBookmark = (id, index) => {
    fetch(baseURL + "/bookmarks/" + id, {
      method: "DELETE"
    }).then(data => {
      this.setState({
        bookmarks: [
          ...this.state.bookmarks.slice(0, index),
          ...this.state.bookmarks.slice(index + 1)
        ]
      });
    });
  };

  addBookmark = (title, url) => {
    fetch(baseURL + "/bookmarks", {
      body: JSON.stringify({
        title: title,
        url: url
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(createdBookmark => {
        this.setState({
          title: "",
          url: "",
          _id: "",
          bookmarks: [createdBookmark, ...this.state.bookmarks]
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <React.Fragment>
        <div class="jumbotron">
          <h1 class="display-4">Bookmark</h1>
          <BookmarkForm
            id={this.state._id}
            title={this.state.title}
            url={this.state.url}
            updateBookmark={this.updateBookmark}
            addBookmark={this.addBookmark}
            editing={this.state.editing}
          />

          <br />

          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.bookmarks.map((tempBookmark, index) => {
                return (
                  <Bookmark
                    bookmark={tempBookmark}
                    index={index}
                    deleteBookmark={this.deleteBookmark}
                    toggleEditing={this.toggleEditing}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
