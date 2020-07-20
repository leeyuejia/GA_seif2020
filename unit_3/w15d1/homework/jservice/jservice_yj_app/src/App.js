import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

const apiUrl = 'http://jservice.io/api/random'

class Title extends Component {
  render() {
    return (
      <h1>
        Welcome to jservice
      </h1>
    )
  }
}
class Footer extends Component {
  render() {
    return (
      <footer>
        Question provided by jservice
      </footer>
    )
  }
}
class Question extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    event.preventDefault()
    this.props.handleAnswer(event)
  }
  handleSubmit (event) {
    event.preventDefault()
    const answer = this.props.question.answer
    console.log(answer)
    this.props.handleDisplay(event,answer)
  }
  render() {
    const data = this.props.question
    return (
      <React.Fragment>
        <h2>Category : {data.category.title}</h2>
        <h2 id={this.props.index}>Question: {data.question}</h2>
        <label htmlFor='answer'>Answer :</label>
        <input type='text' id='answer' onChange={this.handleChange}></input>
        <button type='submit' onClick={this.handleSubmit}>Submit</button>
      </React.Fragment>
    )
  }
}
class DisplayResult extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <div className='result'>
            <div className='submitAnswer'>
              <h3>{this.props.answer}</h3>
            </div>
            <div className='answer'>
              <h3>{this.props.rightAns}</h3>
            </div>
          </div> 
      </React.Fragment>
    )
  }
}
class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.handleScore = this.handleScore.bind(this)
  }
  handleScore (event) {
    event.preventDefault()
    this.props.updateScore(event)
  }

  render() {
    return (
      <React.Fragment>
        <h1>Score</h1>
        <h2 >{this.props.score}</h2>
        <div>
          <button onClick={this.handleScore} name='+'>+</button>
          <button onClick={this.handleScore} name='-'>-</button>
        </div>
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
      score : 0
    }
    this.generateQuestion = this.generateQuestion.bind(this)
    this.setAnswer = this.setAnswer.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
    this.updateScore = this.updateScore.bind(this)
  }
  //fetch api function
  async fetchQuestion() {
    const response = await fetch(apiUrl)
    const result = await response.json()
    console.log(result)
    this.setState({ data: result })
  }
  /// On load
  async componentDidMount() {
    await this.fetchQuestion()
  }
  ///Generate Question
  async generateQuestion(event) {
    event.preventDefault()
    await this.setState({
      display : !this.state.display,
      answer: null
    })
    await this.fetchQuestion()
  }
  setAnswer (event) {
    event.preventDefault()
    const id = event.target.id
    const value = event.target.value
    console.log(id +  " and " + value)
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
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.generateQuestion}>
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
              handleDisplay={this.setDisplay} />
            })}
        </div>
        <div>
        {this.state.display ? 
          <DisplayResult 
            answer = {this.state.answer}
            rightAns = {this.state.rightAns} />
          : ''
        }
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
      <Footer />
    </div>
  );
}

export default App;
