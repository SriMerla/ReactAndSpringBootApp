import React, { Component } from 'react';
import FirstComponent, {FourthComponent} from './Components/learningExample/FirstComponent'
import SecondComponent from './Components/learningExample/SecondComponent'
import ThirdComponent from './Components/learningExample/ThirdComponent'
import CounterButton from './Components/counter/CounterButton'
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import Counter from './Components/counter/CounterButton';
import TodoApp from './Components/todo/TodoApp';


function App() {
  return (
    <div className="App">
  
     {/* <Counter></Counter> */}
      <TodoApp/> 
    </div>
  );
} 

// class component

class LearningComponents extends Component{
  render() { 
    return (
      <div className="learningComponents">
      <ExampleComponent></ExampleComponent>
      <ExampleFunctionComponent></ExampleFunctionComponent>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
      </div>

    );
  }
}

class ExampleComponent extends Component{
  render() { 
    return (
      <div className="App">
        ExampleComponent
      </div>

    );
  }
}
// function component
function ExampleFunctionComponent(){
  return (
    <div className="App">
      ExampleFunctionComponent
    </div>
  );
}
export default App;
