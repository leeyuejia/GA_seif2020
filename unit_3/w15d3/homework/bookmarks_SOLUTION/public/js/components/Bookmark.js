class Bookmark extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <a href={"http://" + this.props.bookmark.url} target="_blank">
            {this.props.bookmark.title}
          </a>
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.deleteBookmark(
                this.props.bookmark._id,
                this.props.index
              )
            }
          >
            Delete
          </button>
        </td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => this.props.toggleEditing(this.props.bookmark)}
          >
            Change
          </button>
        </td>
      </tr>
    );
  }
}

{
  /* <tr>
  <td>
    <a href={protocol + tempBookmark.url} target="_blank">
      {tempBookmark.title}
    </a>
  </td>
  <td>
    <button
      className="btn btn-danger"
      onClick={() => this.deleteBookmark(tempBookmark._id, index)}
    >
      Delete
    </button>
  </td>
  <td>
    <button
      className="btn btn-warning"
      onClick={() => this.toggleEditing(tempBookmark)}
    >
      Change
    </button>
  </td>
</tr>; */
}
