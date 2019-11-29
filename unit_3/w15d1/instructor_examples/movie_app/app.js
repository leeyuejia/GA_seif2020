class MovieInfo extends React.Component {
  render () {
    return (
      <div>
        <h1>Title: {this.props.movie.Title}</h1>
        <h2>Year: {this.props.movie.Year}</h2>
        <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
        <h3>Genre: {this.props.movie.Genre}</h3>
        <h4>Plot: {this.props.movie.Plot}</h4>
      </div>
    )
  }
}

class OMDBQueryForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      baseURL: 'http://www.omdbapi.com/?',
      apikey: 'apikey=' + '98e3fb1f',
      query: '&t=',
      movieTitle: '',
      searchURL: '',
      movie: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.apikey + this.state.query + this.state.movieTitle
    }, () => {
      fetch(this.state.searchURL)
        .then(response => {
          return response.json()
        }).then(json => this.setState({
          movie: json,
          movieTitle: ''
        }),
        err => console.log(err))
    })
  }
  render () {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label for='movieTitle'>Title</label>
          <input
            id='movieTitle'
            type='text'
            value={this.state.movieTitle}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Find Movie Info'
          />
        </form>
        {(this.state.movie)
          ? <MovieInfo movie={this.state.movie} />
          : ''
        }
      </React.Fragment>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <OMDBQueryForm />
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
