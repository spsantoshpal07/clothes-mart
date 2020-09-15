import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
