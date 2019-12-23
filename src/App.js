import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';

// COMPONENTS
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

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

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/mats/:matid' component={MatDetailPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/:category' component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
