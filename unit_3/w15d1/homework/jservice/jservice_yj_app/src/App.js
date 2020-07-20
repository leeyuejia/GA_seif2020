import React, { Component } from 'react'
import './App.css';
import Title from './component/Title'
import Footer from './component/Footer'
import ScoreBoard from './component/ScoreBoard'
import Question from './component/Question'
import Selection from './component/Selection'

const apiUrl = 'http://jservice.io/api/'
const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
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
        break;
        default :
        return true
    }
      const response = await fetch(apiUrl + this.state.query)
      const result = await response.json()
      console.log(result)
      console.log(this.state.category)
      this.setState({ data: result })
  }

  async fetchCategoryQuestion(event) {
    const query = event.target.value
    const name = event.target.name
    console.log(query)
    console.log(name)
    console.log(this.state.category)
    const response = await fetch(apiUrl + 'category?id=' + query)
    const result = await response.json()
    const tenResult = []
      for(let i=0 ; i < 5; i++) {
       tenResult.push(result.clues[randomNumber(result.clues.length)])
      }
      console.log(tenResult)
    await this.setState({ 
        data: tenResult,
        query : 'category?id=' + query,
        category : name
      })
      console.log(this.state.data)
      console.log(this.state.category)
  }

  ///Generate Question
  async generateQuestion(event) {
    event.preventDefault()
    switch (event.target.value) {
      case '42':
        await this.fetchCategoryQuestion(event)
        break;
      case '136':
        await this.fetchCategoryQuestion(event)
        break;
      case '114':
        await this.fetchCategoryQuestion(event)
        break;
      case '31':
        await this.fetchCategoryQuestion(event)
        break;
      case '4':
        await this.fetchCategoryQuestion(event)
        break;
      default:
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
      <div className = 'displayBoard-container'>
        <div className = 'menu-left'>
          <h2> Menu </h2>
          <div className='selection-container'>
          <Selection handleQuestion = {this.generateQuestion} value = 'one' name = 'Random Question'/>
          <Selection handleQuestion = {this.generateQuestion} value = 'ten' name = '10 Random Question'/>
          <Selection handleQuestion = {this.generateQuestion} value = '42' name = 'Sports'/>
          <Selection handleQuestion = {this.generateQuestion} value = '136' name = 'Stupid Answers'/>
          <Selection handleQuestion = {this.generateQuestion} value = '114' name = 'History'/>
          <Selection handleQuestion = {this.generateQuestion} value = '31' name = 'The Bible'/>
          <Selection handleQuestion = {this.generateQuestion} value = '4' name = 'The Movie'/>
          </div>
        </div>
        <div className='questionboard'>
          {this.state.data === null ? 
          <h2>Select your option</h2>
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
      <Footer />
    </div>
  );
}

export default App;
