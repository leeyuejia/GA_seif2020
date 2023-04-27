import React, { Component } from 'react'

class DisplayResult extends Component {
    render() {
        return (
            <div className='result'>
                <div className='submitAnswer'>
                    <h3>Your Answer : {this.props.answer}</h3>
                </div>
                <div className='answer'>
                    <h3>Correct Answer : {this.props.rightAns}</h3>
                </div>
            </div>
        )
    }
}

export default DisplayResult
