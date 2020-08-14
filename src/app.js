import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={[]} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

export default connect(mapStateToProps)(App);
