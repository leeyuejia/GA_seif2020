/* global ReactDOM */
/* global React */

class Visitors extends React.Component {
  render () {
    return (
      <div className='visitors'>
        <h3>Visitors</h3>
        <h4>821</h4>
        <div>
          placeholder for some image
        </div>
      </div>
    )
  }
}
class Sentiment extends React.Component {
  render () {
    return (
      <div className='sentiment'>
        <h3>Sentiment Analysis</h3>
        <ul>
          <li>960</li>
          <li>122</li>
          <li>321</li>
        </ul>
      </div>
    )
  }
}


class Rating extends React.Component {
  render () {
    return (
      <div className='rating'>
        <h3>Average Rating</h3>
        <h4>4.6</h4>
      </div>
    )
  }
}

class Reviews extends React.Component {
  render () {
    return (
      <div className='reviews'>
        <h3>Reviews</h3>
        <h4>1,281</h4>
      </div>
    )
  }
}

class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar'>
        <ul>
          <li>Dashboard</li>
          <li>Widget</li>
          <li>Reviews</li>
          <li>Customers</li>
          <li>Online Analysis</li>
          <li>Settings</li>
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Sidebar />
        <Reviews />
        <Rating />
        <Sentiment />
        <Visitors />
      </div>)
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
