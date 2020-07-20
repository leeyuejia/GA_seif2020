import React, { Component } from 'react'
import './App.css';
import Title from './component/Title'
import Footer from './component/Footer'
import ScoreBoard from './component/ScoreBoard'
import Question from './component/Question'

const apiUrl = 'http://jservice.io/api/'

class Category extends Component {
  render() {
    return(
      <React.Fragment>
        <h1> Category</h1>
      </React.Fragment>
    )
  }
}

class DisplayBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      display: false,
      answer : null,
      score : 0,
      category : [],
      count : 10
    }
    this.generateRandomQuestion = this.generateRandomQuestion.bind(this)
    this.setAnswer = this.setAnswer.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
    this.updateScore = this.updateScore.bind(this)
  }
  //fetch api function
  async fetchRandomQuestion() {
    const response = await fetch(apiUrl + 'random'+'?count=10')
    const result = await response.json()
    console.log(result)
    this.setState({ data: result })
  }
  /// On load
  async componentDidMount() {
    await this.fetchRandomQuestion()
  }
  ///Generate Question
  async generateRandomQuestion(event) {
    event.preventDefault()
    await this.setState({
      display : !this.state.display,
      answer: null
    })
    await this.fetchRandomQuestion()
  }
  setAnswer (event) {
    event.preventDefault()
    const value = event.target.value
    this.setState({answer: value})
  }
  setDisplay (event,answer) {
    event.preventDefault()
    this.setState ({display : !this.state.display, rightAns : answer})
  }
  updateScore (event) {
    event.preventDefault()
    const operator = event.target.name
      if(operator === '+') {
        this.setState({score : this.state.score +1})
      }else if (operator === '-' && this.state.score > 0) {
      this.setState({score : this.state.score -1})
      }else if (operator === 'reset') {
        this.setState({score : 0})
      }
  }
  render() {
    return (
      <div>
        <button onClick={this.generateRandomQuestion}>
          Random Question
        </button>
        <div>
          {this.state.data === null ? ''
            :
            this.state.data.map((question, index) => {
              return <Question 
              question={question} 
              index={index} 
              key={index} 
              handleAnswer={this.setAnswer}
              handleDisplay={this.setDisplay}
              />
            })}
        </div>
        <div className='scoreboard'>
          <ScoreBoard 
            score = {this.state.score}
            updateScore = {this.updateScore}
            />
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Title />
      <DisplayBoard />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
