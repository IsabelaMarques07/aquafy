import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ChooseOption from './pages/choose_option';
import Home from './pages/home';

class App extends React.Component {
  render(){
    return (
      <>
        <Router>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/choose">
            <ChooseOption/>
          </Route>
        </Router>
      </>
    );
  }

}

export default App;
