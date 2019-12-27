import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';

// COMPONENTS
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignupLoginPage from './pages/signuploginpage/signuploginpage.component';
import { auth } from './firebase/firebase.utils';

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

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;
