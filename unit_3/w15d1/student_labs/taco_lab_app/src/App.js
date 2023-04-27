import React, {Fragment} from 'react';
import { MDBBtn } from "mdbreact";
import './App.css';
import Display from './component/Display';

class App extends React.Component {
  constructor(props) {
      super(props)
  
      this.state = {
          url :'http://taco-randomizer.herokuapp.com/random/?full-tack=true'
      }
      this.handleClick = this.handleClick.bind(this)
  }
  async fetchTaco () {
      const response = await fetch(this.state.url)
      const result = await response.json();
      this.setState({result :result})
      console.log(result)
  }
  async handleClick (event) {
      event.preventDefault()
      await this.fetchTaco()
  }
  async componentDidMount () {
    await this.fetchTaco()
  }
  render() {
      return (
          <React.Fragment>
            <MDBBtn color="primary" onClick= {this.handleClick}>Generate Random Taco</MDBBtn>
          {this.state.result? <Display taco={this.state.result}/> : <h1>No Taco</h1>}
          </React.Fragment>
      )
  }
  
}

// ReactDOM.render(
//   <App />,
//   document.querySelector('.container')
// )

export default App;
