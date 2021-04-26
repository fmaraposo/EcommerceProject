import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';

import {selectCurrentUser} from './redux/user/user.selectors'

import './App.css';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } 
      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/* conditional if the user is signed in he/she can't access SignIn Component and will be redirected to Home */}
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser:selectCurrentUser(state)
})

//A function that gets a dispatch property and will return an object. 
const mapDispatchToProps = dispatch => ({
  
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App);
