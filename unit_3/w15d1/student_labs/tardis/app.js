const tardis = {
  name: 'Time and Relative Dimension in Space',
  caps: false,
}

class DivOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tardis: this.props.tardis,
      display: false
    }
  }
  render() {
    return (
      <div>
        <h3 className ={this.props.display? 'hide': 'show'} onClick={() => { this.changeIt(this.state.tardis.name) }}>
          {this.state.tardis.name}
        </h3>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tardis: tardis,
      display: true
    }
    this.changeIt = this.changeIt.bind(this)
  }
  changeIt(text) {
    event.preventDefault()
    this.state.display = this.state.display? false : true
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
      <div>
        <DivOne tardis={this.state.tardis} display={this.state.display} handleChange={this.changeIt}/>
        <h3 className ={this.state.display? 'show': 'hide'} onClick={() => { this.changeIt(this.state.tardis.name) }}>{this.state.tardis.name}</h3>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)