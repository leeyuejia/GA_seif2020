class App extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            result : 'result',
            url :'http://taco-randomizer.herokuapp.com/random/?full-tack=true'
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (event) {
        event.preventDefault()
        this.setState({}, async() => {
            try {
                const response = await fetch(this.state.url)
                const result = await response.json();
                console.log(result)
                this.setState({result :result})
            } catch (err) {
                console.log(err)
            }
        })
    }
    render() {
        return (
            <React.Fragment>
            <button onClick ={this.handleClick}>
                React Taco
            </button>
            </React.Fragment>
        )
    }
    
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  )