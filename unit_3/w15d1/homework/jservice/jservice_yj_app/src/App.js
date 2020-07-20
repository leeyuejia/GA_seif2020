import React, { Component } from 'react'
import './App.css';
import Title from './component/Title'
import Footer from './component/Footer'
import ScoreBoard from './component/ScoreBoard'
import Question from './component/Question'

const apiUrl = 'http://jservice.io/api/'
const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

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
      score : 0,
      category : null,
      count : 10
    }
    this.generateQuestion = this.generateQuestion.bind(this)
    this.updateScore = this.updateScore.bind(this)
    this.fetchCategoryQuestion = this.fetchCategoryQuestion.bind(this)
    this.fetchRandomQuestion = this.fetchRandomQuestion.bind(this)
  }
  //fetch api function
  async fetchRandomQuestion(event) {
    const query = event.target.value
    console.log(query)
    switch(query) {
      case 'one' :
        await this.setState({
          query :'random',
          category : null})
        break;
      case 'ten' :
        await this.setState({
          query :'random?count=10',
          category : null
        })
    }
      const response = await fetch(apiUrl + this.state.query)
      const result = await response.json()
      console.log(result)
      this.setState({ data: result })
  }

  async fetchCategoryQuestion(event) {
    const query = event.target.value
    const name = event.target.name
    console.log(name)
    const response = await fetch(apiUrl + 'category?id=' + query)
    const result = await response.json()
    const tenResult = []
      for(let i=0 ; i < 10; i++) {
        tenResult.push(result.clues[randomNumber(result.clues.length)])
      }
    this.setState({ 
        data: tenResult,
        query : 'category?id=' + query,
        category : name
      })
  }

  ///Generate Question
  async generateQuestion(event) {
    event.preventDefault()
    switch (event.target.value) {
      case '42' :
        await this.fetchCategoryQuestion(event)
        break;
      case '136' :
        await this.fetchCategoryQuestion(event)
        break;
      default :
        await this.fetchRandomQuestion(event)
    }
  }
  updateScore (event) {
    event.preventDefault()
    const operator = event.target.name
      if(operator === '+') {
        this.setState({score : this.state.score + 1})
      }else if (operator === '-' && this.state.score > 0) {
      this.setState({score : this.state.score - 1})
      }else if (operator === 'reset') {
        this.setState({score : 0})
      }
  }
  render() {
    return (
      <div>
        <button onClick={this.generateQuestion} value='one'>
          Random Question
        </button>
        <button onClick={this.generateQuestion} value='ten'>
          10 Random Question
        </button>
        <button onClick={this.generateQuestion} value='42' name ='Sports'>
          Sports
        </button>
        <button onClick={this.generateQuestion} value='136' name ='Stupid Answers'>
          Stupid Answers
        </button>
        <div>
          {this.state.data === null ? 
          <h1>Select your option</h1>
            :
            this.state.data.map((question, index) => {
              return <Question 
              question={question} 
              index={index} 
              key={index}
              category ={this.state.category}
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
