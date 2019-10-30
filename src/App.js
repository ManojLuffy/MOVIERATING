import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Tvshow from './components/Tvshows/Tvshow';
import CardDetails from './components/UI/CardDetails/CardDetails';


function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/tv" exact component={Tvshow} />
        <Route path="/:id" exact component={CardDetails} />
      </Switch>
    </div>
  );
}

export default App;
