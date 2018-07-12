import React, { Component, Fragment } from 'react';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <h1 style={{color: "red", textAlign: "center"}}>Create Account</h1>
                <form onSubmit={this.props.handleSubmit} onChange={this.props.handleChange}style={{color: "green", textAlign: "center", fontSize: 20}} >
                    <label htmlFor="username">UserName</label> <br></br>
                    <input type="text" placeholder="Enter Username" name="username" value={this.props.userNameValue}/> <br></br>
                    <label htmlFor="password" name="password" > Password </label><br></br>
                    <input type="password" placeholder="Enter Password" name="password"/> <br></br>
                    <button type="submit">Submit</button>
                </form>
            </Fragment>
        );
    }
}

export default Login;