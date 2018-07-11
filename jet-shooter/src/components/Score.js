import React, { Component } from 'react';

class Score extends Component {
    render() {
        return (
            <div>
                <h4 style={{color: "white"}}>Score: {this.props.gameScore}</h4>
            </div>
        );
    }
}

export default Score;