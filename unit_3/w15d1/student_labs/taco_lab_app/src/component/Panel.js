import React, {Component} from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
const ReactMarkdown = require('react-markdown')

class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const key = this.props.tacoKey
        const index = this.props.index
        const taco = this.props.taco
        console.log(taco)
        return (
            <MDBContainer className='eachCard'>
                <MDBCard className='card-body ' id={index} style={{ width: "80rem", marginTop: "1rem" }}>
                    <MDBCardTitle>{taco[key].name}</MDBCardTitle>
                    <MDBCardText>
                        <ReactMarkdown source={taco[key].recipe}/>
                    </MDBCardText>
                    <div className="flex-row">
                        <a href="#!">{taco[key].url}</a>
                    </div>
                </MDBCard>
            </MDBContainer>
        )
    }
}
export default Panel;