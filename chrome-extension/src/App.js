import React from 'react';
import Login from './containers/Login';
import { Route, Switch, Router } from 'react-router-dom';
import Item from './containers/Item';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Router>
        <Route path="/" component={Login} exact />
        <Route path="/item" component={Item} exact />
        </Router>
        
      </Switch> */}
      <Login></Login>
      {/* <Router>
        <Route path="/item" component={Item} exact />
      </Router> */}
    </div>
  );
}

export default App;
