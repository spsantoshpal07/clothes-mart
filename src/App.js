import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInAndRegister from './pages/SignInAndRegisterPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

    unsubscribeFromAuth = null;

    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        if(user) {
          const userRef = await createUserProfileDocument(user);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
        } else {
          this.setState({
            currentUser: user
          })
        }
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin&register' component={SignInAndRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
