// REACT
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; // redux
import { createStructuredSelector } from 'reselect';

// CSS
import './App.scss';

// COMPONENTS
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignupLoginPage from './pages/signuploginpage/signuploginpage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';

// AUTH
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// REDUX
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';  // redux

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props; // redux

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) { // if userAuth exists
        const userRef = await createUserProfileDocument(userAuth); // then pass userAuth to get back reference

        userRef.onSnapshot(snapShot => { // then set state using snapshop of reference
          setCurrentUser({ // redux
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log(this.state);
        });
      } else { // else if user signs out, state is set to userAuth which is null
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignupLoginPage />)} />
            <Route exact path='/checkout' component={CheckoutPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser
  }
)

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
