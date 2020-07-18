import React, {Component} from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";


class Panel extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const key = this.props.tacoKey
        const index = this.props.index
        return (
            <MDBContainer>
                <MDBCard className='card-body' id={index} style={{ width: "22rem", marginTop: "1rem" }}>
                    <MDBCardTitle>{key.name}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the panel title and make up the
                        bulk of the panel's content.
                    </MDBCardText>
                    <div className="flex-row">
                        <a href="#!">MDBCard link</a>
                    </div>
                </MDBCard>
            </MDBContainer>
        )
    }
}


export default Panel;