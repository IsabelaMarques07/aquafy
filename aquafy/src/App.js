import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home';
import ByMusic from './pages/by_music';

class App extends React.Component {
  render(){
    return (
      <>
        <Router>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/playlist">
            <ByMusic/>
          </Route>
        </Router>
      </>
    );
  }

}

export default App;
