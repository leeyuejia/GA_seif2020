import React, { Component } from 'react'

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
            <button onClick={this.handleScore} name='reset'>Reset</button>
          </div>
        </React.Fragment>
      )
    }
  }
export default ScoreBoard
