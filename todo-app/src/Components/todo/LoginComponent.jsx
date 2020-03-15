import React, {Component} from 'react'

import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    
    constructor(props){
      super(props)
      this.state  = {
          username : 'sriSatish',
          password : '   ',
          hasLoginFailed: false,
          showSuccessMessage: false
         // has
      }
      this.handleChange = this.handleChange.bind(this)
      this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
      //console.log(this.state)
      this.setState({
          [event.target.name]
                : event.target.value
      }
      )
  }

  loginClicked(){
    //console.log(this.state)
     if(this.state.username==='sriSatish' && this.state.password==='12345'){
       AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
       this.props.history.push(`/welcome/${this.state.username}`)
       console.log('Sucessful')
      this.setState({
        showSuccessMessage: true,
        hasLoginFailed: false
      }) 
     }
         
      else{
        console.log('Failed')   
        this.setState({
          showSuccessMessage: false,
          hasLoginFailed: true
        })
      }
         
  }
    
    render() {
        return (
            <div className="LoginComponent">
              <h1>Login</h1>
             {/* <ShowLoginFailed hasLoginFailed={this.state.hasLoginFailed}></ShowLoginFailed>
             <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowLoginSuccessMessage> */}
              {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
              {this.state.showSuccessMessage && <div>Login Successfull</div>}
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            Password: <input type="password" name="password"  value={this.state.password} onChange={this.handleChange} />
            <button className="btn btn=s" onClick={this.loginClicked}>Login</button>
            </div>
           
        );
    }
  }
 /* function ShowLoginFailed(props){
    if(props.hasLoginFailed){
     return <div>Invalid Credentials</div>
    }
    return null
  }

  function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
     return <div>Login Successfull</div>
    }
    return null
  } */
  export default LoginComponent
