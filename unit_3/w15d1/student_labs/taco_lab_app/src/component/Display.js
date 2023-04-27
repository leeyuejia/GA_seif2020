import React, { Component } from 'react'
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import Panel from './Panel';

class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        const taco = this.props.taco
        const arrayKey = Object.keys(taco)
        return (
            <MDBContainer style={{ width: "90rem", margin:"0 auto" }}>
                <h1>Random Taco</h1>
                <MDBListGroup style={{ width: "40rem" }}>
                <MDBListGroupItem>seasoning: {taco.seasoning.name}</MDBListGroupItem>
                    <MDBListGroupItem>Base_Layer: {taco.base_layer.name}</MDBListGroupItem>
                    <MDBListGroupItem>Condiment : {taco.condiment.name}</MDBListGroupItem>
                    <MDBListGroupItem>mixin : {taco.mixin.name}</MDBListGroupItem>
                    
                    <MDBListGroupItem>shell : {taco.shell.name}</MDBListGroupItem>
                </MDBListGroup>
                <div className='container-display'>
                {arrayKey.map((key,index) => {
                    return <Panel tacoKey= {key} key={index} taco = {taco}/>
                })
                }
                </div>
            </MDBContainer>
        )
    }
}
export default Display;