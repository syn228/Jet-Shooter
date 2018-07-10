import React, { Component } from 'react';

class Obstacle extends Component {
    handleClick = (event) => {
        debugger
    }
    
    render() {
        return (
            <div>
                <img onClick={this.handleClick} src="https://space-facts.com/wp-content/uploads/mars-transparent.png" 
                    style={{
                        position: 'absolute',
                        width: `${this.props.obstacleSize}%`,
                        top: `${this.props.obstacleCoordinate.top}px`,
                        left: `${this.props.obstacleCoordinate.left}px`
                    }}
                />
            </div>
        );
    }
}

export default Obstacle;