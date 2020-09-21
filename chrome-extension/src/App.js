import React from 'react';
import Login from './containers/Login';
import { Router } from 'react-chrome-extension-router';
import MainProvider from './provider/MainProvider'
import { getParameterByName } from './util/utils';

function App() {
  return (
    <MainProvider>
    <div className="App">
      <Router>
        <Login></Login>
      </Router>
    </div>
    </MainProvider>
  );
}

export default App;
