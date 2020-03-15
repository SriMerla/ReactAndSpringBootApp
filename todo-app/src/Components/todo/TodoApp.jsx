import React , {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListToDoComponent from './ListToDoComponent'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'



class TodoApp extends Component{
    render() { 
      return (
        <div className="TodoApp">
          <Router>
            <>
            <HeaderComponent></HeaderComponent>
            <Switch>
            <Route path = "/" exact component={LoginComponent}></Route>
            <Route path = "/login" component={LoginComponent}></Route>
            <AuthenticatedRoute path = "/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/todos" component={ListToDoComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/logout" component={LogoutComponent}></AuthenticatedRoute>
            <Route component={ErrorComponent}></Route>

            </Switch>
            <FooterComponent></FooterComponent>
            </>
          </Router>
            {/* <LoginComponent/>
            <WelcomeComponent/> */}
        </div>
      );
    }
  }

  class HeaderComponent extends Component{
    render(){
      const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
      console.log(isUserLoggedIn);
      return(
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div ><a href="http://www.in28minutes.com" className="navbar-brand">In28minutes</a></div>
            <ul className ="navbar-nav">
              {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/webapp">Home</Link></li>}
             {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
            </ul>
            <ul className = "navbar-nav navbar-collapse justify-content-end">
              {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
              {isUserLoggedIn && <li><Link className=" nav-link" to="/logout" onClick={AuthenticationService.logout} >Logout</Link></li>}
            </ul>
           
          </nav>
        </header>
      )
    }
  }

 

 class FooterComponent extends Component{
    render(){
      return (
        <footer className="footer">
           <span className="text-muted">All Rights Reserved 2020 @srisatish</span>
        </footer>
      )
    }
  }
  
  
 
export default TodoApp;

