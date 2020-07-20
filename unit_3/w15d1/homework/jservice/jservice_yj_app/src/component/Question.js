import React, { Component } from 'react'
import { MDBBox, MDBInput,MDBBtn, MDBBtnGroup } from 'mdbreact';

import DisplayResult from './DisplayResult'

class Question extends Component {
    constructor(props) {
      super(props)
      this.state = {
          question: this.props.question,
          displayAnswer : false,
          submitAnswer : '',
          category : this.props.category
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
 componentDidUpdate(prevProps) {
        console.log(this.props.question.question)
        console.log(prevProps.question.question)
        if(this.props.question.question !== prevProps.question.question) {
             this.setState({
                question: this.props.question,
                displayAnswer : false,
                submitAnswer: '',
                category :this.props.category
            })
        }
    }
    render() {
      const data = this.props.question
      const clue = this.clue(this.props.question.answer)
      const displayAnswer = this.state.displayAnswer
      const category = this.state.category
      console.log(category)
      return (
        <React.Fragment>
            <MDBBox className="block-example border border-dark eachQuestion">
            { category === null ? 
                <h3><strong>Category</strong> :{data.category.title}</h3>
                :
                <h3><strong>Category</strong>  :{category}</h3>
            }
          <h3 id={this.props.index}><strong>Question</strong>: {data.question}</h3>
          <h3><strong>Clue</strong> : {clue} </h3>

          <MDBInput label="Answer" type='text' onChange={this.handleChange} value={this.state.submitAnswer}/>

          <MDBBtn type='submit' onClick={this.handleSubmit}>Show Answer</MDBBtn>
          
          {displayAnswer? 
            <div>
                <DisplayResult 
                    answer = {this.state.submitAnswer}
                    rightAns = {data.answer}/>
            </div>
            :
            ''
        }
          </MDBBox>

        </React.Fragment>
      )
    }
  }

export default Question
