import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInAndRegister from './pages/SignInAndRegisterPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin&register' component={SignInAndRegister} />
      </Switch>
    </div>
  );
}

export default App;
