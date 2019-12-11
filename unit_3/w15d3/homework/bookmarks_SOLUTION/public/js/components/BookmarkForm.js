class BookmarkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      url: this.props.url
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.setState({ title: this.props.title });
    }

    if (this.props.url !== prevProps.url) {
      this.setState({ url: this.props.url });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit running");
    this.props.addBookmark(this.state.title, this.state.url);
    this.setState({
      title: "",
      url: ""
    });
  };

  render() {
    return (
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

        {this.props.editing === false ? (
          <input
            type="submit"
            className="btn btn-success"
            value="Create New Bookmark"
          />
        ) : (
          <button
            onClick={() =>
              this.props.updateBookmark(this.state.title, this.state.url)
            }
            type="submit"
            className="btn btn-info"
            value="Change Bookmark"
          >
            Edit Bookmark
          </button>
        )}
      </form>
    );
  }
}
