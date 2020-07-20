import React, { Component } from 'react'
import { MDBBtn } from "mdbreact";

export class Selection extends Component {
    render() {
        return (
            <MDBBtn color='default' 
                onClick={(event) => {this.props.handleQuestion(event)}} 
                value = {this.props.value}
                name = {this.props.name}>
                {this.props.name}
            </MDBBtn> 
        )
    }
}

export default Selection
