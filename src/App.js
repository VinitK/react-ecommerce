import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'; // redux

import './App.scss';

// COMPONENTS
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignupLoginPage from './pages/signuploginpage/signuploginpage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';  // redux

const CategoryPage = props => {
  return (
    <div>
      <h1 className="page-title">{props.match.params.category.toUpperCase()}</h1>
      <Link to="/"><button>Home</button></Link>
    </div>
  );
}

const MatDetailPage = props => {
  return (
    <div>
      <h1 className="page-title">{props.match.params.matid.split("-").join(" ").toUpperCase()}</h1>
    </div>
  )
}

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
            <Route path='/mats/:matid' component={MatDetailPage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignupLoginPage} />
            <Route exact path='/:category' component={CategoryPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
)

export default connect(null, mapDispatchToProps)(App);
