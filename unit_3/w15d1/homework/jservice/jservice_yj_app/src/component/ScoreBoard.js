import React, { Component } from 'react'
import { MDBBtn, MDBBtnGroup } from "mdbreact";

class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    this.handleScore = this.handleScore.bind(this)
  }
  handleScore(event) {
    event.preventDefault()
    this.props.updateScore(event)
  }

  render() {
    return (
      <React.Fragment>
        <h2>Score</h2>
        <h1>{this.props.score}</h1>
        <MDBBtnGroup className='scorebutton'>
          <MDBBtn onClick={this.handleScore} color="info"  name='+'>+</MDBBtn>
          <MDBBtn onClick={this.handleScore} color="info"  name='-'>-</MDBBtn>
          <MDBBtn onClick={this.handleScore} color="info" name ='reset'>Reset</MDBBtn>
        </MDBBtnGroup>
      </React.Fragment>
    )
  }
}
export default ScoreBoard
