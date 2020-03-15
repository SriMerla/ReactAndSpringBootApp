import React, {Component} from 'react'

class WelcomeComponent extends Component{

  constructor(props){
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
  }
    render() {
      return (
        <>
          <h1>Welcome!</h1>
          <div className="container">
          Welcome {this.props.match.params.name}. You can manage your todos <a href="/todos">here</a>
          </div>
          <div className="Container">
            Click here to get a constomized welcome message.
            <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
          </div>
        </>
      
      )
    }

    retrieveWelcomeMessage(){
      console.log('retrieve clicked');
    }
  }

  export default WelcomeComponent