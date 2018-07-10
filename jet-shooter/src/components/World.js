import React, { Component } from 'react';
import Ship from './Ship'
import keydown from 'react-keydown'
import Obstacle from './Obstacle'

class World extends Component {
       
    state = {
        shipSpeed: 1,
        currentDirection: 0,
        currentPosition: {
            left: window.innerWidth/2,
            top: window.innerHeight/2
        },
        attack: null,
        attackTravelSpeed: 3,
        attackDirection: 0,
        attackPosition: {
            left: null,
            top: null,
        },
        obstacleSize: 20,
        obstacleCoordinate: {
            top: 0,
            left: 200,
        }
    }
   

    componentDidMount() {
        window.addEventListener("keydown", this.handleControls)
       var obstacleLocation = setInterval(() => {
            this.setState({
                obstacleCoordinate: {
                    top: this.state.obstacleCoordinate.top + 1,
                    left: this.state.obstacleCoordinate.left + 1,
                }
            })
       }, 100 )
    }
 
    

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
            if (this.state.currentPosition.top < 0)  {
                this.setState({
                    currentPosition: {
                        top: window.innerHeight,
                        left: this.state.currentPosition.left
                    }
                });
            }
            else{
            this.setState({currentPosition: {top: this.state.currentPosition.top - this.state.shipSpeed, left: this.state.currentPosition.left } })
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
                        left: window.innerWidth
                    }
                });
            }
            else {
                this.setState({currentPosition: {top: this.state.currentPosition.top, left: this.state.currentPosition.left - this.state.shipSpeed } })
            }
            }, 100)
           break;

           //right (d)
           case 68:
          setInterval(() => {
            if (this.state.currentPosition.left > window.innerWidth){
                this.setState({
                    currentPosition: {
                        top: this.state.currentPosition.top,
                        left: 1
                    }
                });
            }
            else {
            this.setState({currentPosition: {top: this.state.currentPosition.top, left: this.state.currentPosition.left + this.state.shipSpeed } })
            }
            }, 100)
           break;

           //down (s)
           case 83:
           setInterval(() => {
            if (this.state.currentPosition.top > window.innerHeight)  {
                this.setState({
                    currentPosition: {
                        top: 1,
                        left: this.state.currentPosition.left
                    }
                });
            }
            else{
            this.setState({currentPosition: {top: this.state.currentPosition.top + this.state.shipSpeed, left: this.state.currentPosition.left } })
            }
            }, 100)
           break;

           //spacebar
           case 32:
           if (this.state.attack !== true) {
         
        
            if (this.state.currentDirection === 0){
                var upwardProjectile = setInterval(() => {
                    this.setState({
                        attackPosition: {
                            left: this.state.attackPosition.left,
                            top: this.state.attackPosition.top - this.state.attackTravelSpeed
                        }
                    }, () => {
                        if (this.state.attackPosition.top < 0) {
                            console.log(upwardProjectile)
                            clearInterval(upwardProjectile)
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
                    this.setState({
                        attack: true,
                        attackDirection: 270,
                        attackPosition: {
                            left: this.state.currentPosition.left - 25,
                            top: this.state.currentPosition.top - 65
                        }
                    })
                    upwardProjectile
                    
                } // end of Ship-Up if statement
            
            // Shoot Down
            
            
                if (this.state.currentDirection === 180){
                    var downwardProjectile = setInterval(() => {
                        this.setState({
                            attackPosition: {
                                left: this.state.attackPosition.left,
                                top: this.state.attackPosition.top + this.state.attackTravelSpeed
                            }
                        }, () => {
                            if (this.state.attackPosition.top > window.innerHeight) {
                                clearInterval(downwardProjectile)
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
                        this.setState({
                            attack: true,
                            attackDirection: 90,
                            attackPosition: {
                                left: this.state.currentPosition.left - 25,
                                top: this.state.currentPosition.top + 65
                            }
                        })
                        downwardProjectile
                        
                    } // end of Ship-Down if statement

                    // This is the rightward Projectile

                    if (this.state.currentDirection === 90){
                        var rightwardProjectile = setInterval(() => {
                            this.setState({
                                attackPosition: {
                                    left: this.state.attackPosition.left + this.state.attackTravelSpeed,
                                    top: this.state.attackPosition.top
                                }
                            }, () => {
                                if (this.state.attackPosition.left > window.innerWidth) {
                                    clearInterval(rightwardProjectile)
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
                            this.setState({
                                attack: true,
                                attackDirection: 360,
                                attackPosition: {
                                    left: this.state.currentPosition.left + 30,
                                    top: this.state.currentPosition.top + 3
                                }
                            })
                            rightwardProjectile
                            
                        } // end of Ship-Right if statement

                    // This is the leftward Projectile

                    if (this.state.currentDirection === 270){
                        var leftwardProjectile = setInterval(() => {
                            this.setState({
                                attackPosition: {
                                    left: this.state.attackPosition.left - this.state.attackTravelSpeed,
                                    top: this.state.attackPosition.top
                                }
                            }, () => {
                                if (this.state.attackPosition.left < 0) {
                                    clearInterval(leftwardProjectile)
                                        this.setState({
                                            attack: null,
                                            attackDirection: 0,
                                            attackPosition: {
                                                left: 0,
                                                top: 0,
                                            }
                                        })          
                                    } //end of callback if statement 
                                    else if ((this.state.attackPosition.left == this.state.obstacleCoordinate.left + 250
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 251
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 251
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 252
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 252
                                        ) && (this.state.attackPosition.top > this.state.obstacleCoordinate.top 
                                            && this.state.attackPosition.top < this.state.obstacleCoordinate.top + 340)
                                    )
                                    {
                                        clearInterval(leftwardProjectile)
                                        this.setState({
                                            obstacleSize: this.state.obstacleSize-10,
                                            attack: null,
                                            attackDirection: 0,
                                            attackPosition: {
                                                left: 0,
                                                top: 0,
                                            }
                                        })
                                    }
                                    
                                } // end of callback function 
                            ) // end of sst in setInterval
                        }, 10) // end of setInt
                            this.setState({
                                attack: true,
                                attackDirection: 180,
                                attackPosition: {
                                    left: this.state.currentPosition.left - 90,
                                    top: this.state.currentPosition.top + 3
                                }
                            })
                            leftwardProjectile
                            
                        } // end of Ship-Left if statement



            } else {
                console.log("hitting this")
            }
           break;
        }
      }
    

    render() {
        return (
            <div>
            <Ship attackDirection={this.state.attackDirection} attackPosition={this.state.attackPosition} currentPosition={this.state.currentPosition} currentDirection={this.state.currentDirection} handleControls={this.handleControls} attack={this.state.attack}/>
            <Obstacle obstacleCoordinate={this.state.obstacleCoordinate} obstacleSize={this.state.obstacleSize}/>
            </div>
        );
    }
}

export default World;