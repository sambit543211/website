import './App.css';
import React from 'react';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'

import Writing from './pages/writing';
import SuchiPage from './pages/suchi';
import TeamPage from './pages/team';




function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SuchiPage}/>
        <Route exact path="/writing" component={Writing}/>
        <Route exact path="/team" component={TeamPage}/>

      </Switch>
    </Router>
    
  );
};

export default App;
