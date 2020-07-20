import React, { Component } from 'react'
import DisplayResult from './DisplayResult'

class Question extends Component {
    constructor(props) {
      super(props)
      this.state = {
          question: this.props.question,
          displayAnswer : false,
          submitAnswer : '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.clue = this.clue.bind(this)
    }
    handleChange(event) {
      event.preventDefault()
      this.setState({
          submitAnswer : event.target.value
      })
      console.log(this.state.displayAnswer)
    }
    handleSubmit (event) {
      event.preventDefault()
      const answer = this.props.question.answer
      this.setState ({displayAnswer : !this.state.displayAnswer, rightAns : answer})
    }
    clue (answer) {
        const split = answer.split("")
        const regLetter = /^[A-Za-z]+$/
        const result = []
        split.forEach((letter, index) => {
            if(!letter.match(regLetter)) {
                result.push(letter)
            }else if (letter.match(regLetter) && index%4 === 0) {
                result.push('_')
            }else result.push(letter)
        })
        return result
    }
    async componentDidUpdate(prevProps) {
        if(this.props.question.question !== prevProps.question.question) {
            await this.setState({
                question: this.props.question,
                displayAnswer : false,
                submitAnswer: ''
            })
        }
    }
    render() {
      const data = this.props.question
      const clue = this.clue(this.props.question.answer)
      const displayAnswer = this.state.displayAnswer
      return (
        <React.Fragment>
            <div>
          <h2>Category : {data.category.title}</h2>
          <h2 id={this.props.index}>Question: {data.question}</h2>
          <label htmlFor='answer'>Answer :</label>
          <input type='text' className='answer' onChange={this.handleChange} value={this.state.submitAnswer}></input>
          <button type='submit' onClick={this.handleSubmit}>Show Answer</button>
          <h3>Clue : {clue} </h3>
          </div>
          {displayAnswer? 
            <div>
                <DisplayResult 
                    answer = {this.state.submitAnswer}
                    rightAns = {data.answer}/>
            </div>
            :
            ''
        }
          
        </React.Fragment>
      )
    }
  }

export default Question
