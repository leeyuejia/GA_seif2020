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
            <MDBContainer>
                <h1>{taco.seasoning.name}</h1>
                <MDBListGroup style={{ width: "22rem" }}>
                    <MDBListGroupItem>Base_Layer: {taco.base_layer.name}</MDBListGroupItem>
                    <MDBListGroupItem>Condiment : {taco.condiment.name}</MDBListGroupItem>
                    <MDBListGroupItem>mixin : {taco.mixin.name}</MDBListGroupItem>
                    <MDBListGroupItem>seasoning: {taco.seasoning.name}</MDBListGroupItem>
                    <MDBListGroupItem>shell : {taco.shell.name}</MDBListGroupItem>
                </MDBListGroup>
                {arrayKey.map((key,index) => {
                    console.log(key)
                    return<Panel tacoKey= {key} key={index}/>
                })
                }
            </MDBContainer>
        )
    }
}
export default Display;