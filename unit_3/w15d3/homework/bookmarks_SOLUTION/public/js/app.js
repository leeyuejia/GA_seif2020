const baseURL = "http://localhost:3004";
const protocol = "http://";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      _id: "",
      editing: "",
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
    this.state.editing = !this.state.editing;
    console.log(this.state.editing);
    this.setState({
      title: bookmark.title,
      url: bookmark.url,
      _id: bookmark._id
    });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit running");
    fetch(baseURL + "/bookmarks", {
      body: JSON.stringify({
        title: this.state.title,
        url: this.state.url
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdBookmarks => {
        return createdBookmarks.json();
      })
      .then(jsonedToDo => {
        this.setState({
          title: "",
          url: "",
          bookmarks: [jsonedToDo, ...this.state.bookmarks]
        });
        console.log(jsonedToDo);
      })
      .catch(error => console.log(error));
  };

  updateBookmark = event => {
    event.preventDefault();
    fetch(baseURL + "/bookmarks/" + this.state._id, {
      body: JSON.stringify({
        title: this.state.title,
        url: this.state.url
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
          _id: ""
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

  render() {
    return (
      <React.Fragment>
        <div class="jumbotron">
          <h1 class="display-4">Bookmark</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">title</label>
              <input
                type="text"
                className="form-control"
                value={this.state.title}
                onChange={this.handleChange}
                id="title"
              />
              <br />
            </div>

            <div className="form-group">
              <label htmlFor="url">url</label>
              <input
                type="text"
                className="form-control"
                value={this.state.url}
                onChange={this.handleChange}
                id="url"
              />
              <br />
            </div>

            {this.state._id === "" ? (
              <input
                type="submit"
                className="btn btn-success"
                value="Create New Bookmark"
              />
            ) : (
              <button
                onClick={this.updateBookmark}
                type="submit"
                className="btn btn-info"
                value="Change Bookmark"
              >
                Edit Bookmark
              </button>
            )}
          </form>
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
          {/* { this.state.editing ? 
                        <form>
                            <label htmlFor="title_edit">title</label>
                            <input type="text" value={this.state.title} onChange={this.state.handleChange} id="title_edit" />

                            <label htmlFor="url_edit">url</label>
                            <input type="text" value={this.state.url} onChange={this.state.handleChange} id="url_edit" />

                            <input type="submit" />
                        </form>
                    : " "} */}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
