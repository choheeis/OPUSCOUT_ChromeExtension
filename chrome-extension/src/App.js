import React from 'react';
import Login from './containers/Login';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Item from './containers/Item';
import {
  Router
} from 'react-chrome-extension-router';

function App() {
  return (
    <div className="App">
      <Router>
        <Login></Login>
      </Router>
    </div>
  );
}

export default App;
