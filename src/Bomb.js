// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        let bombMessage;
        if (this.state.secondsLeft == 0){
            bombMessage =  <div>Boom!</div>
        } else {
            bombMessage = <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
        return (
            bombMessage
        );
    }
}