import React, { Component } from 'react';
import Ship from './Ship'
import keydown from 'react-keydown'

class World extends Component {
       
    state = {
        currentDirection: 0,
        currentPosition: {
            left: window.innerWidth/2,
            top: window.innerHeight/2
        },
        attack: null,
        attackDirection: 0,
        attackPosition: {
            left: null,
            top: null,
        }
    }
   

    componentDidMount() {
        window.addEventListener("keydown", this.handleControls)
        // window.innerWidth = 1700
        // window.innerHeight = 740
    }
 
    // componentDidUpdate(prevProps, prevState) {
    //    clearInterval()
    //     if (this.state.currentPosition.left === 0){
    //         this.setState({
    //             top: this.state.currentPosition.top,
    //             left: 740
    //         })
    //     }
    // }
        

    handleControls = (event) => {
        

        switch (event.keyCode) {
          case 37:
          this.setState({currentDirection: 270})
            break;
          case 39:
          this.setState({currentDirection: 90})
           break;
           case 38:
           this.setState({currentDirection: 0})
           break;
           case 40:
           this.setState({currentDirection: 180})
           break;
           //up (w)
           case 87:
          setInterval(() => {
            if (this.state.currentPosition.top === 0)  {
                this.setState({
                    currentPosition: {
                        top: 740,
                        left: this.state.currentPosition.left
                    }
                });
            }
            else{
            this.setState({currentPosition: {top: this.state.currentPosition.top - 1, left: this.state.currentPosition.left } })
            }
            }, 100)
           break;

           //left (a)
           case 65:
          setInterval(() => {
            if (this.state.currentPosition.left === 1){
                this.setState({
                    currentPosition: {
                        top: this.state.currentPosition.top,
                        left: 1699
                    }
                });
            }
            else {
                this.setState({currentPosition: {top: this.state.currentPosition.top, left: this.state.currentPosition.left - 1 } })
            }
            }, 100)
           break;

           //right (d)
           case 68:
          setInterval(() => {
            if (this.state.currentPosition.left === 1700){
                this.setState({
                    currentPosition: {
                        top: this.state.currentPosition.top,
                        left: 1
                    }
                });
            }
            else {
            this.setState({currentPosition: {top: this.state.currentPosition.top, left: this.state.currentPosition.left + 1 } })
            }
            }, 100)
           break;

           //down (s)
           case 83:
           setInterval(() => {
            if (this.state.currentPosition.top === 741)  {
                this.setState({
                    currentPosition: {
                        top: 1,
                        left: this.state.currentPosition.left
                    }
                });
            }
            else{
            this.setState({currentPosition: {top: this.state.currentPosition.top + 1, left: this.state.currentPosition.left } })
            }
            }, 100)
           break;

           //spacebar
           case 32:
           clearInterval()
            if (this.state.currentDirection === 0){
                clearInterval()
                    this.setState({
                        attack: true,
                        attackDirection: 270,
                        attackPosition: {
                            left: this.state.currentPosition.left - 25,
                            top: this.state.currentPosition.top - 65
                        }
                    })
                    setInterval(() => {
                        this.setState({
                            attackPosition: {
                                left: this.state.attackPosition.left,
                                top: this.state.attackPosition.top - 2
                            }
                        }, () => {
                            if (this.state.attackPosition.top < 0) {
                                    this.setState({
                                        attack: null,
                                        attackDirection: 0,
                                        attackPosition: {
                                            left: 0,
                                            top: 0,
                                        }
                                    })          
                                } //end of callback if statement 
                            } // end of callback function 
                        ) // end of sst in setInterval
                    }, 10) // end of setInt
                } // end of Ship-Up if statement
                //Ship-Down
                if (this.state.currentDirection === 180){
                    clearInterval()
                    this.setState({
                        attack: true,
                        attackDirection: 90,
                        attackPosition: {
                            left: this.state.currentPosition.left - 25,
                            top: this.state.currentPosition.top - 65
                        }
                    })
                    setInterval(() => {
                        this.setState({
                            attackPosition: {
                                left: this.state.attackPosition.left,
                                top: this.state.attackPosition.top + 2
                            }
                        }, () => {
                            if (this.state.attackPosition.top < 0) {
                                    this.setState({
                                        attack: null,
                                        attackDirection: 0,
                                        attackPosition: {
                                            left: 0,
                                            top: 0,
                                        }
                                    })          
                                } //end of callback if statement 
                            } // end of callback function 
                        ) // end of sst in setInterval
                    }, 10) // end of setInt
                } // end of Ship-Down if statement
           break;
        }
      }
    

    render() {
        return (
            <div>
            <Ship attackDirection={this.state.attackDirection} attackPosition={this.state.attackPosition} currentPosition={this.state.currentPosition} currentDirection={this.state.currentDirection} handleControls={this.handleControls} attack={this.state.attack}/>
            <img src="https://space-facts.com/wp-content/uploads/mars-transparent.png" style={{width: "20%"}}/>
            </div>
        );
    }
}

export default World;