import React, { Component } from 'react';
import Ship from './Ship'
import keydown from 'react-keydown'
import Obstacle from './Obstacle'
import explosion from '../assets/explosion.gif'

var upwardAccelration = []
var downwardAccelration = []
var leftwardAccelration = []
var rightwardAccelration = []

class World extends Component {
    
    state = {
        shipSrc: "http://www.pngmart.com/files/3/Spaceship-PNG-Image.png", 
        shipSpeed: 3,
        currentDirection: 0,
        currentPosition: {
            test: false,
            left: window.innerWidth/2,
            top: window.innerHeight/2
        },
        attack: null,
        attackTravelSpeed: 7,
        attackDirection: 0,
        attackPosition: {
            left: null,
            top: null,
        },
        obstacleAppearance: true,
        obstacleSize: 20,
        obstacleCoordinate: {
            top: 0,
            left: 0,
        },
        gameOverCounter: 0
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
           while (downwardAccelration.length !== 0) {
            var individualInterval = downwardAccelration.pop();
            clearInterval(individualInterval)
        }
            upwardAccelration.push(setInterval(() => {
            if (this.state.currentPosition.top < 0)  {
                this.setState({
                    currentPosition: {
                        test: true,
                        top: window.innerHeight,
                        left: this.state.currentPosition.left
                    }
                })
            }
            else {
                
                
                this.setState({
                    currentPosition: {
                     top: this.state.currentPosition.top - this.state.shipSpeed, 
                     left: this.state.currentPosition.left 
                    } 
                }, () => {
                    
                    if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +220 
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left 
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 230) 
                                                            && 
                        (this.state.obstacleSize === 20 && this.state.obstacleAppearance == true)
                        )
                        { 
                         this.gameOver();   
                    }
                    else if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +100
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 125)  
                                                            &&
                        (this.state.obstacleSize === 10 && this.state.obstacleAppearance == true)
                        )
                        { 
                            this.gameOver();
                    }
                    else console.log(("nope"));
                })
            }
            }, 100)
          ) // end of push

           break;

           //left (a)
           case 65:
     
            while (rightwardAccelration.length !== 0) {
                var individualInterval = rightwardAccelration.pop();
                clearInterval(individualInterval)
            }
            
         
          leftwardAccelration.push(setInterval(() => {
            if (this.state.currentPosition.left === 1){
                this.setState({
                    currentPosition: {
                        top: this.state.currentPosition.top,
                        left: window.innerWidth
                    }
                });
            }
            else {
                this.setState({
                    currentPosition: {
                        top: this.state.currentPosition.top, 
                        left: this.state.currentPosition.left - this.state.shipSpeed } 
                }, () => {
                    if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +220 
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left +20
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 230)  
                                                            &&
                        (this.state.obstacleSize === 20 && this.state.obstacleAppearance === true)
                        )
                        { 
                            this.gameOver();
                    }
                    else if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +100
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 125)  
                                                            &&
                        (this.state.obstacleSize === 10 && this.state.obstacleAppearance == true)
                        )
                        { 
                            this.gameOver();
                    }
                    else console.log(("nope"));
                     
                })
            }
            }, 100)
        )// end of push
           break;

           //right (d)
           case 68:
           while (leftwardAccelration.length !== 0) {
            var individualInterval = leftwardAccelration.pop();
            clearInterval(individualInterval)
            }
           
            rightwardAccelration.push(setInterval(() => {
            if (this.state.currentPosition.left > window.innerWidth){
                this.setState({
                    currentPosition: {
                        top: this.state.currentPosition.top,
                        left: 1
                    }
                });
            }
            else {
            this.setState({
                currentPosition: {
                    top: this.state.currentPosition.top, 
                    left: this.state.currentPosition.left + this.state.shipSpeed } 
                }, () => {
                    if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +220 
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left +20
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 230)  
                                                            &&
                        (this.state.obstacleSize === 20 && this.state.obstacleAppearance === true)
                        )
                        { 
                            this.gameOver();

                    }
                    else if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +100
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 125)  
                                                            &&
                        (this.state.obstacleSize === 10 && this.state.obstacleAppearance == true)
                        )
                        { 
                            this.gameOver();
                    }
                    else console.log(("nope"));
                     
                })
            }
            }, 100)
        ) //end of push
           break;

           //down (s)
           case 83:
           while (upwardAccelration.length !== 0) {
            var individualInterval = upwardAccelration.pop();
            clearInterval(individualInterval)
            }
            downwardAccelration.push(setInterval(() => {
            if (this.state.currentPosition.top > window.innerHeight)  {
                this.setState({
                    currentPosition: {
                        top: 1,
                        left: this.state.currentPosition.left
                    }
                });
            }
            else{
            this.setState({
                currentPosition: {
                    top: this.state.currentPosition.top + this.state.shipSpeed, 
                    left: this.state.currentPosition.left } 
                }, () => {
                    if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +220 
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left +20
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 230)  
                                                            &&
                        (this.state.obstacleSize === 20 && this.state.obstacleAppearance === true)
                        )
                        { 
                            this.gameOver();
                    }
                    else if (
                        (this.state.currentPosition.top < this.state.obstacleCoordinate.top +100
                            && this.state.currentPosition.top > this.state.obstacleCoordinate.top)
                                                            && 
                        (this.state.currentPosition.left > this.state.obstacleCoordinate.left
                            && this.state.currentPosition.left < this.state.obstacleCoordinate.left + 125)  
                                                            &&
                        (this.state.obstacleSize === 10 && this.state.obstacleAppearance == true)
                        )
                        { 
                            this.gameOver();
                    }
                    else console.log(("nope"));
                     
                })
            }
            }, 100)
        ) // end of push
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
                            else if (
                                (this.state.attackPosition.top == this.state.obstacleCoordinate.top + 200
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 201
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 201
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 202
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 202
                                ) && (this.state.attackPosition.left > this.state.obstacleCoordinate.left 
                                    && this.state.attackPosition.left < this.state.obstacleCoordinate.left + 340) && (this.state.obstacleSize == 20)
                            ) //entire else if (obs-size == 20)
                            {
                                clearInterval(rightwardProjectile)
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
                            else if (
                                (this.state.attackPosition.top == this.state.obstacleCoordinate.top + 100
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 101
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 101
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 102
                                || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 102
                                ) && (this.state.attackPosition.left > this.state.obstacleCoordinate.left -20
                                    && this.state.attackPosition.left < this.state.obstacleCoordinate.left + 100) && (this.state.obstacleSize == 10)
                                ) //entire else if (obs-size == 10)
                                    {
                                    clearInterval(rightwardProjectile)
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
                                else if (this.state.obstacleSize !== 20 && this.state.obstacleSize !== 10){

                                    this.setState({
                                        obstacleAppearance: false,
                                        obstacleCoordinate:{
                                            top: null,
                                            left: null
                                        }
                                    })
                                }// end of obstaclesize== 0 if statement
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
                                else if (
                                    (this.state.attackPosition.top == this.state.obstacleCoordinate.top 
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 1
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 1
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 2
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 2
                                    ) && (this.state.attackPosition.left > this.state.obstacleCoordinate.left 
                                        && this.state.attackPosition.left < this.state.obstacleCoordinate.left + 340) && (this.state.obstacleSize == 20)
                                ) //entire else if (obs-size == 20)
                                {
                                    clearInterval(rightwardProjectile)
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
                                else if (
                                    (this.state.attackPosition.top == this.state.obstacleCoordinate.top 
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 1
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 1
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top + 2
                                    || this.state.attackPosition.top == this.state.obstacleCoordinate.top - 2
                                    ) && (this.state.attackPosition.left > this.state.obstacleCoordinate.left -20
                                        && this.state.attackPosition.left < this.state.obstacleCoordinate.left + 100) && (this.state.obstacleSize == 10)
                                    ) //entire else if (obs-size == 10)
                                        {
                                        clearInterval(rightwardProjectile)
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
                                    else if (this.state.obstacleSize !== 20 && this.state.obstacleSize !== 10){
    
                                        this.setState({
                                            obstacleAppearance: false,
                                            obstacleCoordinate:{
                                                top: null,
                                                left: null
                                            }
                                        })
                                    }// end of obstaclesize== 0 if statement
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
                                    else if (
                                        (this.state.attackPosition.left == this.state.obstacleCoordinate.left
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 1
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 1
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 2
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 2
                                        ) && (this.state.attackPosition.top > this.state.obstacleCoordinate.top 
                                            && this.state.attackPosition.top < this.state.obstacleCoordinate.top + 340) && (this.state.obstacleSize == 20)
                                    ) //entire else if (obs-size == 20)
                                    {
                                        clearInterval(rightwardProjectile)
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
                                    else if (
                                        (this.state.attackPosition.left == this.state.obstacleCoordinate.left 
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 1
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 1
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 2
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 2
                                        ) && (this.state.attackPosition.top > this.state.obstacleCoordinate.top 
                                            && this.state.attackPosition.top < this.state.obstacleCoordinate.top + 100) && (this.state.obstacleSize == 10)
                                        ) //entire else if (obs-size == 10)
                                            {
                                            clearInterval(rightwardProjectile)
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
                                        else if (this.state.obstacleSize !== 20 && this.state.obstacleSize !== 10){

                                            this.setState({
                                                obstacleAppearance: false,
                                                obstacleCoordinate:{
                                                    top: null,
                                                    left: null
                                                }
                                            })
                                        }// end of obstaclesize== 0 if statement
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
                                    else if (
                                        (this.state.attackPosition.left == this.state.obstacleCoordinate.left + 200
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 201
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 201
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 202
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 202
                                        ) && (this.state.attackPosition.top > this.state.obstacleCoordinate.top 
                                            && this.state.attackPosition.top < this.state.obstacleCoordinate.top + 340) && (this.state.obstacleSize == 20)
                                    ) //entire else if (obs-size == 20)
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
                                    else if (
                                        (this.state.attackPosition.left == this.state.obstacleCoordinate.left + 100
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 101
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 101
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left + 102
                                        || this.state.attackPosition.left == this.state.obstacleCoordinate.left - 102
                                        ) && (this.state.attackPosition.top > this.state.obstacleCoordinate.top 
                                            && this.state.attackPosition.top < this.state.obstacleCoordinate.top + 100) && (this.state.obstacleSize == 10)
                                        ) //entire else if (obs-size == 10)
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
                                        else if (this.state.obstacleSize !== 20 && this.state.obstacleSize !== 10){

                                            this.setState({
                                                obstacleAppearance: false,
                                                obstacleCoordinate:{
                                                    top: null,
                                                    left: null
                                                }
                                            })
                                        }// end of obstaclesize== 0 if statement
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
    
      gameOver = () => {
          this.setState ({
              shipSrc: explosion,
              gameOverCounter: this.state.gameOverCounter + 1,
              attack: true,
              attackPosition: {
                left: -100,
                top: -100,
            },
          })
          if (this.state.gameOverCounter === 1){
              alert("GAME OVER!")
          }
      }
    
    render() {

        return (
            <div>
            <Ship shipSrc={this.state.shipSrc} attackDirection={this.state.attackDirection} attackPosition={this.state.attackPosition} currentPosition={this.state.currentPosition} currentDirection={this.state.currentDirection} handleControls={this.handleControls} attack={this.state.attack}/>
            {this.state.obstacleAppearance == true ? <Obstacle obstacleCoordinate={this.state.obstacleCoordinate} obstacleSize={this.state.obstacleSize}/> : null}
            </div>
        );
    }
}

export default World;