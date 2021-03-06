import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Header from './components/Header';
import SignInAndRegister from './pages/SignInAndRegisterPage';
import CheckoutPage from './pages/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      } else {
        setCurrentUser(user)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin&register' 
            render={
              () => this.props.currentUser
                ? (<Redirect to='/' />)
                : (<SignInAndRegister />)
            } />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
