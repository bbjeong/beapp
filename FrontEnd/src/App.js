import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Survey from './components/survey';
import Winner from './components/winner';
import Ranking from './components/ranking';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/survey" component={Survey} />
              <Route exact path="/ranking" component={Ranking} />
              <Route exact path="/winner" component={Winner} />
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;