import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home';
import PlaylistCreator from './pages/playlist_creator';

class App extends React.Component {
  render(){
    return (
      <>
        <Router>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/playlist">
            <PlaylistCreator/>
          </Route>
        </Router>
      </>
    );
  }

}

export default App;
