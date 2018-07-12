import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import World from './components/World'
import Login from './components/Login'

let userArray = []

class App extends Component {
 state = {
   loggedIn: false,
   userNameValue: "",
   userPassword: "",
   currentUser: "",
 }

  handleChange = (event) => {
    if (event.target.type === "text") {
    this.setState({
      userNameValue: event.target.value,
      userPassword: this.state.userPassword
    })
    }
    else  {
      this.setState({
        userPassword: event.target.value,
        userNameValue: this.state.userNameValue
      })
    }
    
  }


  getUsers(data) {
    data.map(user => userArray.push(user))
    const match = userArray.find(user => user.username === this.state.userNameValue)
    if (match !== undefined) {
      this.setState({
        currentUser: match
      })
    }
    else {
      const body = {
          username: this.state.userNameValue,
          password: this.state.userPassword
      }
      let config =  {
      method:'POST',
      headers:{
          'Content-type':'application/json',
          'Accept': 'application/json'
              },
      body:JSON.stringify(body)
      }
      fetch("http://localhost:4000/users", config).then(r => r.json()).then(data => this.setState({loggedIn: true, currentUser: data }))
    }
    
  }

  handleSubmit = (event) => {
    event.preventDefault()
   
    fetch("http://localhost:4000/users").then(r=> r.json()).then(data => this.getUsers(data))
    
    
    
    
  
  }

  render() {
    return (
        <div style={{position:"absolute", backgroundImage: 'url(https://www.macleans.ca/wp-content/uploads/2014/07/stars-carousel.jpg)', height: "100%", width: "100%"}}>
          {this.state.loggedIn == false ? <Login userNameValue={this.state.userNameValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> : <World currentUser={this.state.currentUser}/>}
        </div>
    );
  }
}

export default App;
