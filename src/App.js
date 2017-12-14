/**
 * @description: App
 * @author: renchunhui2008@gmail.com
 *
 * Copyright Ren Chunhui. All Rights Reserved.
 *
 * This program is free software. You can redistribute and/or modify it
 * in accordance with the terms of the accompanying license agreement.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AppBar from './components/AppBar';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <AppBar title='Component'/>
        </div>
      </Router>
    )
  }
}

export default App;
